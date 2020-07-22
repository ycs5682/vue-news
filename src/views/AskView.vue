<template>
  <div>
    <p v-for="item in fetcheAsk" :key="item.title">
      <a :href="item.url">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
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
