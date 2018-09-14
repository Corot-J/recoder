import * as types from './mutaions-types'

export default {
  // 创建记录项
  createRecode(context, recode) {
    return new Promise((resolve, reject) => {
      var exist = false
      context.state.recodeList.map(item => {
        if(item.title == recode.title){
          exist = true
          wx.showToast({
            title: `已存在 “${item.title}”`, //提示的内容,
            icon: 'none', //图标
          });
          reject()
        }
      })
      if(!exist){
        context.commit(types.CREATE_RECODE, recode)
        context.dispatch('saveRecodeList')
        resolve()
      }   
    })     
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