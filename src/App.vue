<script setup lang="ts">
import { useStore } from '@/store'

const store = useStore()
console.log(store.state.token)
</script>

<template>
  <h1 class=" text-primary font-bold underline">{{ 'Nusaib ' + $store.state.token }}</h1>
  <router-view></router-view>
</template>

