import Vue from 'vue'
export const seoConfig = {
  '/': {
    title: '德群貿易-首頁',
    meta: [
      {
        hid: 'description',
        property: 'description',
        content:
          '歐洲車正廠/OEM零件,奧迪Audi,保時捷Porche,福斯Volkswagen,標誌Peugeot,雪鐵龍citroen,斯柯達Škoda,汽車零件供應',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '歐洲車正廠/OEM零件,奧迪Audi,保時捷Porche,福斯Volkswagen,標誌Peugeot,雪鐵龍citroen,斯柯達Škoda,汽車零件供應',
      },
    ],
  },
  '/News': {
    title: '德群貿易-最新消息',
    meta: [
      {
        hid: 'description',
        property: 'description',
        content:
          '本公司成立至今已有20餘年，為專業進口歐洲汽車零件貿易商。銷售各歐系車品牌Volkswagen、Audi、Porsche、SKODA、BMW、Peugeot、Citroen等正廠零件及OEM零件，供應全車系的零配件至全台零件商及保修廠。銷售眾多汽車零件知名大牌，例：ZF、HELLA、VALEO、BOSCH、TRW、VDO、MEYLE...等。',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '本公司成立至今已有20餘年，為專業進口歐洲汽車零件貿易商。銷售各歐系車品牌Volkswagen、Audi、Porsche、SKODA、BMW、Peugeot、Citroen等正廠零件及OEM零件，供應全車系的零配件至全台零件商及保修廠。銷售眾多汽車零件知名大牌，例：ZF、HELLA、VALEO、BOSCH、TRW、VDO、MEYLE...等。',
      },
    ],
  },
  '/About': {
    title: '德群貿易-公司沿革',
    meta: [
      {
        hid: 'description',
        property: 'description',
        content:
          '歐洲車正廠/OEM零件,奧迪Audi,保時捷Porche,福斯Volkswagen,標誌Peugeot,雪鐵龍citroen,斯柯達Škoda,汽車零件供應',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '歐洲車正廠/OEM零件,奧迪Audi,保時捷Porche,福斯Volkswagen,標誌Peugeot,雪鐵龍citroen,斯柯達Škoda,汽車零件供應',
      },
    ],
  },
  '/Contact': {
    title: '德群貿易-聯絡方式',
    meta: [
      {
        hid: 'description',
        property: 'description',
        content:
          '公司地址:中山區建國北路三段113巷31弄15號1樓, Taipei, Taiwan,公司電話:02-2515-3105,' +
          'Line:官方帳號@TCT.COMTW。營業時間:星期一 ~ 五:上午 08:30 ~ 下午 18:30,星期六:上午 08:30 ~ 下午 17:00,星期日:公休',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '公司地址:中山區建國北路三段113巷31弄15號1樓, Taipei, Taiwan,公司電話:02-2515-3105,' +
          'Line:官方帳號@TCT.COMTW。營業時間:星期一 ~ 五:上午 08:30 ~ 下午 18:30,星期六:上午 08:30 ~ 下午 17:00,星期日:公休',
      },
    ],
  },
}
/**
 * 在 layout/default 中设置 head
 */
export function setSeoHead() {
  const vm = this
  if (!(vm instanceof Vue)) throw new Error('需要再vue組件中使用')
  return seoConfig[vm.$route.path]
}
const seoRouteList = Object.keys(seoConfig)
/**
 * 在 nuxt.config.js 中设置 sitemap
 */
export const seoSitemap = {
  hostname: 'https://www.teck-chin.com.tw/',
  path: '/sitemap.xml',
  cacheTime: 24 * 60 * 60 * 1000,
  // gzip: true,
  defaults: {
    changefreq: 'daily',
    priority: 1,
    lastmod: new Date(),
  },
  // 只有匹配到的项目 生成 sitemap
  filter({ routes }) {
    return routes.filter((route) => seoRouteList.includes(route.url))
  },
}
