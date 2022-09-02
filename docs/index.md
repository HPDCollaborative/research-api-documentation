<script setup>
  import { useVersion } from './.vitepress/composables/useVersion.js'
  import { useRouter } from 'vitepress'

  const { version } = useVersion()

  const router = useRouter()

  router.go(`/${version}/`)
  
</script>

<template></template>
