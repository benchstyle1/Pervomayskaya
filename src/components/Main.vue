<template>
  <div class="main">
    <SideBar @move="move = $event"/>
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
