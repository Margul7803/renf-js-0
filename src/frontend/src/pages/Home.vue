<script setup lang="ts">
import { ref } from 'vue';
import TaskCard from '../components/TaskCard.vue'
</script>

<template>
  <div class="home">
    <h1 style="margin-bottom: 100px;">Welcom to youre taskManager™ dashboard !</h1>
    <div class="task-list" >
      <span v-for="(task, index) in tasks" :key="index">
        <TaskCard :taskProps="task" @delete-task="deleteEvent"/>
      </span>
    </div>
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
  deleteTask(taskId)
  tasks.value = tasks.value.filter(task => task._id !== taskId);
}
</script>

<style scoped>
.task-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.home {
  margin: 50px;
}
</style>