export const Register = (data) => {
    return {
        type: "REGISTER",
        data:data
    }
}
export const UserLogin = (data) => {
    console.log("dattaaaaaisss",data)
    return {
        type: "LOGIN",
        data:data
    }
}