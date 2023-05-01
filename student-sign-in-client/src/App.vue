<template>

  <new-student-form v-on:student-added="newStudentAdded"></new-student-form>
  <student-table v-bind:students="students"
                 v-on:studentArrivedOrLeft="studentArrivedOrLeft"
                 v-on:delete-student="studentDeleted"
  ></student-table>
  <student-message v-bind:student="latestStudent"
  ></student-message>

</template>

<script>
import NewStudentForm from './components/NewStudentForm.vue'
import StudentMessage from './components/StudentMessage.vue'
import StudentTable from './components/StudentTable.vue'


export default {
  name: 'App',
  components: {
    NewStudentForm,
    StudentMessage,
    StudentTable,
  },
  data() {
    return {
      students: [],
      latestStudent: {}
    }
  },
  // create a mounted method to load all students
  mounted() {
    // Load in all the students with a request to api
    // call the method to update the table with student data
    this.updateStudents()
  },
  methods: {
    // New method to update the students
    updateStudents() {
      // collect the promise then convert to an object
      this.$student_api.getAllStudents().then(students => {
        // set the student data to equal the array of objects returned
        this.students = students
      }).catch( () => {
        alert('Unable to fetch student list.')
      })
    },

    newStudentAdded(student) {
      // make an api call to the service that will make the axios call
      // to the api which will add the student
      this.$student_api.addStudent(student).then( student => {
        // update the student list
        this.updateStudents()
      }).catch(err => {
        let msg = err.response.data.join(', ')
        alert('Error adding student. StarID must be unique.')
      })
    },

    studentArrivedOrLeft(student, present) {
      // set the present value of the strudent
      student.present = present
      // make the api call through a function in StudentServices to update the current student
      this.$student_api.updateStudent(student).then( () => {
        this.latestStudent = student
        this.updateStudents()
      }).catch( () => {
        alert('Unable to update student.')
      })

    },
    studentDeleted(student) {
      this.$student_api.deleteStudent(student.id).then( () => {
        this.updateStudents()
        this.latestStudent = {}
      }).catch( () => {
        alert('Unable to delete student student.')
      })
    }
  }
}
</script>

<style>

@import "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css";

</style>
