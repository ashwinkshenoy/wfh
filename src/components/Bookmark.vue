<template>
  <div>
    <div class="container">
      <!-- Header -->
      <div class="header">
        <router-link :to="`/`">
          <img src="@/assets/logo.png" alt="logo" class="logo">
        </router-link>
      </div>
      <!-- Header end -->

      <div class="star-content bubble-burst animate" v-if="step1">
        <img src="@/assets/star.svg" alt="bookmark" class="star-img bounce">
        <img src="@/assets/up-arrow.svg" alt="arrow" class="up-arrow">
      </div>

      <div class="bookmark-content" v-if="step1">
        <div class="hd1">One more thing!!!</div>
        <div class="desc1">
          It’s usually hard to recall such websites when they are actually needed. <br>Bookmark it now to check whenever you need it back.
        </div>
      </div>

      <div class="bookmark-content" v-if="step2">
        <div class="hd2">See you back tomorrow!!!</div>
        <div class="desc2">
          Hope you have bookmarked our website for future.
        </div>
        <img src="@/assets/mouth.svg" alt="arrow" class="smile">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Bookmark',
    data() {
      return {
        step1: false,
        step2: false
      };
    },
    mounted() {
      document.documentElement.style.setProperty('--main-bg-color', '#000000');
      this.checkIfBookmarkShown();
    },
    methods: {
      checkIfBookmarkShown() {
        if (localStorage.getItem("showBookmark") != null) {
          console.log("true");
          document.documentElement.style.setProperty('--main-bg-color', "rgb(219, 80, 74)");
          this.step2 = true;
        } else {
          localStorage.setItem('showBookmark', 'true');
          this.step1 = true;
        }
      }
    },
  };
</script>

<style lang="scss">
  @import './styles/home.scss';
  @import './styles/bookmark.scss';
</style>
