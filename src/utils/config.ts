export default {
  siteName: 'umi-dva',
  copyright: 'umi-dva  © 2018 daolidewoniu',
  logoPath: '/logo.svg',
  apiPrefix: '/api/v1',//配置项目中接口的前缀
  fixedHeader: true, // 在Primary布局下，页面滚动时是否固定顶部。 sticky primary layout header

  /* Layout configuration, specify which layout to use for route. */
  layouts: [
    {
      name: 'primary',
      include: [/.*/],
      exlude: [/(\/(en|zh))*\/login/],
    },
  ],
}
