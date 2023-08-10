<script setup>
import { useModalStore } from "@/stores/ModalStore.js";

let title = "";
let description = "";
let author = "";
let tag = "";

const modal = useModalStore();
</script>
<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      v-show="modal.openModal"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto" v-show="modal.openModal">
      <div
        class="flex min-h-full items-start justify-center p-4 text-center md:items-center sm:p-0"
      >
        <div
          class="flex-1 md:flex-auto relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <form
                action="#"
                class="flex flex-col space-y-2 mx-auto text-center"
              >
                <h2 class="font-normal text-2xl">Add new task</h2>

                <input v-model="title" type="text" placeholder="Title" />
                <input
                  v-model="description"
                  type="text"
                  placeholder="Description"
                />
                <input v-model="tag" type="text" placeholder="Tag" />
                <input v-model="author" type="text" placeholder="Author" />
              </form>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              class="inline-flex w-full justify-center rounded-md bg-slate-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              @click="modal.createAction(title, description, author, tag)"
            >
              Create
            </button>
            <button
              type="button"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              @click="modal.closeModal()"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
