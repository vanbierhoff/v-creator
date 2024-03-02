import { RouterModuleInterface } from '../../models/router-module-interface';


export interface RouterStoreInterface {

    add(route: RouterModuleInterface): void;

    remove(route: RouterModuleInterface): void;

    getRouteByPath(route: string): RouterModuleInterface;
}
