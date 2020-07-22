<template>
  <div>
    <div v-for="item in fetcheAsk" v-bind:key="item.title">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetcheAsk'])
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
};
</script>
<style></style>
