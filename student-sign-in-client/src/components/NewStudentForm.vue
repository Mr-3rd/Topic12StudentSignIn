<template>
  <div>
<!--    hold the form entry points in this component-->
    <div class="alert alert-danger" v-if="errors.length > 0">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </div>

    <div class="card add-student m-2 p-2">
      <h4 class="card-title">Add new student</h4>

      <div class="form-group">
        <label for="name">Name</label>
        <!-- TODO v-model newStudentName -->
        <input id="name" class="form-control" v-model.trim="newStudentName"
               @keyup.enter="addStudent">
      </div>
      <div class="form-group">
        <label for="starID">Star ID</label>
        <!-- TODO v-model newStarID -->
        <input id="starID" class="form-control" v-model.trim="newStarID"
               @keyup.enter="addStudent">
      </div>
      <!-- TODO v-on:click event handler -->
      <button class="btn btn-primary" @click="addStudent" >Add</button>
    </div>

  </div>

</template>

<script>
export default {
  name: "NewStudentForm",
  // Documents the type of components that are emitted
  emits: ['student-added'],
  data() {
    return{
      newStudentName: '',
      newStarID: '',
      errors: [],
    }
  },
  methods: {
    addStudent( ) {

      // Clear the error array
      this.errors = []

      // Validation for webapp
      if (!this.newStudentName) {
        this.errors.push('Please enter a student name! (No student name present)')
      }

      if (!this.newStarID) {
        this.errors.push('Please enter a valid StarID! (No StarID present)')
      }

      if (this.errors.length === 0) {
        let student = {name: this.newStudentName, starID: this.newStarID, present: false}

        // emit message to parent with new student
        this.$emit("student-added", student)


        // this.newStudentName = ''
        // this.newStarID = ''

      }
    }
  }
}
</script>

<!--Scoped = only apply to this component and no others-->
<style scoped>

</style>