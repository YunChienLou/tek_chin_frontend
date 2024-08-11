import Vue from 'vue'
// import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.snow.css'

if (process.client) {
  const VueQuillEditor = require('vue-quill-editor')
  Vue.use(VueQuillEditor)
}
