<template>
  <div class="d-flex flex-column gap-3 pa-12 align-center">
    <v-card width="100%" max-width="500px">
      <v-form @submit.prevent.stop="submit" >
        <v-card-text>
          <v-card-title>Nouvelle Tâche</v-card-title>
          <v-text-field clearable label='Titre' v-model="newTask.name"/>
          <v-textarea auto-grow rows="1" max-rows="5" clearable label='Description' v-model="newTask.description"/>
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" variant="tonal">Sauvegarder</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <v-card v-for="task of tasks" width="100%" max-width="500px">
      <v-card-title class="d-flex justify-space-between">
        {{ task.name }}
        <div class="d-flex align-center">
          <v-btn icon="mdi-pencil-outline" size="small" @click=""/>
          <v-btn icon="mdi-delete-outline" size="small" @click="deleteTask(task)"/>
          <v-checkbox v-model="task.checked" />
        </div>
      </v-card-title>
      <v-card-text>{{ task.description }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import Task from '@/classes/Task';

  export default {

    data(){
      return{
        tasks:[],
        newTask: new Task()
      }
    },
    created(){
      this.refreshData()
    },
    methods:{
      async submit(){
        await this.newTask.save()
        this.newTask = new Task()
        this.refreshData()
      },
      async refreshData(){
        this.tasks = await Task.getAll()
      },
      async deleteTask(task){
        await task.delete()
        this.refreshData()
      }
    }
        
  }
</script>

<style scoped>
  html, body{
  height: 100%;
}

#app{
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.gap-1 { gap: 4px; }
.gap-2 { gap: 8px; }
.gap-3 { gap: 12px; }
.gap-4 { gap: 16px; }
.gap-5 { gap: 20px; }
.gap-6 { gap: 24px; }
.gap-7 { gap: 28px; }
.gap-8 { gap: 32px; }
.gap-9 { gap: 36px; }
.gap-10 { gap: 40px; }
.gap-11 { gap: 44px; }
.gap-12 { gap: 48px; }
</style>
