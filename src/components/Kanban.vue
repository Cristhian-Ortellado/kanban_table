<script setup>
import Column from "./board/Column.vue";
const tableColumns = [
  {
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
      {
        title: "Create new Notification",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque
        id architecto tempora perspiciatis dolor blanditiis accusantium quaerat
        atque aliquam provident eaque sapiente, eius tempore nulla consequuntur
        quos possimus laborum!`,
        author: "Cristhian Ortellado",
        tag: "feature",
      },
    ],
  },
  {
    title: "To Do",
    tasks: [
      {
        title: "Text is not showing icons",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque
        id architecto tempora perspiciatis dolor blanditiis accusantium quaerat
        atque aliquam provident eaque sapiente, eius tempore nulla consequuntur
        quos possimus laborum!`,
        author: "Cristhian Ortellado",
        tag: "bug",
        id: "2",
      },
      {
        title: "Create new Notification",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque
        id architecto tempora perspiciatis dolor blanditiis accusantium quaerat
        atque aliquam provident eaque sapiente, eius tempore nulla consequuntur
        quos possimus laborum!`,
        author: "Cristhian Ortellado",
        tag: "feature",
        id: "3",
      },
      {
        title: "Perfect pixel design",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque
        id architecto tempora perspiciatis dolor blanditiis accusantium quaerat
        atque aliquam provident eaque sapiente, eius tempore nulla consequuntur
        quos possimus laborum!`,
        author: "Cristhian Ortellado",
        tag: "design",
        id: "4",
      },
      {
        title: "Add author name to each post",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque
        id architecto tempora perspiciatis dolor blanditiis accusantium quaerat
        atque aliquam provident eaque sapiente, eius tempore nulla consequuntur
        quos possimus laborum!`,
        author: "Cristhian Ortellado",
        tag: "feature",
        id: "5",
      },
    ],
  },
  {
    title: "In Progress",
    tasks: [
      {
        title: "Text is not showing icons",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque
        id architecto tempora perspiciatis dolor blanditiis accusantium quaerat
        atque aliquam provident eaque sapiente, eius tempore nulla consequuntur
        quos possimus laborum!`,
        author: "Cristhian Ortellado",
        tag: "bug",
        id: "6",
      },
      {
        title: "Create new Notification",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque
        id architecto tempora perspiciatis dolor blanditiis accusantium quaerat
        atque aliquam provident eaque sapiente, eius tempore nulla consequuntur
        quos possimus laborum!`,
        author: "Cristhian Ortellado",
        tag: "feature",
        id: "7",
      },
      {
        title: "Perfect pixel design",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque
        id architecto tempora perspiciatis dolor blanditiis accusantium quaerat
        atque aliquam provident eaque sapiente, eius tempore nulla consequuntur
        quos possimus laborum!`,
        author: "Cristhian Ortellado",
        tag: "design",
        id: "8",
      },
      {
        title: "Add author name to each post",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque
        id architecto tempora perspiciatis dolor blanditiis accusantium quaerat
        atque aliquam provident eaque sapiente, eius tempore nulla consequuntur
        quos possimus laborum!`,
        author: "Cristhian Ortellado",
        tag: "feature",
        id: "9",
      },
    ],
  },
  {
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
        id: "10",
      },
      {
        title: "Create new Notification",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque
        id architecto tempora perspiciatis dolor blanditiis accusantium quaerat
        atque aliquam provident eaque sapiente, eius tempore nulla consequuntur
        quos possimus laborum!`,
        author: "Cristhian Ortellado",
        tag: "feature",
        id: "11",
      },
      {
        title: "Perfect pixel design",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque
        id architecto tempora perspiciatis dolor blanditiis accusantium quaerat
        atque aliquam provident eaque sapiente, eius tempore nulla consequuntur
        quos possimus laborum!`,
        author: "Cristhian Ortellado",
        tag: "design",
        id: "12",
      },
      {
        title: "Add author name to each post",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque
        id architecto tempora perspiciatis dolor blanditiis accusantium quaerat
        atque aliquam provident eaque sapiente, eius tempore nulla consequuntur
        quos possimus laborum!`,
        author: "Cristhian Ortellado",
        tag: "feature",
        id: "13",
      },
    ],
  },
];
</script>

<template>
  <!-- title -->
  <slot></slot>

  <!-- Each board -->
  <div class="flex flex-grow w-auto p-5 gap-5 h-screen overflow-x-scroll">
    <Column
      :title="column.title"
      :initial-tasks="column.tasks"
      v-for="column in tableColumns"
      :key="column.id"
    ></Column>
  </div>
</template>
