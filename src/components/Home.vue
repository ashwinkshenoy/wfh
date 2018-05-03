<template>
  <div class="container">

    <!-- Header -->
    <div class="header">
      <router-link :to="`/`">
        <img src="../assets/logo.png" alt="logo" class="logo">
      </router-link>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhkzp_cKi2lL_jSFrQ1TlTK_6LlE8APTdRbYt9yZrljkHsqA/viewform" target="_blank" class="link add-reason">
        Got a creative reason ? Share with us !
      </a>
    </div>
    <!-- Header end -->

    <!-- Main content -->
    <div class="main-content">
      <div class="msg-box">
        <span id="msg">{{reasons[random] && reasons[random].text}}</span>
      </div>
      <div class="copy-text" v-clipboard:copy="reasons[random] && reasons[random].text" v-clipboard:success="onCopy">
        <span v-if="copied">Copied!</span>
        <span v-else>Click to copy text</span>
      </div>
      <button class="white-btn" @click="getNewReason">Show me another reason</button>
      <a href="#" class="link add-reason2">Got a creative reason? Share with us !</a>
    </div>
    <!-- Main content end -->

    <!-- Footer -->
    <div class="footer">
      <div class="left-content">
        <div class="hd1">Also experience it on</div>
        <img src="@/assets/playstore.svg" alt="playstore" class="foo-logo">
        <img src="@/assets/assistance.svg" alt="gassistance" class="foo-logo">
      </div>
      <div></div>
      <div class="right-content">
        <div class="hd1">Share only with close friends</div>
        <img src="@/assets/fb.svg" alt="playstore" class="foo-social" @click="socialFb()">
        <img src="@/assets/tw.svg" alt="gassistance" class="foo-social" @click="socialTwitter()">
      </div>
    </div>
    <!-- Footer end -->
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import VueClipboard from 'vue-clipboard2';
  import router from '@/router';

  Vue.use(VueClipboard);

  export default {
    name: 'HelloWorld',
    data() {
      return {
        reasons: [],
        random: 0,
        colorList: ['#ffab40', '#db504a', '#40A379', '#F4555D', '#3A7290', '#795548', '#607D8B', '#9CCC65', '#78586F'],
        colorNumber: 0,
        copied: false,
      };
    },
    async created() {
      try {
        const response = await axios.get(`https://s3.ap-south-1.amazonaws.com/idontlikework/wfh-reasons.json`);
        console.log(response);

        this.reasons = this.shuffle(response.data);
        this.random = this.getRandomInt(1, this.reasons.length);
      } catch (e) {
        console.log(e);
      }
    },
    beforeMount() {
      document.addEventListener('mouseout', this.bookmarkListen);
    },
    mounted() {
      this.colorList = this.shuffle(this.colorList);
      this.setBgColor();
    },
    beforeDestroy() {
      document.removeEventListener('mouseout', this.bookmarkListen);
    },
    methods: {
      getNewReason() {
        this.random == this.reasons.length - 1 ? (this.random = 0) : this.random++;
        this.setBgColor();
        this.copied = false;
      },
      setBgColor() {
        this.colorNumber == this.colorList.length - 1 ? (this.colorNumber = 0) : this.colorNumber++;
        document.documentElement.style.setProperty('--main-bg-color', this.colorList[this.colorNumber]);
      },
      onCopy() {
        this.copied = true;
      },
      getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      },
      shuffle(array) {
        let currentIndex = array.length,
          temporaryValue,
          randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      },
      bookmarkListen(e) {
        if (e.clientY <= 0 || e.clientX <= 0 || (e.clientX >= window.innerWidth || e.clientY >= window.innerHeight)) {
          console.log("I'm out");
          router.push({ path: '/bookmark' });
        }
      },
      socialFb() {
        window.open(
          'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fidontlike.work%2F',
          'yyyyy',
          'width=500,height=500,resizable=no,toolbar=no,menubar=no,location=no,status=no'
        );
      },
      socialTwitter() {
        window.open(
          'http://twitter.com/share?text=Check out the awesome Work From Home Reason Generator&url=https://idontlike.work',
          'yyyyy',
          'width=500,height=500,resizable=no,toolbar=no,menubar=no,location=no,status=no'
        );
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import './styles/home.scss';
</style>
