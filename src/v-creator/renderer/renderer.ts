import { MOD_FIELDS, VModule } from '../router/router-loader/models/v-module';
import { renderEngine } from './render-engine/render-engine.ts';


export class Renderer {

    render(module: VModule): void {
        const elem = document.getElementById(module[3]);
        if (elem && module[0]) {
            renderEngine(module, elem);
            elem.innerHTML = module[MOD_FIELDS.buildedTemplate];
        }

    }

}
