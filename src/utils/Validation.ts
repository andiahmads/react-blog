import { IUserRegister } from "./TypeScript"

export const validRegister = (userRegister: IUserRegister) => {
    const { name, email, password, cf_password } = userRegister
    const errors: string[] = []


    if (!name) {
        errors.push("Please add your name")
    } else if (name.length > 20) {
        errors.push("Your name is up to 20 character long.")
    }

    if (!email) {
        errors.push("Please add your email")
    } else if (!validateEmail(email)) {
        errors.push("Email format is incorrect")
    }

    if (password.length < 6) {
        errors.push("Password must be at least 6 character.")
    } else if (password !== cf_password) {
        errors.push("Confirm password did not match.")
    }

    return {
        errMsg:errors,
        errLength:errors.length
    }

}

export function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}