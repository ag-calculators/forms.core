export interface FormInputInterface {
    bind(formData: any): Promise<any>;
    reset(detail: any): Promise<void>;
    validate(): Promise<boolean>;
    setValue(value: any): Promise<void>;
}
export interface FormStateInterface {
    setState(key: string, value: any): Promise<void>;
    getState(key?: string): Promise<any>;
    clearState(): Promise<void>;
}
export interface FormRouterInterface {
    route(url: string, routeFn?: () => HTMLElement): Promise<void>;
}
export declare type CssClassMap = {
    [className: string]: boolean;
};
export declare function readProp(target: any, property: string, d?: any): any;
