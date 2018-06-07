const menuList = [{
  name: '首页',
  path: '/home'
},{
  name: '新闻',
  path: '/news/newsCenter',
  children: [
    {
      path: '/news/newsCenter',
      name: '新闻中心'
    },
    {
      path: '/news/official_notice',
      name: '官方公告'
    },
    {
      path: '/news/industry_dynamics',
      name: '行业动态'
    },
    {
      path: '/news/international_dynamics',
      name: '国际动态'
    }
  ]
},{
  name: '系统',
  path: '/system',
  children: [
    {
      path: '/newsCenter/newsCenter',
      name: '系统介绍'
    },
    {
      path: '/newsCenter/official_notice',
      name: '基准站分布'
    },
    {
      path: '/newsCenter/industry_dynamics',
      name: '国家数据综合处理系统'
    },
    {
      path: '/newsCenter/international_dynamics',
      name: '监测评估（月报）'
    },
    {
      path: '/newsCenter/international_dynamics',
      name: '官方下载'
    }
  ]
},{
  name: '应用',
  path: '/application',
  children: [
    {
      path: '/newsCenter/newsCenter',
      name: '交通'
    },
    {
      path: '/newsCenter/official_notice',
      name: '测绘'
    },
    {
      path: '/newsCenter/industry_dynamics',
      name: '气象'
    },
    {
      path: '/newsCenter/international_dynamics',
      name: '地震'
    },
    {
      path: '/newsCenter/international_dynamics',
      name: '国土资源'
    },
    {
      path: '/newsCenter/international_dynamics',
      name: '高精度民用'
    }
  ]
},{
  name: '政策支持',
  path: '/help',
  children: [
    {
      path: '/newsCenter/newsCenter',
      name: '标准'
    },
    {
      path: '/newsCenter/official_notice',
      name: '政策法规'
    },
    {
      path: '/newsCenter/industry_dynamics',
      name: '知识产权'
    }
  ]
},{
  name: '特色内容',
  path: '/resource',
  children: [
    {
      path: '/newsCenter/newsCenter',
      name: '北斗科普'
    },
    {
      path: '/newsCenter/official_notice',
      name: '北斗图片'
    },
    {
      path: '/newsCenter/industry_dynamics',
      name: '北斗视频'
    },
    {
      path: '/newsCenter/international_dynamics',
      name: '兵器介绍'
    }
  ]
},{
  name: '帮助',
  path: '/help',
  children: [
    {
      path: '/newsCenter/newsCenter',
      name: '常见问题'
    },
    {
      path: '/newsCenter/official_notice',
      name: '联系我们'
    },
    {
      path: '/newsCenter/industry_dynamics',
      name: '友情链接'
    }
  ]
}];
export default menuList
