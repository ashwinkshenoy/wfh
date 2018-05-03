<template>
  <div>

    <div class="container">
      <!-- Header -->
      <div class="header">
        <router-link :to="`/`">
          <img src="@/assets/logo.png" alt="logo" class="logo">
        </router-link>
        <a href="#" class="link">Got a creative reason ? Share with us !</a>
      </div>
      <!-- Header end -->

      <div class="bookmark-content">
        <div class="hd1">One more thing!!!</div>
        <div class="desc1">Just scroll down to see</div>
        <img src="@/assets/down-arrow.svg" alt="down" class="down-arrow bounce">
      </div>
    </div>

    <div class="bookmark-section2">
      <div class="hd1">
        It’s usually hard to recall such websites when they are actually needed. <br>Bookmark it now to check whenever you need it back.
      </div>
      <button class="black-btn">Add to bookmark</button>
    </div>

  </div>
</template>

<script>
  // import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'Bookmark',
    data() {
      return {};
    },
    mounted() {
      document.documentElement.style.setProperty('--main-bg-color', '#000000');
    },
    methods: {},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import './styles/home.scss';
  @import './styles/bookmark.scss';
</style>
