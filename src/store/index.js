import Vue from 'vue';
import Vuex from 'vuex';
import SideBar from '@/fixture/SideBar';
import HeaderMenu from '@/fixture/HeaderMenu'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    SideBar,
    HeaderMenu,
    ActiveIndex: {
      SideBar: 0,
      HeaderMenu: 0,
    },
    Slides: [],
    move: {
      High: false,
      Down: false,
    },
  },
  mutations: {
    setActiveSideBarButton(state, index) {
      state.ActiveIndex.SideBar = index;
      this.commit('setSlides', state.ActiveIndex.SideBar);
    },
    setActiveHeaderButton(state, index) {
      state.ActiveIndex.HeaderMenu = index;
    },
    setSlides(state, index) {
      state.move.High = false;
      state.move.High = false;

      if (state.Slides.length === 2) {
        state.Slides.shift();
      }

      if (state.Slides.length < 2) {
        state.Slides.push(state.SideBar[index]);
      }

      if (state.Slides.length == 2 && state.Slides[1].id > state.Slides[0].id) {
        state.move.High = true;
      } else {
        state.move.Down = true;
      }
    },
    setClamped(state, payload) {
      state.SideBar[payload.index].isClamped = payload.value;
    },
  },
  actions: {},
  modules: {},
  getters: {
    SideBarInfo: state => {
      return state.SideBar;
    },
    SideBarLength: state => {
      return state.SideBar.length;
    },
    HeaderMenuInfo: state => {
      return state.HeaderMenu;
    },
    HeaderMenuActiveIndex: state => {
      return state.ActiveIndex.HeaderMenu;
    },
    SideBarMenuActiveIndex: state => {
      return state.ActiveIndex.SideBar;
    },
    buttonIndex: state => {
      return state.buttonIndex;
    },
    Slides: state => {
      return state.Slides;
    },
    Move: state => {
      return state.move;
    },
  },
});
