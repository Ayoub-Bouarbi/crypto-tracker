<template>
<div>
   <coin-item v-for="(coin,i) in coinList" :coin="coin" :key="i"/>
</div>
</template>

<script>
import CoinItem from '../Coins/CoinItem.vue'

export default{
  components: { CoinItem },
  props: ['coinList']
}
</script>
