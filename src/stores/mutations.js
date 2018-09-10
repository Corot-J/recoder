import * as types from './mutaions-types'
import {computeLevel} from '../utils/index'

export const mutations = {
  // 初始化recodeList
  [types.INIT_RECODE_LIST] (state, recodeList) {
    state.recodeList = recodeList
  },
  // 创建记录项
  [types.CREATE_RECODE] (state, recode) {
    state.recodeList.push(recode)
  },
  // 删除记录项
  [types.DEL_RECODE] (state, recode) {
    state.recodeList = state.recodeList.filter(item => item != recode)
  },
  // 添加数量
  [types.ADD_COUNT] (state, options) {
    state.recodeList[options.index].count += parseInt(options.count)
    state.recodeList[options.index].level = computeLevel(options.count)
  }
}