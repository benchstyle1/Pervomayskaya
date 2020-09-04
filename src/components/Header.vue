<template>
  <div class="header">
    <Square />
    <span>первомайская</span>
    <HeaderMenu />
    <a :href="`tel:+7${HeaderData.phone}`">{{ phoneView }}</a>
    <Square>
      <template v-slot:content>
        <img src="@/assets/image/IconBurger.png" alt="logo" />
      </template>
    </Square>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu';
import Square from '@/components/Square';

export default {
  props: {
    HeaderData: {
      type: Object,
      default: function() {
        return { phone: '8888888888'};
      },
    },
  },
  computed: {
    phoneView: function() {
      let phone = this.HeaderData.phone.split('');
      for (let i = 2; i >= 0; i--) {
        phone.splice(i * 3, 0, ' ');
      }
      phone.splice(phone.length - 2, 0, ' ');
      phone.unshift('8');
      return phone.join('');
    },
  },
  components: {
    HeaderMenu,
    Square,
  },
};
</script>

<style>
.header {
  width: 1872px;
  display: flex;
  margin: 25px 24px 0 24px;
}

.header > span {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
  letter-spacing: 0.290629px;
  color: #262525;
  text-transform: uppercase;
  margin: 0 411px 0 23px;
}

.header > a {
  text-decoration: none;
  color: #262525;
  margin: 0 26px 0 411px;
  height: 21px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
  letter-spacing: 0.290629px;
  text-transform: uppercase;
  color: #262525;
}
</style>
