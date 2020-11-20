<template>
  <div id="app">
    <div class="base">
      <navigationBar/>
      <router-view/>
  </div>
  </div>
</template>

<script>
import navigationBar from '@/components/Nav'
export default {
  name: 'app',
  components: {
    navigationBar
  },
}
</script>

<style>

</style>
