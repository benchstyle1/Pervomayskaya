<template>
  <div class="header-menu">
    <router-link v-for="(item, index) in HeaderMenuInfo" :key="index" :to="item.to">{{
      item.title
    }}</router-link>
    <div class="link-bar"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['HeaderMenuInfo']),
  },
};
</script>

<style>
.header-menu {
  width: 582px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.routes {
  width: 100%;
  height: 19px;
  display: flex;
}

.link-bar {
  position: absolute;
  width: 0;
  left: 0;
  height: 4px;
  margin-top: 19px;
  background-color: red;
  overflow: hidden;
}

.link-bar-left {
  position: absolute;
  width: 0;
  right: 0;
  height: 4px;
  margin-top: 19px;
  direction: rtl;
  background-color: blue;
  overflow: hidden;
}

.header-menu a {
  display: block;
  text-decoration: none;
  margin-right: 56px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #262525;
  padding: 0 0 0 4px;
}

/* подчеркиваем пункт меню */
.header-menu a:nth-of-type(1)[class*='router-link-exact-active'] ~ .link-bar {
  width: 99px !important;
  left: 668px;
  transition: all 0.33s;
}

.header-menu a:nth-of-type(2)[class*='router-link-exact-active'] ~ .link-bar {
  width: 106px !important;
  left: 819px;
  transition: all 0.33s;
}

.header-menu a:nth-of-type(3)[class*='router-link-exact-active'] ~ .link-bar {
  width: 84px !important;
  left: 977px;
  transition: all 0.33s;
}

.header-menu a:nth-of-type(4)[class*='router-link-exact-active'] ~ .link-bar {
  width: 134px !important;
  left: 1113px;
  transition: all 0.33s;
}

.header-menu
  a:nth-of-type(1)[class*='router-link-exact-active']
  + a:nth-of-type(2):hover
  ~ .link-bar {
  width: 260px !important;
  left: 668px;
  transition: all 0.33s;
  background-color: red !important;
}

.header-menu
  a:nth-of-type(2)[class*='router-link-exact-active']
  + a:nth-of-type(3):hover
  ~ .link-bar {
  width: 242px !important;
  left: 819px;
  transition: all 0.33s;
  background-color: red !important;
}

.header-menu
  a:nth-of-type(3)[class*='router-link-exact-active']
  + a:nth-of-type(4):hover
  ~ .link-bar {
  width: 270px !important;
  left: 977px;
  transition: all 0.33s;
  background-color: red !important;
}

.header-menu
  a:nth-of-type(2)[class*='router-link-exact-active']
  + .header-menu
  a:nth-of-type(1):hover
  ~ .link-bar {
  width: 260px !important;
  left: 668px;
  transition: all 0.33s;
  background-color: blue !important;
}

.header-menu a:last-of-type {
  margin-right: 0;
}
</style>
