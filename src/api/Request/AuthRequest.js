import axios from 'axios'
import {  SignInStudent, 
    ResetPasswordStudent, 
    ChangePasswordStudent,
    ForgotPasswordStudent,
    SignInLecturer,
    ChangeProfileLecturer,
    ChangePasswordLecturer,
    ForgotPasswordLecturer,
    ResetPasswordLecturer } from '../Endpoint/Index'
import { BaseUrl } from '../Endpoint/Constants'
import { getToken } from '../../Utils/localstorage'
const basicAuth = {
    'Authorization': `Basic MTIzOjEyMw==`
}
const headers = {
    'Authorization': `Bearer ${getToken()}`
}
export const AuthRequest = (nim, password) => {
    const resp = axios({
        method: 'post',
        url: `${BaseUrl()}${SignInStudent()}`,
        data: {
            nim: nim,
            password: password
        },
        headers: basicAuth
    }).then((response) => {
        return response
    })
    return resp
}

// export const RegistRequest = (fullName, email, mobileNumber, companyName, companyTotalEmployee, companyAddress) => {
//     const resp = axios({
//         method: 'post',
//         url: `${BaseUrl()}${Register()}`,
//         data: {
//             picFullname: fullName,
//             picEmail: email,
//             picMobileNumber: mobileNumber,
//             companyName: companyName,
//             companyTotalEmployee: companyTotalEmployee,
//             companyAddress: companyAddress,
//         },
//         headers: basicAuth
//     }).then((response) => {
//         return response
//     })
//     return resp
// }

export const ResetPasswordRequest = (email) => {
    const resp = axios({
        method: 'post',
        url: `${BaseUrl()}${ResetPassword()}`,
        data: {
            email: email,
        },
        headers: basicAuth
    }).then((response) => {
        return response
    })
    return resp
}



export const ChangePasswordRequest = (oldPassword, newPassword, confirmationPassword) => {
    const resp = axios({
        method: 'put',
        url: `${BaseUrl()}${ChangePassword()}`,
        data: {
            currentPassword: oldPassword,
            newPassword: newPassword,
            confirmNewPassword: confirmationPassword,
        },
        headers: headers
    }).then((response) => {
        return response
    })
    return resp
}
