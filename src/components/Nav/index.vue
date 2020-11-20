<template>
<div>
  <div id="nav">
    <div class="nav-item" v-for="item in list" :key="item.key">
      <div class="nav-inner">
        <div :class="item.route !== $route.name ? 'nav-item-key' : ' nav-item-key nav-item-key-selected' ">
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
  <div v-if="pos !== 3" class="back-nav">
    <font-awesome-icon icon="arrow-left" />
    <p>
      Back to {{pos == 1 ? 'cart' : 'delivery' }}
     
    </p>
  </div>
</div>

</template>

<script>
export default {
  name: 'navigationBar',
  methods: {
  },
  data() {
    return {
      list: [
        {
          title: "Delivery",
          key: 1,
          route: 'delivery'
        },
        {
          title: "Payment",
          key: 2,
          route: 'payment'
        },
        {
          title: "Finish",
          key: 3,
          route: 'receipt'
        }
      ]
    }
  },
  watch: {
    $route (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="stylus">
@import '../../style/style.styl'
@import './style.styl'
</style>