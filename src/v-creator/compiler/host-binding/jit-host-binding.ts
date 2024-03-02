import { BindingInterface } from './models/binding.interface.ts';
import { MOD_FIELDS, VModule } from '../../router/router-loader/models/v-module.ts';


export interface JitHostBindingInterface {
    style: string;
    class: string;
}

export const HOST_BIND_SYMBOL = Symbol('hostBind');

export function jitHostBinding(target: VModule, binds: Array<BindingInterface>): VModule {

    const bindings = createBindStrings(binds);

    let createdBinds: JitHostBindingInterface = {
        style: '',
        class: ''
    };
    for(const bindKey in bindings) {
        const result = bindings[bindKey].reduce(
            (accumulator, bind: any) => {
                const bindType = bind.bind.split('.');
                return getBindString(bindType[0], bindType, accumulator, target[1], bind.prop);
            },
            `${bindKey}="`
        );
        createdBinds[bindKey] = result;
    }
    target[HOST_BIND_SYMBOL] = {
        bindings: bindings,
        bindsMeta: binds,
        createdBinds: createdBinds
    };
    target[MOD_FIELDS.buildedTemplate] =
        `<${target[MOD_FIELDS.selector]} ${createdBinds.style}" ${createdBinds.class}"> ${target[MOD_FIELDS.template]} </${target[MOD_FIELDS.selector]}> `;

    return target;
}

export const getBindString = (type: 'style' | 'class', bind: [string, string], accumulator: string,
                       target: any, bindProp: string) => {
    if (type === 'class') {
        return `${accumulator}${bind[1]} `;
    }
    return `${accumulator}${bind[1]}:${target[bindProp]};`;
};


const createBindStrings = (binds: Array<BindingInterface>): any => {
    const groupsBind = {
        style: [],
        class: []
    };
    binds.forEach(bind => {
        const bindType = bind.bind.split('.');
        switch (bindType[0]) {
            case 'style':
                groupsBind.style.push(bind);
                return;
            case 'class':
                groupsBind.class.push(bind);
        }
    });
    return groupsBind;
};
