<template>
  <div class="modal" v-show="show">
    <div class="modal-content">
      <div class="modal-header">
        <span>添加数量</span>
      </div>
      <div class="modal-body">
        <input class="modal-input" type="number" v-model="count" placeholder="输入添加数量">
      </div>
      <div class="modal-footer">
        <button @tap="hide">取消</button>
        <div class="modal-footer-line"></div>
        <button @tap="confirm">确认添加</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show'],
  
  data(){
    return {
      count: ''
    }
  },

  methods:{
    hide(){
      this.$emit('hide')
      this.count = ''
    },
    confirm(){
      this.$emit('confirm', this.count)
      this.count = ''
    }
  }
}
</script>

<style scoped>
@import './modal.css';
</style>
