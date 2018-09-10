import * as types from './mutaions-types'

export default {
  // 创建记录项
  createRecode(context, recode) {
    context.commit(types.CREATE_RECODE, recode)
    context.dispatch('saveRecodeList')
  },
  // 删除记录项
  delRecode(context, recode){
    context.commit(types.DEL_RECODE, recode)
    context.dispatch('saveRecodeList')
  },
  // 添加数量
  addCount(context, options){
    context.commit(types.ADD_COUNT, options)
    context.dispatch('saveRecodeList')
  },
  saveRecodeList(context){
    wx.setStorage({
      key: 'recodeList',
      data: context.state.recodeList
    });
  },
  getRecodeList(context){
    wx.getStorage({
      key: 'recodeList',
      success(res){
        context.commit(types.INIT_RECODE_LIST, res.data)
      }
    });
  }
}