<template>
 <v-sheet class="mx-auto" max-width="300">
    <v-form validate-on="submit lazy" @submit.prevent="submitTaskForm">
      <v-text-field
        v-model="taskData.name"
        :rules="[rules.required]"
        label="Task name"
      ></v-text-field>

      <v-text-field
        v-model="taskData.description"
        :rules="[rules.required]"
        label="Task description"
      ></v-text-field>

      <v-text-field
        v-model="taskData.datetime"
        label="Task Date"
        type="date"
      ></v-text-field>

      <v-btn
        :loading="loading"
        class="mt-2"
        text="Add Tasks"
        type="submit"
        block
      ></v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { createTask } from '../services/TaskServices'

  export default {
    data() {
        return {
            loading: false,
            rules: {required: value => !!value || 'Field is required'},
            timeout: null,
            taskData: {
                name: '',
                description: '',
                datetime: '',
                creator: 'User'
            }
        }
    },

    methods: {
      async submitTaskForm (event) {
        this.loading = true
        const isValid = await event

        try {
            if (this.taskData.datetime) {
                const [day, month, year] = this.taskData.datetime.split('-');

                this.taskData.datetime = new Date(`${year}-${month}-${day}`);
            }

            isValid.valid && await createTask(this.taskData)

            this.$router.push("/")
        }
        catch(e) {
            console.log('[API] error:',(e))
        }

        this.loading = false

      },
    },
  }
</script>