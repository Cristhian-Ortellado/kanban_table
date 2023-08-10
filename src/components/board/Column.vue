<script setup>
import { ref } from "vue";
import Task from "./Task.vue";
import AddTaskButton from "./AddNewTaskButton.vue";

//props
const props = defineProps({
  title: String,
  initialTasks: Array,
});

let tasks = ref(props.initialTasks);

function addTask() {
  tasks.value.push({
    title: "Text is not showing icons",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque
        id architecto tempora perspiciatis dolor blanditiis accusantium quaerat
        atque aliquam provident eaque sapiente, eius tempore nulla consequuntur
        quos possimus laborum!`,
    author: "Cristhian Ortellado",
    tag: "bug",
  });
}
</script>

<template>
  <div class="flex-shrink-0 md:w-1/4 flex flex-col gap-4 text-slate-800 w-full">
    <!-- title -->
    <h4 class="text-center font-light text-white text-2xl">{{ title }}</h4>

    <!-- Add new Task -->
    <AddTaskButton @add-task="addTask"></AddTaskButton>

    <!-- content -->
    <div class="flex-1 w-full rounded flex flex-col overflow-y-auto">
      <Task
        v-for="task in tasks"
        :title="task.title"
        :description="task.description"
        :author="task.author"
        :tag="task.tag"
      ></Task>
    </div>
  </div>
</template>
