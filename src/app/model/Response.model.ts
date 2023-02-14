import { User } from "./user.model";

export interface Response<T> {
 statusCode:any,
 IsSuccess:boolean,
 ErrorMessages:string,
 result:Array<T>
 
}