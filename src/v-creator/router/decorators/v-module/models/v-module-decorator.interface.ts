import { RouterModuleInterface } from '../../../models/router-module-interface';


export interface VModuleDecoratorInterface {
    target: new(...args: any) => any;
    config: RouterModuleInterface;
}
