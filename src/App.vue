<script setup>
import Kanban from "./components/Kanban.vue";
import Header from "./components/Header.vue";
import Modal from "./components/Modal.vue";
import { provide, ref } from "vue";
</script>

<template>
  <!-- Header -->
  <Header></Header>
  <Kanban></Kanban>

  <Modal></Modal>
</template>

<style scoped></style>
