// import in javascript
import 'axios'
import axios from "axios";

// set the base of the api call
let base_url = '/api/students'

// export the methods to be called by the vue app
export default {

    // method to get all the students
    getAllStudents() {
        // return the promise from the API call as a json object
        return axios.get(base_url).then( response => {
            return response.data
        })
    },

    // method to add a new student
    addStudent(student) {
        // use a post method in axios to add the new student to the database
        return axios.post(base_url, student).then( response => {
            return response.data
        })
    },


    // Method to patch a student
    updateStudent(student) {
        // use the patch method to update an id to the new client Information
        return axios.patch(`${base_url}/${student.id}`, student).then(response => {
            return response.data
        })
    },

    deleteStudent(id) {
        return axios.delete(`${base_url}/${id}`).then( response => {
            return response.data
        })
    }

}