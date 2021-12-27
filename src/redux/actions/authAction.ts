import {Dispatch} from 'redux'
import {AUTH,IAuthType} from '../types/authType'
import {ALERT,IAlertType} from '../types/alertType'
import { IUserLogin,IUserRegister } from '../../utils/TypeScript'
import { postAPI } from '../../utils/FetchData'
import { validRegister } from '../../utils/Validation'

export const login = (userLogin: IUserLogin) =>
    async (dispatch: Dispatch<IAuthType | IAlertType>) => {
        try {
            //PANGGIL ALERT SUCCESS
            dispatch({type:ALERT,payload:{loading:true}})

            const res = await postAPI('auth/login', userLogin)
            dispatch({
                type: AUTH,
                payload:{
                    token: res.data.data.token,
                    refresh_token: res.data.data.refresh_token,
                    user:res.data
                }
            })
            dispatch({type:ALERT,payload:{success:res.data.message}})

        } catch (err:any) {
            dispatch({type:ALERT,payload:{errors:err.response.data.errors}})
            console.log(err.response.data.message)

        }
    }

    export const register = (userRegister: IUserRegister) =>
    async (dispatch: Dispatch<IAuthType | IAlertType>) => {
        const check = validRegister(userRegister)

        //check error form
        if(check.errLength > 0) {
           return dispatch({
               type:ALERT,
               payload:{errors:check.errMsg}})
        }
        try {
            //PANGGIL ALERT SUCCESS
            dispatch({type:ALERT,payload:{loading:true}})

            const res = await postAPI("auth/register",userRegister)

            dispatch({type:ALERT,payload:{success:res.data.message}})

        } catch (err:any) {
            dispatch({type:ALERT,payload:{errors:err.response.data.message}})

            console.log(err.response.data.message)

        }
    }



