<script setup lang="ts">
import ITask from '../models/Task';
import { format } from 'date-fns'

defineProps<{
  taskProps: ITask
}>()
</script>

<style src="./TaskCard.css"></style>

<template>
    <v-card class="card">
      <div class="info">
      <v-card-title>{{ taskProps.name }}</v-card-title>
      <v-card-subtitle>
        {{ taskProps.creator }}
        <span v-if="taskProps.datetime"> {{ format(new Date(taskProps.datetime),'dd/MM/yyyy') }} </span>
      </v-card-subtitle>
      <v-card-text>{{ taskProps.description }}</v-card-text>
    </div>
      <v-btn class='btn-delete' @click="onDelete(taskProps._id)">X</v-btn>
    </v-card>
</template>


<script lang="ts">
export default {
  methods: {
    onDelete(id:string) {
      this.$emit('delete-task', id);
    }
  }
}
</script>