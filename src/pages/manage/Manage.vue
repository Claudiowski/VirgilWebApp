<template>
    <div>
    <v-tabs
      color="cyan"
      dark
      slider-color="yellow"
    >
      <v-tab :key="1" ripple>
        Thèmes
      </v-tab>
      <v-tab :key="2" ripple>
        Catégories
      </v-tab>
      <v-tab :key="3" ripple>
        Flux
      </v-tab>
      <v-tab-item :key="1">
          <manage-theme></manage-theme>
      </v-tab-item>
      <v-tab-item :key="2">
          <manage-category></manage-category>
      </v-tab-item>
      <v-tab-item :key="3">  
          <manage-stream></manage-stream>
      </v-tab-item>
</v-tabs>
    </div>
</template>

<script>

import ManageTheme from './ManageTheme'
import ManageCategory from './ManageCategory'
import ManageStream from './ManageStream'

export default {
  name: 'Manage',
  components: {
      ManageTheme,
      ManageCategory,
      ManageStream
  }
}

</script>

<style>

</style>
