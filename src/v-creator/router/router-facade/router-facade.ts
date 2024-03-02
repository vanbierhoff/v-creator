import { RouterManager } from '../router-manager/router-manager';
import { Renderer } from '../../renderer/renderer';


export class RouterFacade {

    constructor(private routerManager: RouterManager,
                private renderer: Renderer
    ) {
    }

    uploadRoute(path: string): void {
        this.routerManager.upload(path).then(module => this.renderer.render(module));
    }
}
