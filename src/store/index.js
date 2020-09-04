import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    SideBar: [
      {
        id: 1,
        title: 'Архитектура',
        text:
          'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни',
        isActive: true,
        isClamped: false,
        img: require('@/assets/image/Архитектура.jpg'),
      },
      {
        id: 2,
        title: 'Благоустройство',
        text:
          'Запроектированные большие окна, которые пропускают много солнечного света, наполнят Ваши квартиры теплотой и уютом 123 21314 ljsd;fk jhfjs fkjsdkf kdjfs',
        isActive: false,
        isClamped: false,
        img: require('@/assets/image/Благоустройство.jpg'),
      },
      {
        id: 3,
        title: 'Безопасность',
        text:
          'Современный двор европейского уровня — территория для детей, игр на свежем воздухе и вечерних',
        isActive: false,
        isClamped: false,
        img: require('@/assets/image/Безопасность.jpg'),
      },
      {
        id: 4,
        title: 'Инженерия',
        text:
          'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни',
        isActive: false,
        isClamped: false,
        img: require('@/assets/image/Инженерия.jpg'),
      },
      {
        id: 5,
        title: 'Инфраструктура',
        text:
          'Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интеллигенции, но при этом чувствовать ритм мегаполиса',
        isActive: false,
        isClamped: false,
        marginTop: 0,
        img: require('@/assets/image/Инфраструктура.jpg'),
      },
      {
        id: 6,
        title: 'Транспортная доступность',
        text: 'Жилой комплекс «Первомайская» расположен в престижном Академическом районе',
        linesCount: 0,
        isActive: false,
        isClamped: false,
        img: require('@/assets/image/Транспортная доступность.jpg'),
      },
    ],
    HeaderMenu: [
      { title: 'о комплексе', to: '/' },
      { title: 'особенности', to: '/features' },
      { title: 'пентхаусы', to: '/penthouses' },
      { title: 'выбрать квартиру', to: '/reserve' },
    ],
    Slides: [],
    move: {
      High: false,
      Down: false,
    },
  },
  mutations: {
    setActiveButton(state, index) {
      state.SideBar.forEach(element => {
        element.isActive = false;
      });
      state.SideBar[index].isActive = true;
      this.commit('setSlides', index);
    },
    setSlides(state, index) {
      state.move.High = false;
      state.move.High = false;

      if (state.Slides.length > 1) {
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
      console.log(state.Slides);
    },
    setClamped(state, payload) {
      state.SideBar[payload.index].isClamped = payload.value
    }
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
