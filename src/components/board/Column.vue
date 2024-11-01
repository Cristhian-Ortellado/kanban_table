<script setup>
import { ref } from "vue";
import Task from "./Task.vue";
import AddTaskButton from "./AddNewTaskButton.vue";
import { useModalStore } from "@/stores/ModalStore.js";
import { VueDraggableNext as draggable } from 'vue-draggable-next';

//props
const props = defineProps({
  title: String,
  initialTasks: Array,
});

const modal = useModalStore();

let tasks = ref(props.initialTasks);

//add a new task to this column
function addTask() {
  const newTask = modal.getCreatedTask;

  tasks.value.unshift({
    title: newTask.title,
    description: newTask.description,
    author: newTask.author,
    tag: newTask.tag,
  });
}

function showModal() {
  modal.showModal(addTask);
}
</script>

<template>
  <div class="flex-shrink-0 md:w-1/4 flex flex-col gap-4 text-slate-800 w-full">
    <!-- title -->
    <h4 class="text-center font-light text-white text-2xl">{{ title }}</h4>

    <!-- Add new Task -->
    <AddTaskButton @show-modal="showModal"></AddTaskButton>

    <!-- content -->

      <div class="flex-1 w-full rounded flex flex-col overflow-y-auto">
        <draggable class="dragArea"
        :list="tasks">
          <Task
              v-for="task in tasks"
              :title="task.title"
              :description="task.description"
              :author="task.author"
              :tag="task.tag"
              :key="task.id"
          ></Task>
        </draggable>
      </div>

  </div>
</template>
