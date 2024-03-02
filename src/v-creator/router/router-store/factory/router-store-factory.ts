import { V_META } from '../../decorators/v-module/models/v-module-meta';
import { VModuleStoreInstance } from '../../decorators/v-module/v-module.decorator';
import { VModuleDecoratorInterface } from '../../decorators/v-module/models/v-module-decorator.interface';
import { RouterStore } from '../router-store';


// сделать стартер подобный angular и не получать список всех роутов - давать стартовый компонент из него брать
// данные о роуте и так далее грузить его children
// на вход функции кидать таргет..
export function routerStoreFactory(): RouterStore {
    const modulesList: VModuleDecoratorInterface[] = Reflect.getMetadata(V_META, VModuleStoreInstance.constructor);

    const routesList = modulesList.map(item => item.config);

    return new RouterStore(routesList);

}
