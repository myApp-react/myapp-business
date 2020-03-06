import { IConfig, IPlugin } from 'umi-types'; // ref: https://umijs.org/config/

const plugins: IPlugin[] = [
  ['umi-plugin-antd-icon-config', {}],
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        immer: true,
        hmr: true,
      },
      dynamicImport: {
        webpackChunkName: true,
      },
      title: 'myapp-business',
      dll: true,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    },
  ],
];
const config: IConfig = {
  plugins,
  treeShaking: false,
  routes: [
    {
      path: '/user',
      component: '../layouts/PublicLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: '../layouts/PrimaryLayout',
          routes: [
            {
              path: '/',
              redirect: '/welcome',
              closable: false,
              level: '1',
            },
            {
              path: '/welcome',
              name: '首页',
              icon: 'smile',
              component: './welcome1',
              hideInMenu: true,
            },
            {
              name: '工作台',
              path: '/welcome1',
              component: './welcome1',
              hideInMenu: true,
            },
            {
              path: '/basicSet',
              name: '基础设置',
              icon: 'appstore',
              component: '../layouts/PublicLayout',
              level: '1',
              routes: [
                {
                  path: '/basicSet/info',
                  name: '基础资料',
                  level: '1',
                  routes: [
                    {
                      name: '自定义档案',
                      path: '/basicset/info/customfile',
                      component: './basicSettings/BasicInfo/CustomFile',
                    },
                    {
                      name: '枚举内容',
                      path: '/basicset/info/enumcontent',
                      component: './basicSettings/BasicInfo/EnumContent',
                    },
                    {
                      name: '节假日管理',
                      path: '/basicset/info/holiday',
                      component: './basicSettings/BasicInfo/Holiday',
                    },
                    {
                      name: '天气资料维护',
                      path: '/basicSet/info/weather',
                      component: './basicSettings/BasicInfo/weather',
                    },
                    {
                      name: '供应商管理',
                      path: '/basicset/info/supplier',
                      component: './basicSettings/BasicInfo/supplier',
                    },
                    {
                      name: '新增',
                      path: '/basicset/info/supplier/add',
                      component: './basicSettings/BasicInfo/supplier/Add',
                      hideInMenu: true,
                    },
                    {
                      name: '客流点位管理',
                      path: '/basicset/info/passenger',
                      component: './basicSettings/BasicInfo/passenger',
                    },
                  ],
                },
                {
                  name: '招商基础资料',
                  path: '/basicset/merchants',
                  component: './basicSettings/Merchants',
                },
                {
                  name: '财务基础资料',
                  path: '/basicset/financialInfo',
                  level: '1',
                  routes: [
                    {
                      name: '费用管理',
                      path: '/basicset/financialInfo/fee',
                      component: './basicSettings/FinancialInfo/fee',
                    },
                  ],
                },
                {
                  name: '全局业务参数设置',
                  path: '/basicset/globalparamssettings',
                  component: './basicSettings/GlobalParamsSettings',
                },
              ],
            },
            {
              path: '/groupcontrol',
              name: '集团管控',
              icon: 'appstore',
              component: '../layouts/PublicLayout',
              level: '1',
              routes: [
                {
                  name: '品牌库管理',
                  path: '/groupcontrol/BrandLibrary',
                  component: './GroupControl/BrandLibrary',
                },
              ],
            },
            {
              name: '招商管理',
              icon: 'appstore',
              path: '/merchants',
              component: './Merchants',
            },
            {
              name: '合同管理',
              icon: 'appstore',
              path: '/contract',
              component: './contract',
            },
            {
              name: '运营管理',
              icon: 'appstore',
              path: '/operation',
              component: './Operation',
            },
            {
              name: '财务管理',
              icon: 'appstore',
              path: '/finance',
              component: './Finance',
            },
            {
              name: '系统管理',
              icon: 'appstore',
              path: '/system',
              component: './system',
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  ignoreMomentLocale: true,
  disableRedirectHoist: true,
};
export default config;
