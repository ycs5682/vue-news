<template>
  <div>
    <div v-for="job in fetcheJobs" v-bind:key="job.title">{{ job.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetcheJobs'])
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
};
</script>

<style></style>
