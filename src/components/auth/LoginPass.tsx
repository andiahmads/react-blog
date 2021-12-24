import { type } from 'os'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { InputChange,FormSubmit } from '../../utils/TypeScript'
import {login} from '../../redux/actions/authAction'

const LoginPass = () => {
    const initialState = { email: '', password: '', }
    const [userLogin, setUserLogin] = useState(initialState)
    const { email, password } = userLogin
    const [typePass, setTypePass] = useState(false)
    const dispatch = useDispatch()


    const handleChangeInput = (e: InputChange) => {
        const { value, name } = e.target
        setUserLogin({ ...userLogin, [name]: value })
    }

    const handleSubmit = (e:FormSubmit) =>{
        e.preventDefault()
        console.log(e)
        dispatch(login(userLogin))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChangeInput} />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="account" className="form-label">Password</label>
                <div className="pass">
                    <input type={typePass ? "text" : "password"}
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChangeInput} />
                    <small onClick={() => setTypePass(!typePass)} style={{ cursor: "pointer" }}>
                        {typePass ? 'Hide' : 'Show'}
                    </small>
                </div>

            </div>

            <button className="btn btn-dark w-100 mt-4"
                disabled={(email && password) ? false : true}>
                Login
            </button>
        </form>

    )
}

export default LoginPass
