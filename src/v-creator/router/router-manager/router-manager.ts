import { RouterStore } from '../router-store/router-store';
import { RouterLoader } from '../router-loader/router-loader';
import { VModule } from '../router-loader/models/v-module';
import { jitBaseParser } from '../../../projects/compiler/jit-compile';


export class RouterManager {
    #routerStore: RouterStore = {} as RouterStore;
    #routerLoader: RouterLoader = {} as RouterLoader;

    constructor(private routerStore: RouterStore,
                private routerLoader: RouterLoader
    ) {
        this.#routerStore = routerStore;
        this.#routerLoader = routerLoader;
    }


    async upload(path: string): Promise<VModule> {
        return jitBaseParser(await this.#routerLoader.uploadModule(this.#routerStore.getRouteByPath(path)));
    }

}
