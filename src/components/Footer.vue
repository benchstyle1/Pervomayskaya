<template>
  <div class="footer">
    <span>{{ footerInfo.text }}</span>
    <span>{{ footerInfo.year }}</span>
  </div>
</template>

<script>
export default {
  props: {
    footerInfo: {
      type: Object,
      default: function() {
        return { text: 'разработано в MST', year: new Date().getFullYear };
      },
    },
  },
};
</script>

<style>
.footer {
  width: 1805px;
  height: 15px;
  display: flex;
  margin: 23px 60px 0 60px;
}

.footer > span {
  height: 15px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.175729px;
  text-transform: uppercase;
  color: #505050;
}

.footer > span:first-of-type {
  border-right: 1px solid #505050;
  padding-right: 25px;
}

.footer > span:last-of-type {
  padding-left: 25px;
}
</style>
