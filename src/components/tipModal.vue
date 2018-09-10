<template>
  <div class="modal" v-show="show">
    <div class="modal-content">
      <div class="modal-body">
        <div class="del-tip">确认删除{{title!=''?'"'+title+'"':''}}吗？</div>
      </div>
      <div class="modal-footer">
        <button @tap="cancel">取消</button>
        <div class="modal-footer-line"></div>
        <button @tap="confirm">确认</button>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  props: ['show', 'title'],

  methods:{
    cancel(){
      this.$emit('cancel')
    },

    confirm(){
      this.$emit('confirm')
    }
  }
}
</script>

<style scoped>
@import './modal.css';
.del-tip{
  font-size: 32rpx;
  color: #333;
  line-height: 190rpx;
  text-align: center;
}
</style>
