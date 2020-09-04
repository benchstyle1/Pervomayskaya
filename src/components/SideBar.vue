<template>
  <div class="side-bar">
    <div class="side-bar-menu">
      <ul>
        <li v-for="button in SideBarInfo" :key="button.title">
          <span
            :class="{ SideBarActive: button.isActive }"
            @click="select(button, button.id - 1)"
            >{{ button.title }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['SideBarInfo', 'currentIndexButton']),
  },
  methods: {
    ...mapMutations(['setActiveButton', 'getLinesCount']),
    select(payload, index) {
      if (this.SideBarInfo[index].isActive == false) {
        this.setActiveButton(index);
        this.$emit('move', false);
        setTimeout(() => {
          this.$emit('move', true);
          console.log('move');
        }, 1);
      }
    },
  },
};
</script>

<style>
.side-bar {
  height: 100%;
  width: 288px;
  background-color: white;
}

.side-bar-menu {
  height: 251px;
  padding-top: calc((840px - 251px) / 2 + 0.5px);
}

.side-bar-menu ul {
  list-style-type: none;
  padding: 0;
}

.side-bar ul li {
  margin-bottom: 32px;
}

.side-bar ul li > span:hover {
  cursor: pointer;
}

.side-bar ul li > span {
  display: inline-block;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.567739px;
  color: #505050;
  padding: 0 4px;
}

.side-bar ul li > span::after {
  content: '';
  display: block;
  padding: 0 4px;
  margin: -8px 0 0 -4px;
  width: 0;
  height: 8px;
  background: white;
  transition: width 0.3s;
}

.side-bar ul li > span:hover::after {
  width: 100%;
  background: #ebd8cc;
}

.side-bar ul li:last-of-type {
  margin-bottom: 0;
}

.side-bar .SideBarActive {
  height: 9px !important;
  display: inline-block;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.567739px;
  text-transform: uppercase;
  color: #262525;
}

.side-bar .SideBarActive::after {
  content: '';
  display: block;
  padding: 0 4px;
  margin: -8px 0 0 -4px;
  width: 100%;
  height: 8px;
  background: #ebd8cc;
}
</style>
