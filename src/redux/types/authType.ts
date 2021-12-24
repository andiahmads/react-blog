import {IUser} from '../../utils/TypeScript'
export const AUTH = 'AUTH'


export interface IAuth  {
    token?:string
    refresh_token?:string
    user?:IUser
}

export  interface IAuthType {
    type: typeof AUTH
    payload:IAuth
}


export type GlobalType = IAuthType
