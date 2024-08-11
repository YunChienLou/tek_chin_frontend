<template>
  <div class="card w-100 my-5">
    <img
      v-if="carousel.imageData"
      class="card-img-top d-block img-fluid w-100"
      width="1024"
      height="480"
      :src="getImageSrc(carousel.imageData ?? '')"
      alt="Received Image"
    />
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <div class="w-75"></div>
        <div v-if="isEditMode" class="d-flex flex-column">
          <b-button
            variant="outline-info"
            class="mb-2"
            @click="editHandler(carousel)"
          >
            <b-icon icon="pen" aria-hidden="true"></b-icon> 修改
          </b-button>
          <b-button
            variant="outline-danger"
            class="mb-2"
            @click="deleteHandler(carousel)"
          >
            <b-icon icon="trash" aria-hidden="true"></b-icon> 刪除
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    carousel: Object,
    mode: {
      type: String,
      default: 'edit', // Set the default value for mode
    },
  },
  computed: {
    isEditMode() {
      return this.mode === 'edit'
    },
  },
  methods: {
    deleteHandler(payload) {
      this.$emit('deleteCarousel', { type: 'carousel', ...payload })
    },
    editHandler(payload) {
      this.$emit('editCarousel', { type: 'carousel', ...payload })
    },
  },
}
</script>
