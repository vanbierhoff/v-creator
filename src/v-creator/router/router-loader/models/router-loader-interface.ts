import { RouterModuleInterface } from '../../models/router-module-interface';


export interface RouterLoaderInterface {
    uploadModule(module: RouterModuleInterface): Promise<any>;
}
