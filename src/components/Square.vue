<template>
  <div class="square">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.square {
  width: 70px;
  height: 70px;
  text-align: center;
  background-color: #262525;
  z-index: 9999;
}

.square:before {
  content: ' ';
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}

.square > img {
  display: inline-block;
  vertical-align: middle;
}
</style>
