<template>

  <section class="flex flex-col text-slate-200 text-center gap-10 p-10">

    <div class="flex items-center justify-center gap-10">
      <h2>Lista de Tableros kanban</h2>

      <button @click="displayModal = true"
              class="bg-slate-800 border border-white rounded px-2 py-4  font-bold text-slate-200">
        + Agregar tablero
      </button>
    </div>

    <div class="grid gap-6 grid-cols-3">
      <card v-for="card in cards"
            :title="card.title"
            :description="card.description"
      />

    </div>

    <modal-kanban v-show="displayModal" @createAction="addKanban" @close-modal="displayModal = false" />
  </section>
</template>

<script>
import Kanban from "@/components/Kanban.vue";
import Modal from "@/components/Modal.vue";
import Card from "@/components/templates/Card.vue";
import ModalKanban from "@/components/templates/ModalKanban.vue";

export default {
  name: "Home",
  components: {ModalKanban, Card, Modal, Kanban},
  data() {
    return {
      displayModal: false,
      cards: [
        {
          title: 'Primer tablero',
          description: 'lorem ipsen'
        },
        {
          title: 'Segundo tablero tablero',
          description: 'lorem ipsen'
        }
      ]
    }
  },
  methods:{
    addKanban(kanban){
      this.cards.push(kanban);
      this.displayModal = false;
    }
  }
}
</script>
