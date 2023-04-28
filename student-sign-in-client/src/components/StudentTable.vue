<template>

  <div class="card student-list m-2 p-2">
    <h4 class="card-title">Student List</h4>

    <div class="edit-table-toggle form-check">
      <input id="edit-table" type="checkbox" class="form-check-input"
             v-model="editTable">
      <label for="edit-table" class="form-check-label">Edit Table?</label>

    </div>

    <div id="student-table">
      <table class="table">
        <tr>
          <th>Name</th>
          <th>StarID</th>
          <th>Present?</th>
          <th v-show="editTable">Delete?</th>
        </tr>


        <student-row v-for="student in students"
                     v-bind:student="student"
                     v-bind:edit="editTable"
                     v-bind:key="student.starID"
        v-on:student-arrived-or-left="arrivedOrLeft"
        v-on:delete-student="deleteStudent"
        >
        </student-row>

      </table>
    </div>
  </div>

  <div id="attribute">
    <a target="_blank" href="https://icons8.com/icon/tLF4OA0qUTIn/delete">Delete</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
  </div>

</template>

<script>
import StudentRow from "@/components/StudentRow.vue";

export default {
  name: "StudentTable",
  emits: ['student-arrived-or-left', 'delete-student'],
  components: {
    StudentRow
  },
  props: {
    students: Array
  },
  data() {
    return {
      editTable: false
    }
  },
  methods: {
    arrivedOrLeft(student, present) {
      // emit table to parent
      this.$emit('student-arrived-or-left', student, present)
    },
    deleteStudent(student) {
      this.$emit('delete-student', student)
    }
  }
}

</script>

<style scoped>

#attribute {
  font-size: 9px;
  display: block;
  text-align: right;
  margin-right: 20px;
}

</style>