export interface IProduct {
    id:number;
    title:string;
    desc:string;
    thumbnail:string;
    price:number;
    qty:number;
    images : []
}
export interface ICategories{
    name : string;
    slug : string;
}