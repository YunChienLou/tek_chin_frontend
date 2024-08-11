<template>
  <div class="my-4 container text-start">
    <div class="row flex-grow-1 align-items-center">
      <div class="col-sm-8 mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14456.024811144795!2d121.5354637!3d25.0677789!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a95634669a85%3A0x6b1f772e7b78310c!2z5b63576k6LK_5piT6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1678198464469!5m2!1szh-TW!2stw"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="col-sm-4">
        <div class="my-5">
          <h2 class="fw-bold my-3 border-bottom border-danger border-5">
            資訊列表
          </h2>
          <div class="row">
            <dt class="col-5 pr-0">公司地址</dt>
            <dd class="col-7">
              <a
                href="https://www.google.com/maps?ll=25.067779,121.535464&z=14&t=m&hl=zh-TW&gl=TW&mapclient=embed&cid=7719019327859994892"
                >中山區建國北路三段113巷31弄15號1樓, Taipei, Taiwan</a
              >
            </dd>
            <dt class="col-5 pr-0">Line 官方帳號</dt>
            <dd class="col-7">@TCT.COMTW</dd>
            <dt class="col-5 pr-0">公司電話</dt>
            <dd class="col-7">
              <a href="tel:+886-2-25153105">02-2515-3105</a>
            </dd>
          </div>
        </div>
        <div class="my-5">
          <h2 class="fw-bold my-3 border-bottom border-danger border-5">
            營業時間
          </h2>
          <div class="row">
            <dt class="col-4">星期一 ~ 五</dt>
            <dd class="col-8">上午 08:30 ~ 下午 18:30</dd>
            <dt class="col-4">星期六</dt>
            <dd class="col-8">上午 08:30 ~ 下午 17:00</dd>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPages',
  setup() {
    const click_copy_string = (event) => {
      console.log(event)
    }

    return {
      click_copy_string,
    }
  },
}
</script>

<style>
iframe {
  width: 100%;
  height: 60vh;
}
</style>
