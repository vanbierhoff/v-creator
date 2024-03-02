import { V_BIND, V_META } from '../../app-modules/router/decorators/v-module/models/v-module-meta';
import { V_MODULE_FIELDS, VModule } from '../../app-modules/router/router-loader/models/v-module';
import { jitHostBinding } from './host-binding/jit-host-binding';


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
