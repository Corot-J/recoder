<script>
import Store from './stores/store.js'

export default {
  created () {
    Store.dispatch('getRecodeList')
  }
}
</script>

<style>
@import '../static/css/iconfont.wxss';
page{
  width: 100%;
  height: 100%;
}
.container {
  height: 100%;
  height: 100%;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
button{
  padding: 0;
  margin: 0;
}
</style>
