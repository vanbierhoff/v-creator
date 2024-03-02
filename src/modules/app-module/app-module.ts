import { VModuleDecorator } from '../../v-creator/router/decorators/v-module/v-module.decorator.ts';


@VModuleDecorator({
    path: '/',
    selector: 'app',
    template: async () => import('./view/app.template.html?raw'),
    templatePath: './view/app.template.html',
    component: async () => await
        import( './app-component').then(m => m.AppComponent)
})
export class APP {
}

