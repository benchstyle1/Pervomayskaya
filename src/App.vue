<template>
  <div id="app">
    <component :is="layout"> </component>
  </div>
</template>

<script>
import 'normalize.css';
import MainLayout from '@/layouts/MainLayout';
import style from '@/assets/style/index.css';

export default {
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
  components: {
    MainLayout,
  },
};
</script>

<style>
.app {
  height: 100%;
  width: 100%;
}
</style>
