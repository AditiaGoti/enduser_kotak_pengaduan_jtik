import axiosInstance,{setBasicAuth,setBearerToken,setChanceControl} from '../Utils/axios'
import axiosInstancelecturer,{setBearerTokenLecturer} from '../Utils/axiosLecturer'

export class ComplaintController {
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

    async getComplaintList() {
        setBasicAuth();
              const response = await axiosInstance.get('/v1/complaint')
              this.setLists(response.data.data.list);
              return response
              
          }
          setLists(data) {
            this.lists = data
        }
          async getComplaintListPopular() {
            setBasicAuth();
                  const response = await axiosInstance.get('/v1/complaint/popular')
                  this.setLists(response.data.data.list);
                  console.log("complaint popular", response.data.data.list)
                  return response
                  
              }
          setLists(data) {
              this.lists = data
          }
    async getComplaintDetail(id) {
            setBasicAuth();
            setChanceControl();
            const response = await axiosInstance.get(`/v1/complaint?complaint_id=${id}`);
            this.setLists(response.data.data.list[0]);
            console.log(response.data.data.list[0].lecturer_type )
            return response;
          }     
          setLists(data) {
            this.lists = data
        }     

       
async createComplaint(category_id, lecturer_type, createdBy, title, body, attachmentImage) {
    const token = localStorage.getItem('kpjtik_access_token');
    setBearerToken(token);
    const response = await axiosInstance.post('/student/v1/complaint', {
      category_id,
      lecturer_type,
      createdBy,
      title,
      body,
      attachmentImage ,
    });
  
    console.log(response.data.data, "data");
    this.setLists(response.data.data);
  
    return response;
  }
  
  async uploadImageComplaint(image,imageFolder){
    setBasicAuth();
    const response = await axiosInstance.post('/student/v1/upload',{
      image : image,
      imageFolder : imageFolder
    });
    this.setLists([{ key: 'attachmentImage', value: 'https://storage.googleapis.com/kotak-pengaduanjtik.appspot.com/' + response.data}]);
    console.log(response.data, 'upload');
    return response;
  }
  
  setLists(data) {
    this.lists = data
  }
    
    async getComplaintListUser(id) {
        setBasicAuth();
        setChanceControl();
              const response = await axiosInstance.get(`/v1/complaint?student_id=${id}`)
              this.setLists(response.data.data.list);
              console.log(response.data.data.list,"list complaint")
              return response
          }
          setLists(data) {
              this.lists = data
          }
    async getComplaintListLecturer() {
            const token = localStorage.getItem('kpjtik_access_token')
            setBearerTokenLecturer(token);                  
            const response = await axiosInstancelecturer.get(`/lecturer/v1/complaint`)
                  this.setLists(response.data.data.list);
                  console.log(response.data.data.list,"list complaint")
                  return response
              }
              setLists(data) {
                  this.lists = data
              }
}
