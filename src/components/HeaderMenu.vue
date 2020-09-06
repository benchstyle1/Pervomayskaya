<template>
  <div class="header-menu">
    <router-link
      v-for="(item, index) in HeaderMenuInfo"
      :key="index"
      :to="item.to"
      @click.native="selectRoute(index)"
      @mouseover.native="hover(index)"
      >{{ item.title }}</router-link
    >
    <div class="link-bar"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['HeaderMenuInfo', 'HeaderMenuActiveIndex']),
  },
  methods: {
    ...mapMutations(['setActiveHeaderButton']),
    selectRoute(index) {
      this.setActiveHeaderButton(index);
    },
    hover(hoverElementIndex) {
      hoverElementIndex += 1;
      let activeElementIndex = this.HeaderMenuActiveIndex + 1;
      let linkBar = document.getElementsByClassName('link-bar')[0].style;

      if (activeElementIndex == 1 || (activeElementIndex == 1 && hoverElementIndex == 1)) {
        linkBar.setProperty('left', '668px', 'important');
        linkBar.setProperty('width', '99px', 'important');
      }

      if (activeElementIndex == 2 || (activeElementIndex == 2 && hoverElementIndex == 2)) {
        linkBar.setProperty('left', '819px', 'important');
        linkBar.setProperty('width', '106px', 'important');
      }

      if (activeElementIndex == 3 || (activeElementIndex == 3 && hoverElementIndex == 3)) {
        linkBar.setProperty('left', '977px', 'important');
        linkBar.setProperty('width', '84px', 'important');
      }

      if (activeElementIndex == 4 || (activeElementIndex == 4 && hoverElementIndex == 4)) {
        linkBar.setProperty('left', '1113px', 'important');
        linkBar.setProperty('width', '134px', 'important');
      }

      if (
        (activeElementIndex == 1 && hoverElementIndex == 2) ||
        (activeElementIndex == 2 && hoverElementIndex == 1)
      ) {
        linkBar.setProperty('left', '668px', 'important');
        linkBar.setProperty('width', '260px', 'important');
      }

      if (
        (activeElementIndex == 1 && hoverElementIndex == 3) ||
        (activeElementIndex == 3 && hoverElementIndex == 1)
      ) {
        linkBar.setProperty('left', '668px', 'important');
        linkBar.setProperty('width', '398px', 'important');
      }

      if (
        (activeElementIndex == 1 && hoverElementIndex == 4) ||
        (activeElementIndex == 4 && hoverElementIndex == 1)
      ) {
        linkBar.setProperty('left', '668px', 'important');
        linkBar.setProperty('width', '579px', 'important');
      }

      if (
        (activeElementIndex == 2 && hoverElementIndex == 3) ||
        (activeElementIndex == 3 && hoverElementIndex == 2)
      ) {
        linkBar.setProperty('left', '820px', 'important');
        linkBar.setProperty('width', '240px', 'important');
      }

      if (
        (activeElementIndex == 2 && hoverElementIndex == 4) ||
        (activeElementIndex == 4 && hoverElementIndex == 2)
      ) {
        linkBar.setProperty('left', '820px', 'important');
        linkBar.setProperty('width', '426px', 'important');
      }

      if (
        (activeElementIndex == 3 && hoverElementIndex == 4) ||
        (activeElementIndex == 4 && hoverElementIndex == 3)
      ) {
        linkBar.setProperty('left', '978px', 'important');
        linkBar.setProperty('width', '268px', 'important');
      }

      if (
        (activeElementIndex == 2 && hoverElementIndex == 1) ||
        (activeElementIndex == 3 && hoverElementIndex == 1) ||
        (activeElementIndex == 3 && hoverElementIndex == 2) ||
        (activeElementIndex == 4 && hoverElementIndex == 1) ||
        (activeElementIndex == 4 && hoverElementIndex == 2) ||
        (activeElementIndex == 4 && hoverElementIndex == 3)
      ) {
        linkBar.setProperty('direction', 'rtl');
      }
    },
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

a:nth-of-type(2) .routes {
  width: 100%;
  height: 19px;
  display: flex;
}

.link-bar {
  position: absolute;
  width: 99px;
  left: 668px;
  height: 4px;
  margin-top: 19px;
  background-color: red;
  overflow: hidden;
  transition: all 0.33s;
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

.header-menu a:last-of-type {
  margin-right: 0;
}
</style>
