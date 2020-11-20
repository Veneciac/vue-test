<template>
  <div class="section-container">
    <div class="header-title">
      <h1>
        {{title}}
        <div/>
      </h1>
    </div>
    <div class="card-container">
      <div class="card" @click.prevent="onSelect(detail)" :class="selected && detail.title == selected.title ? 'selected-card' : '' " v-for="(detail, i) in list" :key="i">
        <p>
          {{detail.title}}
        </p>
        <p class="bold">
          {{ detail.price ? convertToRupiah(detail.price) : detail.amount ? convertToRupiah(detail.amount) :'' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import * as utils from '../../../../helpers/utils';

export default {
  name: 'cardSection',
  props: ['selected', 'list', 'title'],
  methods: {
   convertToRupiah (e) {
      return utils.convertToRupiah(e)
    },
    onSelect (detail) {
      this.$emit('select', detail)
    }
  }
}
</script>

<style lang="stylus">
@import '../../../../style/style.styl'
@import './style.styl'
</style>