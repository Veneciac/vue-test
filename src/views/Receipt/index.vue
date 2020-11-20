<template>
  <div class="receipt-container">
    <div class="receipt-inner">
      <div class="header-title">
        <h1>
          Thank you
          <div/>
        </h1>
      </div>
      <h3>
        Order ID: {{generateOrderId()}}
      </h3>
      <p>
        Your order will be delivered today with {{shipment.title}}
      </p>

      <span class="back-nav" @click="backtoHomePage">
        <font-awesome-icon icon="arrow-left" />
        <p>
          Go back to Homepage
        </p>
      </span>
    </div>
    <summaryInfo/>
  </div>
</template>

<script>
import summaryInfo from '@/components/Summary'
import { mapState } from 'vuex'

export default {
  name: 'receipt',
  props: [ ],
    computed: {
    ...mapState(['shipment']),
  },
  methods: {
    generateOrderId () {
      let chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'
      var result = '';
      for (var i = 5; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    },
    backtoHomePage () {
      this.$router.push({ name: 'delivery' })
    }
  }, 
  components: {
    summaryInfo,
  },
}
</script>

<style lang="stylus">
@import '../../style/style.styl'
@import './style.styl'
</style>