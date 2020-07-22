<template>
  <div>
    <p v-for="job in fetcheJobs" :key="job.title">
      <a :href="job.url">
        {{ job.title }}
      </a>
      <small>{{ job.time_ago }} , {{ job.domain }}</small>
    </p>
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
