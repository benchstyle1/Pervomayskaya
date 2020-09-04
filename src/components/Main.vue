<template>
  <div class="main">
    <SideBar v-on:move="moveSlide($event)"/>
    <Slider :move="move"/>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar';
import Slider from '@/components/Slider';

export default {
  components: {
    SideBar, Slider,
  },
  data() {
    return {
      move: false,
    };
  },
  methods: {
    moveSlide(event) {
      return this.move = event;
    }
  }
};
</script>

<style>
.main {
  width: 1805px;
  height: 840px;
  background-color: #f0f0f0;
  margin: -35px auto 0 auto;
}
</style>
