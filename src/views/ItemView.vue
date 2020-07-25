<template>
  <div>
    <sections>
      <user-profile :info="itemInfo">
        <div slot="username">{{ itemInfo.user }}</div>
        <template slot="time">{{ itemInfo.time_ago }}</template>
      </user-profile>
    </sections>
    <h2>{{ itemInfo.title }}</h2>
    <sections>
      <div v-html="itemInfo.content"></div>
    </sections>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfiie.vue';
export default {
  components: {
    UserProfile
  },
  computed: {
    itemInfo() {
      return this.$store.state.item;
    }
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
