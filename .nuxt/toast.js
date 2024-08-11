import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {"duration":3000,"position":"top-center","iconPack":"fontawesome"})

const globals = [{"name":"app_error","message":(payload) => {
        // if there is no message passed show default message
        if (!payload.message) {
          return '抱歉...　發生錯誤... ';
        }
        // if there is a message show it with the message
        return '抱歉... ' + payload.message;
      },"options":{"type":"error"}}]
if(globals) {
  globals.forEach(global => {
    Vue.toasted.register(global.name, global.message, global.options)
  })
}

export default function (ctx, inject) {
  inject('toast', Vue.toasted)
}
