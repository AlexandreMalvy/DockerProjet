<template>
  <div class="d-flex flex-column gap-3 pa-12">
    <v-card v-for="task of tasks" width="100%" max-width="500px">
      <v-card-title class="d-flex justify-space-between">
        {{ task.name }}
        <v-checkbox v-model="task.checked" />
      </v-card-title>
      <v-card-text>{{ task.desc }}</v-card-text>
      
    </v-card>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        tasks: [
          {
            id:0,
            name: 'task 1',
            desc: ' Test',
            checked: false
          },
          {
            id:1,
            name: 'task 2',
            desc: ' Test',
            checked: false
          },
          {
            id:2,
            name: 'task 3',
            desc: ' Test',
            checked: false
          }
        ]
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
