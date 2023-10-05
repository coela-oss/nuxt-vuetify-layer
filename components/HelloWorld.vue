<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <v-card>
    <v-card-title>Hello World!</v-card-title>
    <v-card-subtitle>{{ myLayer }}</v-card-subtitle>
  </v-card>
</template>
