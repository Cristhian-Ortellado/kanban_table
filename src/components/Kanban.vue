<script>
import Column from "./board/Column.vue";
import ModalColumn from "@/components/board/ModalColumn.vue";
import {VueDraggableNext as draggable} from 'vue-draggable-next';

export default {
  name: "Kanban",
  components: {
    Column,
    ModalColumn,
    draggable,
  },
  data() {
    return {
      enabled: true,
      tableColumns: [
        {
          id: 1,
          title: "Backlog",
          tasks: [
            {
              title: "Text is not showing icons",
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque
        id architecto tempora perspiciatis dolor blanditiis accusantium quaerat
        atque aliquam provident eaque sapiente, eius tempore nulla consequuntur
        quos possimus laborum!`,
              author: "Cristhian Ortellado",
              tag: "bug",
              id: "1",
            },
          ],
        },
        {
          id: 2,
          title: "To Do",
          tasks: [
            {
              title: "1 Text is not showing icons",
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque
        id architecto tempora perspiciatis dolor blanditiis accusantium quaerat
        atque aliquam provident eaque sapiente, eius tempore nulla consequuntur
        quos possimus laborum!`,
              author: "Cristhian Ortellado",
              tag: "bug",
              id: "2",
            },
          ],
        },
        {
          id: 3,
          title: "In Progress",
          tasks: [
            {
              title: "2 Text is not showing icons",
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque
        id architecto tempora perspiciatis dolor blanditiis accusantium quaerat
        atque aliquam provident eaque sapiente, eius tempore nulla consequuntur
        quos possimus laborum!`,
              author: "Cristhian Ortellado",
              tag: "bug",
              id: "6",
            },
          ],
        }
      ],
      dragging: false,
      displayModal: false,
      drag: false,
      options: {
        dropzoneSelector: ".drag-inner-list",
        draggableSelector: ".drag-item"
      }
    };
  },
  methods: {
    createAction(item) {
      this.tableColumns.push(item);
      this.displayModal = false;
    },
    addColumn() {
      this.displayModal = false;
    },
    add: function () {
      this.tableColumns.push({title: "Juan ", tasks: []});
    },
    replace: function () {
      this.tableColumns = [{title: "Juan ", tasks: []}];
    },
    checkMove: function (e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    }
  }
};
</script>

<template>
  <div>

  </div>
  <section class="flex flex-col">

    <div class="flex justify-end mx-10">
      <button @click="addColumn"
              class="items-center justify-center bg-slate-800 border border-white rounded px-2 py-4  font-bold text-slate-200 mt-10 text-center">
        + Agregar Columna
      </button>
    </div>

    <!-- Each board -->
    <div class="flex flex-grow w-auto p-5 gap-5 h-screen overflow-x-scroll">
      <Column
          :title="column.title"
          :initial-tasks="column.tasks"
          v-for="column in tableColumns"
          :key="column.id"
      ></Column>
    </div>

  </section>
</template>
