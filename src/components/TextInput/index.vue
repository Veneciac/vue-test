<template>
  <div class="input-container">
    <label>
      <input @change="$emit('input', $event.target.value)" required v-model="value" type="text"/>
      <span>{{label}}</span>
      <font-awesome-icon icon="check" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'textInput',
  props: ['label', 'value', 'change']
}
</script>

<style lang="stylus">
@import '../../style/style.styl'
@import './style.styl'
</style>