<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="display-1">COVID-19 India</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({}),
};
</script>
