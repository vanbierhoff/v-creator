import { VModuleDecorator } from '../../app-modules/router/decorators/v-module/v-module.decorator';


@VModuleDecorator({
    path: '/',
    selector: 'app',
    template: async () => await import('./view/app.template.html'),
    component: async () => await
        import( './app-component').then(m => m.AppComponent)
})
class APP {
}

export default APP;
