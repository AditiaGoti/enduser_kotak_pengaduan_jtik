import axiosInstance,{setBearerToken} from '../Utils/axios'
import axiosInstancelecturer,{setBasicAuthLecturer, setBearerTokenLecturer} from '../Utils/axiosLecturer'

export class NotificationController {
    loading = false
    error = false
    errorCause = ''
    response = []
    list =[]
    data =[]
    constructor(loading, error, errorCause) {
        this.loading = loading
        this.error = error
        this.errorCause = errorCause
    }

    async getNotificationlist() {
        const token = localStorage.getItem('kpjtik_access_token')
        setBearerToken(token);
              const response = await axiosInstance.get('/student/v1/notif')
              this.setLists(response.data.data.list);
              this.setData(response.data.data);
              console.log(response.data.data.list,"notif");
              console.log(response.data.data.unOpened,"notif unOpened");

              return response
              
          }
          setLists(data) {
              this.list = data
          }
          setData(data) {
            this.data = data
        }
    async updateNotif(notification_id) {
            const token = localStorage.getItem('kpjtik_access_token')
            setBearerToken(token);
                  const response = await axiosInstance.put('/student/v1/notif/open',{
                    notification_id : notification_id
                  })
                  this.setLists(response.data.data);
                  return response
                  
              }
    async updateLecturerNotif(notification_id) {
                const token = localStorage.getItem('kpjtik_access_token')
                setBearerTokenLecturer(token);
                const response = await axiosInstance.put('/lecturer/v1/notif/open',{
                        notification_id : notification_id
                      })
                      this.setLists(response.data.data);
                      return response
                      
                  }
    async getNotificationlistLecturer() {
            const token = localStorage.getItem('kpjtik_access_token')
            setBearerTokenLecturer(token);
                  const response = await axiosInstancelecturer.get('/lecturer/v1/notif')
                  this.setLists(response.data.data.list);
                  this.setData(response.data.data);
                  console.log(response.data.data,"notif lecturer");
                  return response
                  
              }
              setLists(data) {
                  this.list = data
              }

}
