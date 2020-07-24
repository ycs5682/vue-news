<template>
  <div><list-item></list-item></div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
export default {
  components: {
    ListItem
  }

  // computed: {
  //   ...mapGetters(['fetchedAsk'])
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // }
};
</script>
