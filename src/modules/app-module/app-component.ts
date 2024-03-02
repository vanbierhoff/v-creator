import { HostBindingDecorator } from '../../v-creator/compiler/host-binding/host-binding.decorator.ts';



class AppComponent {

    constructor() {
        setTimeout(() => {
            this.justBindings = 'red';
        }, 5000);
    }

    @HostBindingDecorator('style.color')
    public justBinding = 'green';

    @HostBindingDecorator('style.--color-base')
    public justBindings = '#646cff';

    @HostBindingDecorator('class.valid')
    public valid = true;
}


export { AppComponent };
