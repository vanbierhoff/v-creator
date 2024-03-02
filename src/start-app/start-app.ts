import { RouterFacade } from '../v-creator/router/router-facade/router-facade.ts';
import { routerStoreFactory } from '../v-creator/router/router-store/factory/router-store-factory.ts';
import { RouterManager } from '../v-creator/router/router-manager/router-manager.ts';
import { RouterLoader } from '../v-creator/router/router-loader/router-loader.ts';
import { Renderer } from '../v-creator/renderer/renderer.ts';
import APP from '../modules/app-module/app-module.ts';



export let ROUTER: RouterFacade = {} as RouterFacade;
export function startApp(): void {
    new APP();
    const routerStore = routerStoreFactory();
    ROUTER = new RouterFacade(new RouterManager(routerStore, new RouterLoader()), new Renderer());
}
