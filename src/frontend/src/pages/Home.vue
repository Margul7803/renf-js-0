<script setup lang="ts">
import { ref } from 'vue';
import TaskCard from '../components/TaskCard.vue'
</script>

<template>
  <div class="task-list" >
    <span style="display: flex;   max-width: 600px; width: 100%;" v-for="(task, index) in tasks" :key="index">
      <TaskCard :taskProps="task" @delete-task="deleteEvent"/>
    </span>
  </div>
</template>

<script lang="ts">
import { deleteTask, getTasks } from '../services/TaskServices'
import ITask from '../models/Task';

const tasks = ref<ITask[]>([])

export default {
  async mounted() {
    try {
      tasks.value = await getTasks();
    } catch (error) {
      console.error('Erreur lors de la récupération des tâches dans le composant:', error);
    }
  }

};

const deleteEvent = (taskId:string) => {
  try {
  deleteTask(taskId)
  tasks.value = tasks.value.filter(task => task._id !== taskId);
  }
  catch(e) {
    console.log('[API] error:', e)
  }
}
</script>

<style scoped>
.task-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.home {
  margin: 50px;
}
</style>