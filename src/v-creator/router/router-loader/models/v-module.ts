export type VModule = [
    template: string | undefined,
    // component: new (...args: any[]) => any | any,
    component: any,
    path: string,
    selector: string,
    styles: string | undefined,
    buildedTemplate: string
    // добавлять атрибут для инкапсуляции и прописывать его в стилях после селектора..
    // или дя простооры задавать рут стиль и все в него пихать
    // добавлять на этапе сборки
    // добавить мета инфу, для сборки

];

export enum MOD_FIELDS {
    template = 0,
    component = 1,
    path = 2,
    selector = 3,
    styles = 4,
    buildedTemplate
};
