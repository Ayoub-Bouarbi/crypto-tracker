<template>
<div class="m-auto flex items-center w-2/4 p-12">
  <input type="text" placeholder="Search" @change="onSearch" class="outline-none bg-gray-200 h-full w-full p-2 rounded-md">
</div>
</template>

<script>
export default {
  methods: {
    onSearch(e){
      e.preventDefault();

      this.$emit("onSearch",e.target.value.toLowerCase());
    }
  },
}
</script>
