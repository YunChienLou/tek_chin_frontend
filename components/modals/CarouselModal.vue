<template>
  <b-modal
    v-model="modalVisible"
    scrollable
    centered
    :title="mode === 'add' ? '新增輪播圖片' : '修改輪播圖片'"
  >
    <form ref="carouselform" @submit.stop.prevent="handleCarouselSubmit">
      <div v-if="carouselform.file && mode === 'edit'" class="my-3">
        圖片預覽:
        <img
          class="d-block img-fluid w-100"
          :src="getImageSrc(carouselform.file)"
          alt="Received Image"
          style="object-fit: contain; width: auto; height: 50vh"
        />
      </div>
      <b-form-group
        v-if="mode === 'add'"
        label="輪播圖片"
        label-for="image-input"
        :state="!carouselValid.imageError"
        :invalid-feedback="
          carouselValid.imageError ? carouselValid.imageError : '大小或格式錯誤'
        "
      >
        <b-form-file
          id="image-input"
          v-model="carouselform.file"
          accept=".jpg, .png"
          :max-size="2000 * 1024"
          :state="carouselValid.imageValid ? true : null"
          :feedback="carouselValid.imageValid ? 'valid' : null"
          placeholder="選擇或拖拉檔案...."
          @input="validResult()"
        ></b-form-file>
      </b-form-group>
      <b-form-group label="是否於前台顯示" label-for="switch">
        <b-form-checkbox id="switch" v-model="carouselform.enable" switch>
          {{ carouselform.enable ? '是' : '否' }}
        </b-form-checkbox>
      </b-form-group>
    </form>
    <template #modal-footer="{ cancel }">
      <b-button size="md" variant="info" @click="handleCarouselSubmit()">
        {{ mode === 'add' ? '新增' : '修改' }}
      </b-button>
      <b-button size="md" variant="danger" @click="cancel()"> 取消 </b-button>
    </template>
  </b-modal>
</template>
<script>
export default {
  name: 'CarouselModal',
  props: {
    initialShowModal: Boolean,
    initialCarousel: Object,
    mode: String,
  },
  data() {
    return {
      modalVisible: this.initialShowModal,
      carouselform: {
        enable: false,
        file: null,
        id: null,
      },
      carouselValid: {
        imageValid: false,
        imageError: '',
      },
    }
  },
  computed: {
    imagePreview() {
      if (this.carouselform.file && this.mode === 'add') {
        return this.createObjectURL(this.carouselform.file)
      } else if (this.carouselform.file && this.mode === 'edit') {
        return this.carouselform.file
      } else {
        return null
      }
    },
  },
  watch: {
    initialCarousel(newValue) {
      if (newValue != null) {
        this.carouselform.enable = newValue.enable
        this.carouselform.file = newValue.imageData
        this.carouselform.id = newValue.id
      }
    },
    initialShowModal(newValue) {
      this.modalVisible = newValue
    },
    modalVisible(newValue) {
      if (!newValue) {
        this.$emit('modalClosed')
        this.resetForm()
      }
    },
  },
  methods: {
    handleCarouselSubmit() {
      console.log('carouselSubmitted', this.carouselform)
      this.$emit('carouselSubmitted', this.carouselform)
      this.$emit('modalClosed')
      this.resetForm()
    },
    createObjectURL(file) {
      if (window.URL) {
        return window.URL.createObjectURL(file)
      } else if (window.webkitURL) {
        return window.webkitURL.createObjectURL(file)
      } else {
        return ''
      }
    },
    validateImage(image) {
      let _imageValid
      let _imageError
      if (!image) {
        _imageValid = false
        _imageError = '最少須上傳一張圖片'
      } else if (!['image/jpeg', 'image/png'].includes(image.type)) {
        _imageValid = false
        _imageError = '圖片格式錯誤. 只可以使用 JPEG 或是 PNG .'
      } else if (image.size > 2000000) {
        _imageValid = false
        _imageError = '圖片大小超過 2MB.'
      } else {
        _imageValid = true
        _imageError = ''
      }
      return {
        _imageValid,
        _imageError,
      }
    },
    validResult() {
      const { _imageValid, _imageError } = this.validateImage(
        this.carouselform.file
      )
      this.carouselValid.imageValid = _imageValid
      this.carouselValid.imageError = _imageError
    },
    resetForm() {
      // Reset form fields
      this.carouselform.file = null
      this.carouselform.enable = false
      // Reset validation errors if needed
      this.carouselValid.imageError = null
      this.carouselValid.imageValid = false
    },
  },
}
</script>
