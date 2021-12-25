import {ChangeEvent,FormEvent} from 'react'
import rootReducer from '../redux/reducers/index'

export type InputChange = ChangeEvent<HTMLInputElement>
export type FormSubmit = FormEvent<HTMLFormElement>
export type RootStore = ReturnType<typeof rootReducer>

export interface IParams {
    page:string
    slug:string
}


export interface IUserLogin {
    email:string
    password:string
}

export interface IUser extends IUserLogin {
    id: string
    UUID: string
    name: string
    email: string
    avatar: string
    is_active: boolean
    IsDeleted: boolean
    CreatedAt: string
    UpdatedAt: string
}
// export interface IAuth {
//     token:string
//     refresh_token:string
//     user:IUser
// }

export interface IAlert {
    loading?:boolean
    success?:string | string[]
    errors?:string | string[]

}