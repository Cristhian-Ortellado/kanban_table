import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    title: String,
    description: String,
    author: String,
    tag: String,
    openModal: false,
    afterCreationMethod: null,
  }),
  getters: {
    getCreatedTask: (state) => {
      return {
        title: state.title,
        description: state.description,
        author: state.author,
        tag: state.tag,
      };
    },
  },
  actions: {
    showModal(method) {
      this.afterCreationMethod = method;
      this.openModal = true;
    },
    closeModal() {
      this.openModal = false;
    },
    afterMethod() {
      console.log(this.afterCreationMethod);
      this.afterCreationMethod();
    },
  },
});
