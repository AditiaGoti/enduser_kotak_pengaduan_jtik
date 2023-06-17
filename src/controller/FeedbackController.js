import axiosInstance,{setBasicAuth,setBearerToken,setChanceControl} from '../Utils/axios'
import axiosInstancelecturer,{setBasicAuthLecturer,setBearerTokenLecturer} from '../Utils/axiosLecturer'
export class FeedbackController {
    loading = false
    error = false
    errorCause = ''
    response = []
    lists =[]
    constructor(loading, error, errorCause) {
        this.loading = loading
        this.error = error
        this.errorCause = errorCause
    }

    async getFeedbackList(id) {
        setBasicAuth();
              const response = await axiosInstance.get(`/v1/feedback?complaint_id=${id}`)
              this.setLists(response.data.data);
              console.log("feedback",response.data.data)
              return response
              
          }
          setLists(data) {
              this.lists = data
          }
    
        async createFeedback(complaint_id,message) {
            const token = localStorage.getItem('kpjtik_access_token')
            console.log(token,"token")
            setBearerTokenLecturer(token);
                  const response = await axiosInstancelecturer.post('/lecturer/v1/feedback',{
                    complaint_id : complaint_id,
                    message : message,
                  });
                  console.log("respon",response)
            return response
        }
}
