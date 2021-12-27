import { type } from 'os'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { InputChange,FormSubmit } from '../../utils/TypeScript'
import {register} from '../../redux/actions/authAction'

const RegisterForm = () => {
    const initialState = {name:"", email: '', password: '' ,cf_password:'' }

    const [userRegister, setUserRegister] = useState(initialState)
    const { name,email, password,cf_password } = userRegister
    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)
    const dispatch = useDispatch()


    const handleChangeInput = (e: InputChange) => {
        const { value, name } = e.target
        setUserRegister({ ...userRegister, [name]: value })
    }

    const handleSubmit = (e:FormSubmit) =>{
        e.preventDefault()
        console.log(e)
        dispatch(register(userRegister))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="email">Name</label>
                <input type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChangeInput}
                    placeholder="Your name is up to 20 character long." />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChangeInput} 
                    placeholder="Please add your email"/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="account" className="form-label">Password</label>
                <div className="pass">
                    <input type={typePass ? "text" : "password"}
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Password must be at least 6 character."
                        onChange={handleChangeInput} />
                    <small onClick={() => setTypePass(!typePass)} style={{ cursor: "pointer" }}>
                        {typePass ? 'Hide' : 'Show'}
                    </small>
                </div>

            </div>

            <div className="form-group mb-3">
                <label htmlFor="account" className="form-label">Confirm Password</label>
                <div className="pass">
                    <input type={typeCfPass ? "text" : "password"}
                        className="form-control"
                        id="cf_password"
                        name="cf_password"
                        placeholder="Confirm Password"
                        value={cf_password}
                        onChange={handleChangeInput} />
                    <small onClick={() => setTypeCfPass(!typeCfPass)} style={{ cursor: "pointer" }}>
                        {typeCfPass ? 'Hide' : 'Show'}
                    </small>
                </div>

            </div>

            <button className="btn btn-dark w-100 mt-4">
                Register
            </button>
        </form>

    )
}

export default RegisterForm
