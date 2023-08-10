<script setup>
import { useModalStore } from "@/stores/ModalStore.js";

const { showModal } = useModalStore();
</script>
<template>
  <button
    @click="showModal()"
    class="hover:scale-105 transition-all rounded-md bg-slate-700 text-white py-2 w-full mx-auto font-semibold"
  >
    + Add Task
  </button>
</template>
