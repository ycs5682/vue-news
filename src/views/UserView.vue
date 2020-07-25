<template>
  <div>
    <user-profile></user-profile>
    <!-- <p>name: {{ userInfo.user.id }}</p>
    <p>karma: {{ userInfo.user.karma }}</p>
    <p>created: {{ userInfo.user.created }}</p> -->
  </div>
</template>

<script>
import UserProfile from '../components/UserProfiie.vue';
export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  }
};
</script>

<style></style>
