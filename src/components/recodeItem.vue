<template>
  <div class="recode-item">
    <div class="recode-header">
      <div class="close-btn" @tap="del">
        <i class="iconfont icon-close"></i>
      </div>
      <div class="recode-title">{{recode.title}}</div>
      <div class="recode-level">等级：{{recode.level}}</div>
    </div>
    <div class="recode-footer">
      <div class="recode-count">数量：{{recode.count}}{{recode.unit}}</div>
      <button @tap="add">添加</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['recode'],

  methods:{
    del(){
      this.$emit('del', this.recode)
    },
    add(){
      this.$emit('add', this.recode)
    }
  }
}
</script>

<style scoped>
.recode-item{
  width: calc(100% - 40rpx);
  padding: 0 20rpx;
  background-color: #fff;
  margin-bottom: 20rpx;
}
.recode-header{
  width: 100%;  
  border-bottom: 1rpx solid #eee;
  position: relative;
}
.close-btn{
  width: 33rpx;
  height: 33rpx;
  border-radius: 50%;
  border: 1rpx solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 20rpx;
}
.close-btn .iconfont{
  font-size: 16rpx;
  font-weight: bold;
  color: #333;
}
.recode-title{
  font-size: 32rpx;
  line-height: 48rpx;
  padding: 35rpx 40rpx 35rpx 0;
  color: #333;
}
.recode-level{
  font-size: 24rpx;
  line-height: 24rpx;
  color: #666;
  padding-bottom: 30rpx;
}
.recode-footer{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx 0;
}
.recode-count{
  font-size: 28rpx;
  color: #666;
}
.recode-footer button{
  width: 100rpx;
  height: 60rpx;
  line-height: 60rpx;
  font-size: 24rpx;
  color: #fff;
  background-color: #a78760;
}
</style>
