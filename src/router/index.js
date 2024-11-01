import {createMemoryHistory, createRouter} from 'vue-router'

import HomeView from '../views/Home.vue'
import KanbanEdit from '../views/kanban/Edit.vue'

const routes = [
    {path: '/', component: HomeView, name: 'home'},
    {path: '/kanban/edit', component: KanbanEdit, name: 'kanban.edit'},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;

