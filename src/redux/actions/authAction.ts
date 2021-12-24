import {Dispatch} from 'redux'
import {AUTH,IAuthType} from '../types/authType'
import { IUserLogin } from '../../utils/TypeScript'
import { postAPI } from '../../utils/FetchData'

export const login = (userLogin: IUserLogin) =>
    async (dispatch: Dispatch<IAuthType>) => {
        try {
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
        } catch (err:any) {
            console.log(err.response.data.message)

        }
    }