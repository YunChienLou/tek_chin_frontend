<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div
        class="col-12 col-md-6 d-flex justify-content-center align-items-start mb-3"
      >
        <b-card class="w-100" style="height: 90vh">
          <b-card-header>內容管理 | 最新消息</b-card-header>
          <b-card-body style="height: 90%">
            <b-button
              v-b-modal.modal-add-post
              variant="outline-info"
              class="mb-2"
              @click="addPostHandler"
            >
              <b-icon icon="plus-square" aria-hidden="true"></b-icon>
              新增最新消息
            </b-button>
            <div class="overflow-auto" style="max-height: 100%">
              <div v-for="post in posts" :key="post.id">
                <PostCard
                  :post="post"
                  :mode="'edit'"
                  @editPost="editPostHandler"
                  @deletePost="openComfirmModal"
                />
              </div>
            </div>
          </b-card-body>
        </b-card>
      </div>
      <div
        class="col-12 col-md-6 d-flex justify-content-center align-items-start"
      >
        <b-card class="w-100" style="height: 100vh">
          <b-card-header>內容管理 | 輪播圖片</b-card-header>
          <b-card-body style="height: 90%">
            <b-button
              variant="outline-info"
              class="mb-2"
              @click.prevent="addCarouselHandler()"
            >
              <b-icon icon="plus-square" aria-hidden="true"></b-icon>
              新增輪播圖片
            </b-button>
            <div class="overflow-auto" style="max-height: 100%">
              <div v-for="carousel in carousels" :key="carousel.id">
                <CarouselEditor
                  :carousel="carousel"
                  :mode="'edit'"
                  @deleteCarousel="openComfirmModal"
                  @editCarousel="editCarouselHandler"
                />
              </div>
            </div>
          </b-card-body>
        </b-card>
      </div>
    </div>

    <b-modal
      id="modal-add-post"
      v-model="modalPost"
      scrollable
      centered
      :title="postModalMode === 'add' ? '新增最新消息' : '修改最新消息'"
      size="xl"
      @hidden="cancelModalPost"
    >
      <div class="mb-3">
        <label for="range-1">貼文標題: </label>
        <b-form-input
          v-model="postTitle"
          placeholder="輸入貼文標題"
        ></b-form-input>
      </div>
      <div class="mb-3">
        <label for="range-1">貼文內容: </label>
        <quill-editor
          v-model="postContent"
          :options="editorOptions"
          style="height: 500px"
        />
      </div>
      <template #modal-footer>
        <b-button size="md" variant="info" @click="submitPost"> 確定 </b-button>
        <b-button size="md" variant="danger" @click="cancelModalPost">
          取消
        </b-button>
      </template>
    </b-modal>

    <ConfirmModal
      :visible="modalConfirm"
      :content="confirm"
      @confirm="confirmHandler"
      @cancel="cancelCarousel"
    />

    <CarouselModal
      :mode="carouselModalMode"
      :initial-carousel="currentCarousel"
      :initial-show-modal="modalCarousel"
      @carouselSubmitted="submitCarousel"
      @modalClosed="
        () => {
          modalCarousel = false
        }
      "
    />
  </div>
</template>

<script>
import CarouselModal from '@/components/modals/CarouselModal.vue'
import ConfirmModal from '@/components/modals/ConfirmModal.vue'

export default {
  name: 'AdminPage',
  components: { CarouselModal, ConfirmModal },
  layout: 'manager',
  async asyncData(context) {
    const posts = await context.$axios.$get('post/query')
    const carousels = await context.$axios.$get('carousel/query')
    return { posts, carousels }
  },
  data() {
    return {
      modalCarousel: false,
      modalConfirm: false,
      modalPost: false,
      postModalMode: 'add',
      carouselModalMode: 'add',
      postContent: '',
      postTitle: '',
      postId: 0,
      postEnable: false,
      editorOptions: {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['clean'],
          ],
        },
      },
      confirm: {
        title: '',
        msg: '',
        subject: '',
      },
      currentCarousel: null,
      currentPost: null,
    }
  },
  methods: {
    async fetchPosts() {
      this.posts = await this.$axios.$get('post/query')
    },
    async fetchCarousels() {
      this.carousels = await this.$axios.$get('carousel/query')
    },
    addCarouselHandler(payload) {
      if (payload?.id != null) this.currentCarousel = payload
      this.modalCarousel = true
      this.carouselModalMode = 'add'
    },
    openComfirmModal(payload) {
      let isPost = payload.type === 'post' ? true : false
      this.confirm.title = isPost ? '刪除最新消息' : '刪除輪播圖片'
      this.confirm.msg =
        (isPost ? '是否要刪除最新消息ID: ' : '是否要刪除輪播圖片ID: ') +
        payload.id +
        ' ?'
      this.confirm.subject = isPost ? 'delete_post' : 'delete_carousel'
      if (isPost) {
        this.currentPost = payload
      } else {
        this.currentCarousel = payload
      }
      this.modalConfirm = true
    },
    addPostHandler() {
      this.postModalMode = 'add'
      this.modalPost = true
      this.postContent = ''
      this.postTitle = ''
    },
    editCarouselHandler(carousel) {
      this.carouselModalMode = 'edit'
      this.modalCarousel = true
      console.log('editCarousel: ', carousel)
      this.currentCarousel = carousel
    },
    editPostHandler(post) {
      this.postModalMode = 'edit'
      this.modalPost = true
      this.postContent = post.paragraph
      this.postTitle = post.title
      this.postId = post.id
    },
    deletePostHandler(postId) {
      this.posts = this.posts.filter((post) => post.id !== postId)
      this.modalPost = false
    },
    async submitCarousel(payload) {
      try {
        console.log('submitCarousel', payload)
        const formData = new FormData()
        formData.append('enable', payload.enable)
        formData.append('file', payload.file)
        if (this.carouselModalMode === 'add') {
          await this.$axios.$post('carousel/create', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          this.fetchCarousels() // Re-fetch the updated carousels
        } else {
          formData.append('carouselId', payload.id)
          await this.$axios.$post('carousel/updateCarousel', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          this.fetchCarousels() // Re-fetch the updated carousels
        }
      } catch (error) {
        console.error('Error: ', error)
      }
      this.currentCarousel = null
    },
    async submitPost() {
      const formData = new FormData()
      formData.append('title', this.postTitle)
      formData.append('paragraph', this.postContent)
      formData.append('enable', true)
      formData.append('file', null)
      try {
        let response
        if (this.postModalMode === 'add') {
          response = await this.$axios.$post('post/create', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          this.posts.push(response) // Add new post to posts array
        } else {
          formData.append('postId', this.postId)
          response = await this.$axios.$post('post/updatePost', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          const index = this.posts.findIndex((post) => post.id === this.postId)
          this.$set(this.posts, index, response) // Update the existing post
        }
        this.modalPost = false
        this.postContent = ''
        this.postTitle = ''
        this.postId = 0
        this.fetchPosts() // Re-fetch the updated posts
      } catch (error) {
        console.error('Error: ', error)
      }
    },
    cancelModalPost() {
      this.modalPost = false
      this.postContent = ''
      this.postTitle = ''
    },
    cancelCarousel() {
      this.currentCarousel = null
      this.modalConfirm = false
    },
    async confirmHandler() {
      switch (this.confirm.subject) {
        case 'delete_carousel': {
          await this.$axios.$post(`carousel/delete/${this.currentCarousel.id}`)
          this.currentCarousel = null
          this.fetchCarousels() // Re-fetch the updated carousels
          break
        }
        case 'delete_post': {
          await this.$axios.$post(`post/delete/${this.currentPost.id}`)
          this.currentPost = null
          this.fetchPosts()
          break
        }
        default: {
          break
        }
      }
    },
  },
}
</script>

<style scoped>
.item-row {
  border: 1px solid #dee2e6; /* Add borders between rows */
  padding: 10px;
}

.selection-box {
  display: flex;
  align-items: center;
}

.form-check-input {
  margin-right: 0; /* Remove default margin */
}

.ql-editor span {
  line-height: initial !important; /* Ensures that the line-height isn't changed by Quill's span tags */
}
</style>
