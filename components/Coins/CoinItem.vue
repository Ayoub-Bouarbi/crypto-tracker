<template>
  <div class="flex justify-center">
    <div class="hover:bg-gray-300 p-3 flex flex-row justify-start items-center h-12 border-b">
      <div class="flex item-center pr-10">
        <img class="h-8 w-8 mr-5" :src="coin.image" alt="coin img">
        <h1 class="text-large w-40">{{ coin.name }}</h1>
        <p class="uppercase">{{ coin.symbol }}</p>
      </div>
      <div class="flex text-right justify-between w-full">
        <p class="w-24">${{ coin.current_price }}</p>
        <p class="w-36">${{ coin.total_volume.toLocaleString() }} </p>
        <p class="text-red-500 w-24" v-if="coin.price_change_24h < 0">{{ coin.price_change_24h.toFixed(2) }}%</p>
        <p class="text-green-500 w-24" v-else>{{ coin.price_change_24h.toFixed(2) }}%</p>
        <p class="w-44">{{ coin.market_cap.toLocaleString() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Coin-Item',
  props: ['coin']
}
</script>

