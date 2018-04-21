<template>
  <div>
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Virgil</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to='/consult'>Consulter</v-btn>
        <v-btn flat to='/manage'>Gérer</v-btn>
        <v-btn flat to='/review'>Relire</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Consult from './pages/consult/Consult'
import Manage from './pages/manage/Manage'
import Review from './pages/review/Review'

export default {
  name: 'App',
  components: {
    Consult,
    Manage,
    Review
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
