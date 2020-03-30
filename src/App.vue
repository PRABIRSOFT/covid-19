<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="display-1">COVID-19 Situation In India</v-toolbar-title>
    </v-app-bar>
    <v-content wrap fill-height>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({}),
};
</script>
