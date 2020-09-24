import axios from 'axios';

var urlPrefix = 'http://localhost:4000/api'

var API = {

    serverUrl : 'http://localhost:4000/',

    getClothing : () => {
        return axios.get(urlPrefix+'/clothingItems')
    },
    // getUserClothing : (id) => {
    //     return axios.get(urlPrefix+'/clothingItems/'+id)
    // },
    getSingleClothing : (id) => {
        return axios.get(urlPrefix+'/clothingItems/'+id)
    },
    addClothing : (data) => {
        return axios.post(urlPrefix+'/clothingItems/', data)
    },
    updateClothing : (id, data) => {
        return axios.put(urlPrefix+'/clothingItems/'+id, data)
    },
    deleteClothing : (id) => {
        return axios.delete(urlPrefix+'/clothingItems/'+id)
    },
    getTypes : () => {
        return axios.get(urlPrefix+'/types')
    },
    getSingleType : (id) => {
        return axios.get(urlPrefix+'/types/'+id)
    },
    getSingleUser : (id) => {
        return axios.get(urlPrefix+'/users/'+id)
    },
    addUser : (data) => {
        return axios.post(urlPrefix+'/users',data)
    },
    authenticate : (data) => {
        return axios.post(urlPrefix+'/users/authenticate',data)          
    },
    uploadFile : (formData) => {
        var settings = { headers: {'Content-Type': 'multipart/form-data' }}
        return axios.post(urlPrefix+'/upload',formData,settings)
    }
}


export default API