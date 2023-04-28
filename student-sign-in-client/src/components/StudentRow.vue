<template>

  <tr v-bind:class="{present: student.present, absent: !student.present}">
    <td>{{student.name}}</td>
    <td>{{student.starID}}</td>
    <td>
      <input type="checkbox" v-bind:checked="student.present"
             v-on:change="arrivedOrLeft(student, $event.target.checked)">
    </td>
    <td v-show="edit">
      <img v-on:click="deleteStudent" src="@/assets/delete.png">
    </td>
  </tr>

</template>

<script>
export default {
  name: "StudentRow",
  emits: ['student-arrived-or-left', 'delete-student'],
  props: {
    student: Object,
    edit: Boolean
  },
  methods: {
    arrivedOrLeft(student, present) {
      this.$emit('student-arrived-or-left', student, present)
    },
    deleteStudent() {
      if (confirm(`Do you want to delete ${this.student.name}?`)) {
        this.$emit("delete-student", this.student)
      }
    }
  }
}

</script>

<style scoped>

.present {
  color: gray;
  font-style: italic;
}

.absent {
  color: black;
  font-weight: bold;
}

img {
  width: 15px;
  filter: drop-shadow(0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.5));
}

</style>