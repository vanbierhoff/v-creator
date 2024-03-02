import { MOD_FIELDS, VModule } from '../../router/router-loader/models/v-module.ts';
import {
    getBindString,
    HOST_BIND_SYMBOL,
    JitHostBindingInterface
} from '../../compiler/host-binding/jit-host-binding.ts';
import { BindingInterface } from '../../compiler/host-binding/models/binding.interface.ts';


export function renderEngine(module: VModule, target: HTMLElement) {
    if (module[HOST_BIND_SYMBOL]) {
        hostBindValueChangeDetector(target, module, module[HOST_BIND_SYMBOL]);
    }
}


const hostBindValueChangeDetector = (
    target: HTMLElement,
    module: VModule, binds: {
        bindings: Array<{ style: [], class: [] }>
        bindsMeta: Array<BindingInterface>
        createdBinds: JitHostBindingInterface,
        values: any
    }) => {
    binds.bindsMeta.forEach(bind => {
        if (module[MOD_FIELDS.component].hasOwnProperty(bind.prop)) {
            // корректно создавать нечитаемые свойства
            binds.values[`_${bind.prop}`] = module[MOD_FIELDS.component][bind.prop];
            Object.defineProperty(module[MOD_FIELDS.component], bind.prop, {
                set(value): boolean {
                    binds.values[`_${bind.prop}`] = value;
                    const bindKey = bind.bind.split('.')[0];
                    binds.createdBinds[bindKey] = binds.bindings[bindKey].reduce(
                        (accumulator, bind: any) => {
                            const bindType = bind.bind.split('.');
                            return getBindString(bindType[0], bindType, accumulator, module[MOD_FIELDS.component], bind.prop);
                        },
                        `${bindKey}="`
                    );
                    // корректные абстракции для создания и рендера шаблонов
                    // сделать template функцеий с передчаей байндов и аругоментов как вариант
                    module[MOD_FIELDS.template] =
                        `<${module[MOD_FIELDS.selector]} ${binds.createdBinds.style}" ${binds.createdBinds.class}"> ${module[MOD_FIELDS.template]} </${module[MOD_FIELDS.selector]}> `;
                    console.log(module);
                    console.log(target);

                    target.innerHTML = module[MOD_FIELDS.template];
                    return true;
                },
                get(): any {
                    return binds.values[`_${bind.prop}`];
                }
            });
            console.log(module[MOD_FIELDS.component][bind.prop]);
        }
    });
};
