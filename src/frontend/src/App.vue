<template>
  <nav class="header">
    <h1 style="margin-bottom: 100px;">Welcom to youre taskManager™ dashboard !</h1>
    <div class="nav-btn">
      <v-btn @click='$router.push("/")'>Home</v-btn>
      <v-btn @click='$router.push("/add-tasks")'>Add Tasks</v-btn>
    </div>
  </nav>
  <router-view />

</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
}

.nav-btn {
  display: flex;
  justify-content: space-between;
  width: 240px;
}
</style>