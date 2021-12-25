import {Dispatch} from 'redux'
import {AUTH,IAuthType} from '../types/authType'
import {ALERT,IAlertType} from '../types/alertType'
import { IUserLogin } from '../../utils/TypeScript'
import { postAPI } from '../../utils/FetchData'

export const login = (userLogin: IUserLogin) =>
    async (dispatch: Dispatch<IAuthType | IAlertType>) => {
        try {
            //PANGGIL ALERT SUCCESS
            dispatch({type:ALERT,payload:{loading:true}})

            const res = await postAPI('auth/login', userLogin)
            console.log(res)
            dispatch({
                type: AUTH,
                payload:{
                    token: res.data.data.token,
                    refresh_token: res.data.data.refresh_token,
                    user:res.data
                }
            })
            dispatch({type:ALERT,payload:{success:"Login success!"}})

        } catch (err:any) {
            dispatch({type:ALERT,payload:{errors:err.response.data.message}})
            console.log(err.response.data.message)

        }
    }