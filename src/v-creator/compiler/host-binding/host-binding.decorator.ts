import { addMetaField } from '../../../shared/metadata/add-meta';
import { BindingInterface } from './models/binding.interface.ts';
import { V_BIND } from '../../router/decorators/v-module/models/v-module-meta.ts';


export function HostBindingDecorator(bindings: any): any {
    return (target: any, propertyKey: string, _: PropertyDescriptor): any => {
        const bind: BindingInterface = {
            bind: bindings,
            prop: propertyKey
        };
        addMetaField(target, V_BIND, bind);
    };
}
