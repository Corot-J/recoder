<template>
  <div class="container">
    <scroll-view class="recode-list" scroll-y>
      <block v-for="(recode, index) in recodeList" :key="recode.id">
        <recode-item :recode="recode" @add="showAddModal(index)" @del="showDelModal(recode)"></recode-item>
      </block>
      <no-message tip="请先创建记录项" v-if="recodeList.length==0"></no-message>
    </scroll-view>
    <div class="footer-btn" @tap="toCreate">+ 创建记录项</div>
    <add-modal :show="showAdd" @hide="hideAddModal" @confirm="addCount"></add-modal>
    <tip-modal :show="showDel" :title="delRecode.title" @cancel="hideDelModal" @confirm="confirmDel"></tip-modal>
  </div>
</template>

<script>
import RecodeItem from '../../components/recodeItem.vue'
import AddModal from '../../components/addModal.vue'
import NoMessage from '../../components/noMessage.vue'
import TipModal from '../../components/tipModal.vue'
import Store from '../../stores/store.js'

export default {
  data () {
    return {
      showAdd: false,
      operateIndex: {},
      showDel: false,
      delRecode: {}
    }
  },

  components: {
    RecodeItem, AddModal, NoMessage, TipModal
  },

  methods: {
    showAddModal(index){
      this.operateIndex = index;
      this.showAdd = true;
    },
    hideAddModal(){
      this.operateIndex = '';
      this.showAdd = false;
    },
    addCount(count){
      Store.dispatch('addCount', {
        index: this.operateIndex,
        count: count
      })
      this.hideAddModal();
    },
    showDelModal(recode) {
      this.delRecode = recode;
      this.showDel = true;
    },
    hideDelModal(){
      this.delRecode = {};
      this.showDel = false;
    },
    confirmDel(){
      Store.dispatch('delRecode', this.delRecode);
      this.hideDelModal();
    },
    toCreate(){
      wx.navigateTo({
        url: '../add/main'
      });
    }    
  },

  created () {

  },

  computed:{
    recodeList(){
      return Store.getters.recodeList
    }
  }
}
</script>

<style scoped>
.container{
  background-color: #f6f6f6;
}
.recode-list{
  width: 100%;
  height: calc(100% - 100rpx);
}
.footer-btn{
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  font-size: 28rpx;
  color: #fff;
  background-color: #a78760;
  text-align: center;
}
</style>
