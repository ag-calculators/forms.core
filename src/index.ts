export interface FormInputInterface {
    bind(formData: any): Promise<any>;
    reset(detail:any): Promise<void>;
    validate(): Promise<boolean>;
    setValue(value:any): Promise<void>
}

export interface FormStateInterface {
    setState(key: string, value: any): Promise<void>
    getState(key?: string): Promise<any>
    clearState(): Promise<void>
}

export interface FormRouterInterface {
    route(url: string, routeFn?: () => HTMLElement): Promise<void>
}

export type CssClassMap = { [className: string]: boolean };

export function readProp (target: any, property: string, d?: any): any {
    try {
        return property.split('.').reduce( (a, b) => {
            return a[b];
        }, target);
    } catch (e) {
        return d;
    }
}

