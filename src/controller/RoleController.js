import axiosInstance,{setBearerToken} from '../Utils/axios'

export class RoleController {
    loading = false
    error = false
    errorCause = ''
    response = []
    lists = []

    constructor(loading, error, errorCause) {
        this.loading = loading
        this.error = error
        this.errorCause = errorCause
    }

    async getAdminType() {
        const token = localStorage.getItem('kpjtik_access_token')
        console.log("token", token)
        setBearerToken(token);
              const response = await axiosInstance.get('/student/v1/lecturerType')
              this.setLists(response.data.data);
              console.log("respon",response.data.data)
        return response
    }
    setLists(data) {
        this.lists = data
    }

}
