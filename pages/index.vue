<template>
  <div>
    <Search-Bar @onSearch="OnSearch"/>
    <Coins :coinList="allCoins" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        coinList: [],
        allCoins:[]
      }
    },
    async mounted() {
      var result = await this.$axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false")
      this.$store.commit("setCoinList",result.data);
      this.allCoins = this.$store.getters['getCoinList'];
    },
    methods: {
      OnSearch(search){
        this.allCoins = this.$store.getters['getCoinList'].filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));
      }
    },
  }

</script>
