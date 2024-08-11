<template>
  <b-modal v-model="modalVisible" scrollable centered :title="content.title">
    {{ content.msg }}
    <template #modal-footer="{ cancel }">
      <b-button size="md" variant="info" @click="ok()"> 確定 </b-button>
      <b-button size="md" variant="danger" @click="cancel()"> 取消 </b-button>
    </template>
  </b-modal>
</template>
<script>
export default {
  props: {
    visible: Boolean,
    content: Object,
  },
  data() {
    return {
      modalVisible: this.visible,
    }
  },
  methods: {
    ok() {
      this.modalVisible = false
      this.$emit('confirm')
    },
  },
  watch: {
    visible(newValue) {
      this.modalVisible = newValue
    },
    modalVisible(newValue) {
      if (!newValue) {
        this.$emit('cancel')
      }
    },
  },
}
</script>
