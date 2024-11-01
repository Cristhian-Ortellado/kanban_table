<script>
import Kanban from "@/components/Kanban.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "Edit" ,
  components: {Modal, Kanban}
}
</script>

<template>
  <section class="mt-10">
    <button @click="$router.back()" class="bg-slate-800 border border-white rounded px-2 py-4 ml-5 font-bold text-slate-200">
      Volver atras
    </button>
    <Kanban></Kanban>
    <Modal></Modal>
  </section>
</template>

<style scoped>

</style>