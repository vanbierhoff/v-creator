import { RouterModuleInterface } from '../models/router-module-interface';
import { RouterStoreInterface } from './models/router-store.interface';



export class RouterStore implements RouterStoreInterface {

    constructor(
        private routes: RouterModuleInterface[]
    ) {
    }

    #modulesList: RouterModuleInterface[] = this.routes;

    add(route: RouterModuleInterface): RouterModuleInterface[] {
        if (!this.#modulesList.some(moduleItem => moduleItem.path === route.path)) {
            this.#modulesList.push(route);
        }

        return this.#modulesList;
    }

    remove(route: RouterModuleInterface): RouterModuleInterface[] {
        this.#modulesList = this.#modulesList.filter(routeItem => routeItem.path !== route.path);
        return this.#modulesList;
    }

    getRouteByPath(path: string): RouterModuleInterface {
        const routerModule = this.#modulesList.find(route => route.path === path);

        if (routerModule) {
            return routerModule;
        }
        throw new Error(`module for ${path} path doesn't exist`);
    }
}



