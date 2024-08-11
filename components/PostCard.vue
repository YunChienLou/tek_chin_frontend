<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-if="post" class="card w-100 my-5">
    <img
      v-if="post.imgSrc"
      class="card-img-top"
      :src="getImageSrc(post.imgSrc)"
      alt="Received Image"
    />
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <div class="w-75">
          <h5 class="card-title">{{ post.title }}</h5>
          <div v-html="post.paragraph"></div>
          <p class="card-text">
            <small class="text-muted"
              >最後更新 : {{ formatDate(post.updateDate) }}</small
            >
          </p>
        </div>
        <div v-if="isEditMode" class="d-flex flex-column">
          <b-button variant="outline-info" class="mb-2" @click="editHandler">
            <b-icon icon="pen" aria-hidden="true"></b-icon> 修改
          </b-button>

          <b-button
            variant="outline-danger"
            class="mb-2"
            @click="deleteHandler"
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
    post: {
      type: Object,
      default: () => ({
        title: '',
        paragraph: '',
        imgSrc: '',
        updateDate: '',
      }),
    },
    mode: {
      type: String,
      default: 'display', // Set the default value for mode
    },
  },
  computed: {
    isEditMode() {
      return this.mode === 'edit'
    },
  },
  methods: {
    deleteHandler() {
      this.$emit('deletePost', { type: 'post', ...this.post })
    },
    editHandler() {
      this.$emit('editPost', this.post)
    },
  },
}
</script>
