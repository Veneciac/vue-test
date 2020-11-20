<template>
  <div class="outer-container">
    <div class="inner-container">
      <div class="header-container">
        <div class="header-title">
          <h1>
            Delivery Detail
            <div/>
          </h1>
        </div>
        <div @click="setIsDropship" class="dropship-container">
          <font-awesome-icon :icon="form.isDropship ? 'check-square' : 'minus-square' " />
          <p>
            Send as dropshipper
          </p>
        </div>
      </div>

      <div class="grid-container">
        <div class="left-container">
          <div :class="emailValid ? 'valid-input' : email ? 'invalid-input' : ''" class="input-container">
            <label>
              <input required v-model="email" type="text"/>
              <span>Email</span>
              <font-awesome-icon v-if="email" :icon="emailValid ? 'check' : 'times'" />
            </label>
          </div>
          <div :class="phoneValid ? 'valid-input' : phone ? 'invalid-input' : ''"  class="input-container">
            <label>
              <input required v-model="phone" type="text"/>
              <span>Phone Number</span>
              <font-awesome-icon v-if="phone" :icon="emailValid ? 'check' : 'times'" />
            </label>
          </div>
          <div :class="addressValid ? 'valid-input' : address ? 'invalid-input' : ''"  class="text-area-container">
            <label>
              <textarea required v-model="address" type="text"/>
              <span>Delivery Address</span>
              <font-awesome-icon v-if="address" :icon="emailValid ? 'check' : 'times'" />
            </label>
          </div>
        </div>
        <div v-if="form.isDropship" class="middle-container">
          <div :class="dropshipNameValid ? 'valid-input' : dropshipperName ? 'invalid-input' : ''"  class="input-container">
            <label>
              <input required v-model="dropshipperName" type="text"/>
              <span>Dropshipper Name</span>
              <font-awesome-icon v-if="dropshipperName" :icon="emailValid ? 'check' : 'times'" />
            </label>
          </div>
          <div :class="dropshipperPhone ? 'valid-input' : dropshipperPhone ? 'invalid-input' : ''"  class="input-container">
            <label>
              <input required v-model="dropshipperPhone" type="text"/>
              <span>Dropshipper phone number</span>
              <font-awesome-icon v-if="dropshipperPhone" :icon="emailValid ? 'check' : 'times'" />
            </label>
          </div>
        </div>
      </div>
    </div>
    <summaryInfo button="Continue to payment" next="payment" :valid="validateForm()"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import summaryInfo from '@/components/Summary'

export default {
  name: 'delivery',
  components: {
    summaryInfo,
  },
  computed: {
    ...mapState(['form']),
    email: {
      set(email) {
        this.$store.commit('setForm', {
          ...this.$store.state.form,
          email
        })
      },
      get () {
        return this.$store.state.form.email;
      }
    },
    phone: {
      set(phone) {
        this.$store.commit('setForm', {
          ...this.$store.state.form,
          phone
        })
      },
      get () {
        return this.$store.state.form.phone;
      }
    },
    address: {
      set(address) {
        this.$store.commit('setForm', {
          ...this.$store.state.form,
          address
        })
      },
      get () {
        return this.$store.state.form.address;
      }
    },
    dropshipperName: {
      set(dropshipperName) {
        this.$store.commit('setForm', {
          ...this.$store.state.form,
          dropshipperName
        })
      },
      get () {
        return this.$store.state.form.dropshipperName;
      }
    },
    dropshipperPhone: {
      set(dropshipperPhone) {
        this.$store.commit('setForm', {
          ...this.$store.state.form,
          dropshipperPhone
        })
      },
      get () {
        return this.$store.state.form.dropshipperPhone;
      }
    }
  },
  data() {
    return {
      emailValid: false,
      phoneValid: false,
      addressValid: false,
      dropshipNameValid: false,
      dropshipPhoneValid: false
    }
  },
  methods: {
    validateEmail (email) {
      const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      if (emailRegex.test(email) === true) {
        return true
      }
      return false
    },
    validatePhone (phone) {
      const phoneRegex = /^[0-9]{10,13}$/;
      if (phoneRegex.test(phone) === true) {
        return true
      }
      return false
    },
    setIsDropship () {
      this.$store.commit('setForm', {
        ...this.$store.state.form,
        isDropship: !this.$store.state.form.isDropship
      })
    },
    validateForm () {
      if (!this.emailValid || !this.phoneValid || !this.addressValid) {
        return false
      } 
      if (this.$store.state.form.isDropship) {
        if (!this.dropshipperName || !this.dropshipperPhone) {
          return false
        }
      }
      return true
    },
    setEmailValidation(val) {
      let isValid = this.validateEmail(val)
      this.emailValid = isValid
    },
    setPhoneValidation (val) {
      let isValid = this.validatePhone(val)
      this.phoneValid = isValid
    },
    setAddressValidation (val) {
      if (val) {
        this.addressValid = true
      } else {
        this.addressValid = false
      }
    },
    setDropshipperNameValidation (val) {
      if (val) {
        this.dropshipNameValid = true
      } else {
        this.dropshipNameValid = false
      }
    },
    setDropshipperPhoneValidation (val) {
      let isValid = this.validatePhone(val)
      this.dropshipPhoneValid = isValid
    },
  },
  watch: {
    email (val) {
      this.setEmailValidation(val)
    },
    phone (val) {
      this.setPhoneValidation(val)
    },
    address (val) {
      this.setAddressValidation(val)
    },
    dropshipperName (val) {
      this.setDropshipperNameValidation(val)
    },
    dropshipperPhone (val) {
      this.setDropshipperPhoneValidation(val)
    },
  },
  created() {
    this.setEmailValidation(this.$store.state.form.email)
    this.setPhoneValidation(this.$store.state.form.phone)
    this.setAddressValidation(this.$store.state.form.address)
    this.setDropshipperNameValidation(this.$store.state.form.dropshipperName)
    this.setDropshipperPhoneValidation(this.$store.state.form.dropshipperPhone)
  }
}
</script>

<style lang="stylus">
@import '../../style/style.styl'
@import './style.styl'
</style>