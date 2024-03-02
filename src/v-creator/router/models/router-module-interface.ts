export interface RouterModuleInterface {
    path: string;
    deps?: [];
    selector: string;
    styles?: Promise<string>;
    templatePath?: string;

    template?(): Promise<any>;

    component(): Promise<abstract new (...args: any[]) => any>;

    children?: Array<RouterModuleInterface>;
}
