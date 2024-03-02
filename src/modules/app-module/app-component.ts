import { HostBindingDecorator } from '../../projects/compiler/host-binding/host-binding.decorator';


class AppComponent {


    @HostBindingDecorator('style.color')
    public justBinding = 'green';
}


export { AppComponent };
