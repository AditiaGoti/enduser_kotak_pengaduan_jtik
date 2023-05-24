import {  AuthRequest } from '../api/Request/AuthRequest'
import { sessionExpired } from "@/Utils/helper";

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

    signInStudent(nim, password) {
        let resp = null
        this.setLoading(true)
        resp = AuthRequest(nim, password)
            .then((response) => {
                this.setLoginDetail(response.data.data.token, response.data.data.user.name, response.data.data.user.nim, response.data.data.user.email)
                this.setErrorCause("")
                this.setError(false)
                this.setResponse(response.data)

                return true
            }).catch((err) => {

                this.setErrorCause(err.response.data.message)
                this.setError(true)
                return false
            }).finally(() => {
                this.setLoading(false)
            })
        return resp
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
