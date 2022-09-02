<script setup>
  import { useVersion } from './.vitepress/composables/useVersion.js'
  import { useRouter } from 'vitepress'

  const { latest } = useVersion()

  const router = useRouter()

  router.go(`/${latest}/`)
  
</script>

<template></template>
