interface IOption{
    label:string;
    icon?:string;
    to?:string;
}

interface IOptionMenu{
    options:IOption[]
}

export type {IOptionMenu} 