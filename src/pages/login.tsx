import React, { useState } from 'react'
import LoginPass from '../components/auth/LoginPass'
import LoginSMS from '../components/auth/LoginSMS'
import { Link } from 'react-router-dom'

const Login = () => {

    const [sms, setSms] = useState(false)

    return (
        <div className="auth_page">
            <div className="auth_box">
                <h3 className="text-uppercase text-center mb-4">
                    Login
                </h3>
                {
                    sms ?
                    <LoginSMS />
                    :
                    <LoginPass />
                }
                <small className="row my-2 text-primary" style={{ cursor: 'pointer' }}>
                    <span className="col-6">
                        <Link to="/forgot_password" className="col-6">forgot Password?</Link>
                    </span>

                    <span className="col-6 text-right" onClick={() => setSms(!sms)}>
                        {sms ? 'Sign in with Password' : 'Sign in with SMS'}
                    </span>
                </small>

                <p>{`you don't have an account .?`}
                    <Link to={`/register`} style={{ color: 'crimson' }}>Register now</Link>
                </p>
            </div>

        </div>
    )
}

export default Login
