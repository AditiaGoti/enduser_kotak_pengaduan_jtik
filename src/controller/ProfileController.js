import axiosInstance,{setBearerToken} from '../Utils/axios'
import axiosInstancelecturer,{setBasicAuthLecturer,setBearerTokenLecturer} from '../Utils/axiosLecturer'

export class ProfileController {
    loading = false
    error = false
    errorCause = ''
    response = []
    lists = []
    list = []
    constructor(loading, error, errorCause) {
        this.loading = loading
        this.error = error
        this.errorCause = errorCause
    }

    async getProfile() {
        const token = localStorage.getItem('kpjtik_access_token')
        setBearerToken(token);
              const response = await axiosInstance.get('/student/v1/profile')
            //   console.log(response.data.data,"data")
              this.setLists(response.data.data);

        return response
        
    }
    setLists(data) {
        this.list = data
        console.log(this.list);
    }
    async updateProfile(avatar,name,phoneNumber,email,) {
        const token = localStorage.getItem('kpjtik_access_token')
        setBearerToken(token);
              const response = await axiosInstance.put('/student/v1/profile',{
                avatar : avatar,
                name : name,
                phoneNumber : phoneNumber,
                email : email,
              })
            //   console.log(response.data.data,"data")
              this.setLists(response.data.data);

        return response
        
    }
    async uploadImageProfile(){
        setBasicAuth();
        const response = await axiosInstance.post('/student/v1/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
        this.setLists([{ key: 'attachmentImage', value: 'https://storage.googleapis.com/kotak-pengaduanjtik.appspot.com/' + response.data}]);
        console.log(response.data, 'upload');
        return response;
      }
    setLists(data) {
        this.lists = data
        console.log(this.lists);
    }
    async getProfileLecturer() {
        const token = localStorage.getItem('kpjtik_access_token')
        setBearerTokenLecturer(token);
              const response = await axiosInstancelecturer.get('/lecturer/v1/profile')
              this.setLists(response.data.data);
              console.log("profile lecture", response.data.data.lecturer_type)                
        return response
        
    }
    setLists(data) {
        this.list = data
    }
    async updateProfileLecturer(avatar,name,nim,phoneNumber,email,) {
        const token = localStorage.getItem('kpjtik_access_token')
        setBearerTokenLecturer(token);
              const response = await axiosInstancelecturer.put('/lecturer/v1/profile',{
                avatar : avatar,
                name : name,
                nim : nim,
                phoneNumber : phoneNumber,
                email : email,
              })
              this.setLists(response.data.data);

        return response
        
    }
    setLists(data) {
        this.list = data
    }

}
