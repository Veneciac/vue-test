<template>
   <div class="payment-container">
     <div class="payment-inner-container">
      <cardSection title="Shipment" @select="selectShipment" :list="shipmentOption" :selected="shipment" />
      <cardSection title="Payment" @select="selectPayment" :list="paymentOption" :selected="payment" />
     </div>
    <summaryInfo :button="'Pay with ' +( payment ? payment.title : '')" next="receipt" :valid="validateForm()"/>
  </div>
</template>

<script>
import summaryInfo from '@/components/Summary'
import cardSection from './components/CardSection'
import { mapState } from 'vuex'

export default {
  name: 'payment',
  components: {
    summaryInfo,
    cardSection
  },
  computed: {
    ...mapState(['payment', 'shipment']),
  },
  data () {
    return {
      shipmentOption: [
        {
          title: 'GO-SEND',
          price: 15000,
          est: 'today'
        },
        {
          title: 'JNE',
          price: 9000,
          est: '2 days'
        },
        {
          title: 'Personal Courier',
          price: 29000,
          est: '1 day'
        }
      ],
      paymentOption: [
        {
          title: 'e-Wallet',
          amount: 1500000
        },
        {
          title: 'Bank Transfer'
        },
        {
          title: 'Virtual Account'
        }
      ]
    }
  },
  methods: {
    validateForm () {
      if (this.$store.state.shipment && this.$store.state.payment) return true
      return false
    },
    selectShipment(detail) {
      this.$store.commit('setShipment', {...detail})
    },
    selectPayment(detail) {
      this.$store.commit('setPayment', {...detail})
    }
  },
  watch: {
  }
}
</script>

<style lang="stylus">
@import '../../style/style.styl'
@import './style.styl'
</style>