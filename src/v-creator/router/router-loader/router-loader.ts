import { RouterLoaderInterface } from './models/router-loader-interface';
import { RouterModuleInterface } from '../models/router-module-interface';
import { VModule } from './models/v-module';


export class RouterLoader implements RouterLoaderInterface {

    async uploadModule(module: RouterModuleInterface): Promise<VModule> {
        let template: Promise<string> | undefined;
        if (module.template) {
            template = this.uploadTemplate(module);
        }
        const component: Promise<any> = this.uploadComponent(module);

        return Promise.all([template, component, module.path, module.selector, module.styles]);

    }


    private async uploadTemplate(module: RouterModuleInterface): Promise<string> {
        return await module.template!().then(async x => x.default);

    }

    private async uploadComponent(module: RouterModuleInterface): Promise<any> {
        return await module.component().then((component: any) => component);
    }

}
