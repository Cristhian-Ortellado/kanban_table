import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const title = ref("");
  const description = ref("");
  const author = ref("");
  const tag = ref("");
  let openModal = ref(false);

  const showModal = () => {
    console.log(openModal.value);
    openModal.value = true;
  };

  function createAction(title = "", description = "", author = "", tag = "") {
    this.title = title;
    this.description = description;
    this.author = author;
    this.tag = tag;
    closeModal();
  }

  const closeModal = () => {
    openModal.value = false;
  };

  const modalCreateAction = () => {
    openModal.value = false;
  };

  return { openModal, showModal, closeModal, createAction };
});
