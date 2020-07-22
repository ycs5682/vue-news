<template>
  <div>
    <div v-for="user in fetcheNews" v-bind:key="user.title">{{ user.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetcheNews'])
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
};
</script>

<style></style>
