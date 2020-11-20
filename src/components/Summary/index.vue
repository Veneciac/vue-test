<template>
  <div class="summary">
    <div class="summary-upper">
      <h1>
        Summary
      </h1>
      <p>
        10 items were purchased
      </p>
      <infoDetail v-if="shipment" title="Delivery estimation" :detail="shipment.est + shipment.title" />
      <infoDetail v-if="payment" title="Payment method" :detail="payment.title" />
    </div>
    <div class="summary-bottom">
      <div class="summary-bottom-grid">
        <p>
          Cost of goods
        </p>
        <p class="right bold">
          {{convertToRupiah(summary.cost)}}
        </p>
        <p v-if="form.isDropship">
          Dropshipping fee
        </p>
        <p v-if="form.isDropship" class="right bold">
          {{convertToRupiah(summary.fee)}}
        </p>
        <p v-if="shipment">
          {{shipment.title}} shipment
        </p>
        <p v-if="shipment" class="right bold">
          {{convertToRupiah(shipment.price)}}
        </p>
        <p class="total bold">
          Total
        </p>
        <p class="right bold total">
          {{convertToRupiah(summary.total)}}
        </p>
      </div>
      <button v-if="button" @click="onClickNext" :disabled="!valid" class="continue-btn" :class="!valid ? 'disabled-continue-btn' : ''">
        {{button}}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import infoDetail from './InfoDetail';
import * as utils from '../../helpers/utils';

export default {
  name: 'summaryInfo',
  props: ['valid', 'next', 'button'],
    computed: {
    ...mapState(['summary', 'payment', 'shipment', 'form'])
  },
  components: {
    infoDetail
  },
  methods: {
    convertToRupiah (e) {
      return utils.convertToRupiah(e)
    },
    onClickNext () {
      this.$router.push({ name: this.$props.next })
    }
  },
  created () {
    this.$store.dispatch('getTotal')
  },
}
</script>

<style lang="stylus">
@import '../../style/style.styl'
@import './style.styl'
</style>