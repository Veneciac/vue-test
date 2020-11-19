<template>
  <div id="nav">
    <div class="nav-item" v-for="item in list" :key="item.key">
      <div class="nav-inner">
        <div :class="item.key !== 3 ? 'nav-item-key' : ' nav-item-key nav-item-key-selected' ">
          <p>
            {{item.key}}
          </p>
        </div>
        <p>
          {{item.title}}
        </p>
      </div>

      <font-awesome-icon v-if="item.key !== 3" icon="chevron-right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigationBar',
  methods: {
    props: ['pos']
  },
  data() {
    return {
      list: [
        {
          title: "Delivery",
          key: 1
        },
        {
          title: "Payment",
          key: 2
        },
        {
          title: "Finish",
          key: 3
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '../style/style.styl'
@import './nav.styl'
</style>