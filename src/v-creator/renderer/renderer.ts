import { VModule } from '../router/router-loader/models/v-module';


export class Renderer {

    render(module: VModule): void {
        console.log(module);
        const elem = document.getElementById(module[3]);
        if (elem && module[0]) {
            elem.outerHTML = module[0];
        }

    }

}
