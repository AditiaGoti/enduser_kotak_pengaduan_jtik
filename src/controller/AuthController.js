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
        try {
        this.setLoading(true)
        setBasicAuthLecturer();
        const response = await axiosInstancelecturer.post('/lecturer/v1/password/forget', {
                nip: nip,
              });
        console.log("test",response)
        return response
            }
            catch(error){
                this.setErrorCause(error.response.data.message)
                throw error; // Rethrow the error to propagate it to the caller
            }
    }
    async forgotPassStudent(nim) {
       try{
        this.setLoading(true)
        setBasicAuth();
        const response = await axiosInstance.post('/student/v1/password/forget', {
                nim: nim,
              });
              this.setErrorCause("")
              return response
            }
            catch(error){
                this.setErrorCause(error.response.data.message)
                throw error; // Rethrow the error to propagate it to the caller
            }
    }
    async resetPassStudent(nim,forgetPasswordToken,newPassword) {
        try {
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
            catch(error){
                this.setErrorCause(error.response.data.message)
                throw error; // Rethrow the error to propagate it to the caller
            }
    }
    async resetPassLecturer(nip,forgetPasswordToken,newPassword) {
       try {
        this.setLoading(true)
        setBasicAuthLecturer();
        const response = await axiosInstancelecturer.post('/lecturer/v1/password/reset', {
                nip: nip,
                forgetPasswordToken : forgetPasswordToken,
                newPassword : newPassword
              });
        console.log("test",response)
        return response
            }
            catch(error){
                this.setErrorCause(error.response.data.message)
                throw error; // Rethrow the error to propagate it to the caller
            }
    }

    async changePassStudent(oldPassword,newPassword) {
        try {
            const token = localStorage.getItem('kpjtik_access_token');
            console.log(token, "token");
            setBearerToken(token);
            const response = await axiosInstance.put('/student/v1/password/change', {
              oldPassword: oldPassword,
              newPassword: newPassword,
            });
            this.setErrorCause("")
            return response;
          } catch (error) {
            // Handle the error here
            this.setErrorCause(error.response.data.message)
            throw error; // Rethrow the error to propagate it to the caller
          }
    }

    async changePassLecturer(oldPassword,newPassword) {
        try {
            const token = localStorage.getItem('kpjtik_access_token');
            console.log(token, "token");
            setBearerTokenLecturer(token);
            const response = await axiosInstancelecturer.put('/lecturer/v1/password/change', {
              oldPassword: oldPassword,
              newPassword: newPassword,
            });
            this.setErrorCause("")
            return response;
          } catch (error) {
            // Handle the error here
            this.setErrorCause(error.response.data.message)
            throw error; // Rethrow the error to propagate it to the caller
          }
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
