<template>
  <div class="text-area-container">
    <label>
      <textarea required :value="value" type="text"/>
      <span>{{label}}</span>
      <font-awesome-icon icon="check" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'textArea',
  props: ['label', 'value']
}
</script>

<style lang="stylus">
@import '../../style/style.styl'
@import './style.styl'
</style>