import Toast from './Toast'
const obj={}
obj.install = function (Vue) {
  document.body.appendChild(Toast.$el)
  Vue.probeType.$toast = Toast
}

export default obj
