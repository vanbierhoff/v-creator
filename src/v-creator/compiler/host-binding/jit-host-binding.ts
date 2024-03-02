import { VModule } from '../../../app-modules/router/router-loader/models/v-module';


// прокачать:
// сделать связку с value из класса и менять его при смене value
export function jitHostBinding(target: VModule, binds: Array<{ bind: string }>): VModule {
    console.log(binds);
    // пофиксить bind - учитывать то, какой bind и и value из класса
    const result = binds.reduce(
        (accumulator, bind: any) => {
            const bindType = bind.bind.split('.');
            const acc = `${accumulator}color:${target[1][bind.prop]}`;
            return acc;
        },
        `style="`
    );
    target[0] = `<${target[3]} ${result}"> ${target[0]} </${target[3]}> `;
    console.log(target);
    return target;
}


const createBindStrings(binds: any) {

}
