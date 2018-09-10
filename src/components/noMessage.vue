<template>
  <div class="no-message">
    <div>
      <img :src="img">
      <div>{{tip}}</div>
    </div>
  </div>
</template>

<script>
import * as imgUrl from '../utils/imgUrl.js';

export default {
  props: ['tip'],

  data(){
    return {
      img: imgUrl.NO_MESSAGE
    }
  }
}
</script>

<style scoped>
.no-message{
  width: 100%;
  height: calc(100% - 100rpx);
  padding: 50rpx 0;
  font-size: 24rpx;
  color: #b2b2b2;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.no-message image{
  width: 90rpx;
  height: 100rpx;
  margin-bottom: 40rpx;
}
</style>
