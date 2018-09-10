<template>
  <div class="container">
    <div class="edit-group">
      <div class="edit-item">
        <div class="edit-key">标题</div>
        <div class="edit-value">
          <input type="text" v-model="recode.title" placeholder="输入标题">
        </div>
      </div>
      <div class="edit-item">
        <div class="edit-key">数量</div>
        <div class="edit-value">
          <input type="number" v-model="recode.count" placeholder="输入数量">
        </div>
      </div>
    </div>
    <button class="save-btn" @tap="create">创建</button>
  </div>
</template>

<script>
import Store from '../../stores/store.js'
import {computeLevel} from '../../utils/index'

export default {
  data(){
    return {
      recode: {
        id: '',
        title: '',
        level: 0,
        count: 0
      }
    }
  },

  methods:{
    create(){
      if(this.recode.title == ''){
        wx.showToast({
          title: '标题不能为空',
          icon: 'none'
        });
      }
      else{
        this.recode.level = computeLevel(this.recode.count)
        this.recode.id = new Date().getTime()
        Store.dispatch('createRecode', this.recode)
        wx.navigateBack({
          delta: 1
        });
        this.recode = {
          id: '',
          title: '',
          level: 0,
          count: 0
        }
      }      
    }
  }
}
</script>

<style scoped>
.container{
  background-color: #f6f6f6;
}
.edit-group{
  width: 100%;
  margin-bottom: 20rpx;
  background-color: #fff;
}
.edit-item{
  width: calc(100% - 40rpx);
  height: 100rpx;
  padding: 0 20rpx;
  display: flex;
  align-items: center;
  border-bottom: 1rpx solid #eee;
}
.edit-item:last-child{
  border-bottom: none;
}
.edit-key{
  font-size: 28rpx;
  color: #666;
  width: 100rpx;
  margin-right: 10rpx;
}
.edit-value{
  width: calc(100% - 110rpx);
  height: 100%;
}
.edit-value input{
  width: calc(100% - 40rpx);
  height: 100%;
  padding: 0 20rpx;
  font-size: 28rpx;
  color: #333;
  border: none;
}
.save-btn{
  width: calc(100% - 40rpx);
  margin: 0 auto;
  background-color: #a78760;
  color: #fff;
  font-size: 28rpx;
  height: 80rpx;
  line-height: 80rpx;
}
</style>
