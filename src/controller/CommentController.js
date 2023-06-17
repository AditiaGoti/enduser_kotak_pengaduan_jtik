import axiosInstance,{setBasicAuth, setBearerToken} from '../Utils/axios'
import axiosInstancelecturer,{setBasicAuthLecturer,setBearerTokenLecturer} from '../Utils/axiosLecturer'

export class CommentController {
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

    async getCommentList(id) {
        // const token = localStorage.getItem('kpjtik_access_token')
        setBasicAuth();
              const response = await axiosInstance.get(`/v1/comment?complaint_id=${id}`)
              console.log(response.data.data.list,"data")
              this.setLists(response.data.data.list);
        return response
    }
    setLists(data) {
        this.lists = data
    }
    async createComment(complaint_id,message) {
        const token = localStorage.getItem('kpjtik_access_token')
        console.log(token,"token")
        setBearerToken(token);
              const response = await axiosInstance.post('/student/v1/comment',{
                complaint_id : complaint_id,
                message : message,
              });
        return response
    }
    async createCommentLecture(complaint_id,message) {
        const token = localStorage.getItem('kpjtik_access_token')
        console.log(token,"token")
        setBearerTokenLecturer(token);
              const response = await axiosInstancelecturer.post('/lecturer/v1/comment',{
                complaint_id : complaint_id,
                message : message,
              });
              console.log(response,"dataaaaaaa")
        return response
    }
}
