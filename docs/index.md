<script setup>
  import { currentVersion, versions } from './.vitepress/composables/useVersion.js'
  import { useRouter } from 'vitepress'

  const router = useRouter()

  const current = currentVersion.replace('v', '')

  router.go(`/${current}/`)
  
</script>

<template></template>
