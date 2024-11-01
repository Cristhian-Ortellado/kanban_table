import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    title: String,
    description: String,
    author: String,
    tag: String,
    openModal: false,
    afterCreationMethod: null,
    columns:     [
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
      }
    ]
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
    getColumns: (state) => {
      return state.columns;
    }
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
