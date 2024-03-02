import { jitHostBinding } from './host-binding/jit-host-binding';
import { VModule } from '../router/router-loader/models/v-module.ts';
import { V_BIND, V_META } from '../router/decorators/v-module/models/v-module-meta.ts';


export function jitBaseParser(target: VModule): VModule {
    const module = Reflect.getMetadata(V_META, target?.['constructor'] || target);
    target[1] = new target[1]();
    const template: string = '';
    const bind = Reflect.getMetadata(V_BIND, target[1].constructor);
    if (bind) {
        jitHostBinding(target, bind);
    }
    return target;
}
