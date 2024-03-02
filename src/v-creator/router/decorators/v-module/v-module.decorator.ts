import { RouterModuleInterface } from '../../models/router-module-interface';
import { addMetaField } from '../../../../shared/metadata/add-meta';
import { V_META } from './models/v-module-meta';


export class VModuleStoreInstance {
}


export function VModuleDecorator(config: RouterModuleInterface): any {
    return (target: any, propertyKey: string, _: PropertyDescriptor): any => {

        return class extends target {
            constructor(...args: any[]) {
                super(...args);
                const cfg = {
                    target,
                    config
                };

                addMetaField(VModuleStoreInstance, V_META, cfg);
            }

        };
    };
}


