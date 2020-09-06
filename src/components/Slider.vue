<template>
  <div class="slider">
    <div class="slider-info">
      <div
        class="slider-info-wrapper"
        v-for="(item, index) in Slides"
        :key="index"
        :class="{ highText: index == 0 && Move.Down, moveText: index == 0 && move }"
      >
        <h3>{{ item.title }}</h3>
        <v-clamp @clampchange="checkClampStatus($event, index)" autoresize :max-lines="3" :ellipsis="''">
          {{item.text}}
          <template v-slot:after>
            <a v-if="item.isClamped" class="empty-link" href="#"><img src="@/assets/image/icons/spread.jpg" alt="spread"></a>
          </template>
        </v-clamp>
        <span>{{ item.id }} / {{ SideBarLength }}</span>
      </div>
    </div>
    <div class="slider-picture">
      <img
        v-for="(item, index) in Slides"
        :key="index"
        :src="item.img"
        :alt="item.title"
        :class="{ highPicture: index == 1 && Move.High, movePicture: index == 1 && move }"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import VClamp from 'vue-clamp';

export default {
  components: { VClamp },
  props: {
    move: Boolean,
  },
  created() {
    this.Slides.push(this.SideBarInfo[0]);
  },
  mounted() {},
  computed: {
    ...mapGetters(['SideBarLength', 'SideBarInfo', 'Slides', 'Move']),
  },
  methods: {
    ...mapMutations(['setClamped']),
    checkClampStatus(event, index) {
      this.setClamped({index: index, value: event});
    }
  },
};
</script>

<style>
.slider {
  width: 1517px;
  height: 840px;
  margin-top: -840px;
  margin-left: 288px;
  display: flex;
}

.slider-picture img {
  width: 758px;
  height: 840px;
  display: block;
}

.slider-picture {
  width: 758px;
  height: 840px;
  overflow: hidden;
}

.slider-info {
  width: 435px;
  height: 355px;
  margin: 326px auto 0 auto;
  overflow: hidden;
}

.slider-info-wrapper {
  height: 100%;
  width: 100%;
}

.slider-info-wrapper > h3 {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 800;
  font-size: 44px;
  line-height: 54px;
  letter-spacing: -0.0255199px;
  text-transform: uppercase;
  color: #262525;
  margin: 0 0 22px 0;
}

.slider-info-wrapper > div > span > span {
  width: 100%;
  height: 90px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.0220791px;
  color: #262525;
}

.slider-info-wrapper > span {
  display: block;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 20px;
  color: #505050;
  height: 20px;
  margin-top: 151px;
}

.movePicture {
  margin-top: -840px !important;
  transition: margin-top 0.5s linear;
}

.highPicture {
  margin-top: -1680px;
}

.moveText {
  margin-top: -360px !important;
  transition: margin-top 0.5s linear;
}

.highText {
  margin-top: -720px;
}

.empty-link {
  background-color: #262525;
  color: #f0f0f0;
  text-align: center;
  margin-left: 5px;
  text-decoration: none;
  vertical-align: middle;

  display: inline;
}
</style>
