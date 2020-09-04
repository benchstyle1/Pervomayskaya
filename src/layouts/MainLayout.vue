<template>
  <div class="main-layout">
    <Header />
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer :footerInfo="footerInfo"/>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
export default {
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      footerInfo: {
        text: 'разработано в MST',
        year: 2018,
      }
    }
  }
};
</script>

<style>

.content {
  width: 1805px;
  height: 840px;
  background-color: #f0f0f0;
  margin: -35px auto 0 auto;
}
</style>
