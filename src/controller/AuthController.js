import {  AuthRequest } from '../api/Request/AuthRequest'
import { sessionExpired } from "@/Utils/helper";
import axios from 'axios'
import axiosInstance,{setBasicAuth,setBearerToken} from '../Utils/axios'
import axiosInstancelecturer,{setBasicAuthLecturer,setBearerTokenLecturer} from '../Utils/axiosLecturer'

import { setAuthentication } from '../Utils/localstorage'
export class AuthControllers {
    loading = false
    error = false
    errorCause = ''
    response = []
    constructor(loading, error, errorCause) {
        this.loading = loading
        this.error = error
        this.errorCause = errorCause
    }

    async signInStudent(nim, password) {
        this.setLoading(true)
        setBasicAuth();
              const response = await axiosInstance.post('/student/v1/login', {
                nim: nim,
                password: password,
              });
        return response
    }

   async signInLecturer(nip, password) {
        this.setLoading(true)
        setBasicAuthLecturer();
        const response = await axiosInstancelecturer.post('/lecturer/v1/login', {
                nip: nip,
                password: password,
              });
        console.log("test",response)
        return response
    }
    async forgotPassLecturer(nip) {
        this.setLoading(true)
        setBasicAuthLecturer();
        const response = await axiosInstancelecturer.post('/lecturer/v1/password/forget', {
                nip: nip,
              });
        console.log("test",response)
        return response
    }
    async forgotPassStudent(nim) {
        this.setLoading(true)
        setBasicAuth();
        const response = await axiosInstancelecturer.post('/student/v1/password/forget', {
                nim: nim,
              });
        console.log("test",response)
        return response
    }
    async resetPassStudent(nim,forgetPasswordToken,newPassword) {
        this.setLoading(true)
        setBasicAuth();
        const response = await axiosInstance.post('/student/v1/password/reset', {
                nim: nim,
                forgetPasswordToken : forgetPasswordToken,
                newPassword : newPassword
              });
        console.log("test",response)
        return response
    }
    async resetPassLecturer(nip,forgetPasswordToken,newPassword) {
        this.setLoading(true)
        setBasicAuth();
        const response = await axiosInstancelecturer.post('/lecturer/v1/password/reset', {
                nim: nip,
                forgetPasswordToken : forgetPasswordToken,
                newPassword : newPassword
              });
        console.log("test",response)
        return response
    }

    async changePassStudent(oldPassword,newPassword) {
        const token = localStorage.getItem('kpjtik_access_token')
        console.log(token,"token")
        setBearerToken(token);
              const response = await axiosInstance.put('/student/v1/password/change',{
                oldPassword : oldPassword,
                newPassword : newPassword,
              });
        return response
    }

    resetPasswordStudent(email) {
        let resp = null
        this.setLoading(true)
        resp = ResetPasswordRequest(email)
            .then((response) => {
                this.setResetPassDetail(response.data)
                this.setErrorCause("")
                this.setError(false)
                return true
            }).catch((err) => {
                if (err.response.data.message == "Access token expired!") {
                    this.setErrorCause(err)
                    this.setError(true)
                    sessionExpired()
                } else {
                    this.setErrorCause(err.response.data.message)
                    this.setError(true)
                }
                return false
            }).finally(() => {
                this.setLoading(false)
            })
        return resp
    }

    changePasswordStudent(oldPassword, newPassword, confirmationPassword) {
        let resp = null
        this.setLoading(true)
        resp = ChangePasswordRequest(oldPassword, newPassword, confirmationPassword)
            .then((response) => {
                this.setChangePassDetail(response.data)
                this.setErrorCause("")
                this.setError(false)
                return true
            }).catch((err) => {
                if (err.response.data.message == "Access token expired!") {
                    this.setErrorCause(err)
                    this.setError(true)
                    sessionExpired()
                } else {
                    this.setErrorCause(err.response.data.message)
                    this.setError(true)
                }
                return false
            }).finally(() => {
                this.setLoading(false)
            })
        return resp
    }
    setResponse(data) {
        this.response = data
    }
   

    setResetPassStudentDetail(data) {
        this.resetPassDetail = data
    }
    setChangePassStudentDetail(data) {
        this.changePassDetail = data
    }


    setLoginStudentDetail(token, name, nim, email) {
        setAuthentication(token, name, nim, email)
    }


    setLoading(status) {
        this.loading = status
    }

    setError(err) {
        this.error = err
    }

    setErrorCause(cause) {
        this.errorCause = cause
    }
}
