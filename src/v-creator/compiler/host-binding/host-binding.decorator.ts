import { V_BIND, V_META } from '../../../app-modules/router/decorators/v-module/models/v-module-meta';
import { addMetaField } from '../../../shared/metadata/add-meta';


export function HostBindingDecorator(bindings: any): any {
    return (target: any, propertyKey: string, _: PropertyDescriptor): any => {
        addMetaField(target, V_BIND, {
            prop: propertyKey,
            bind: bindings
        });
    };
}
