
// accDetails
// bigScreenCopy
// bussOp
// safetyOp
// selfHelpDetails
// subBranch ???
// webSite ???
// webSiteOp ???

// <!-- pc_page_1 ???
// pc_page_2 ??? -->

// <!-- bigScreenList -->
// <!-- operating -->

账户详情
shanghai/accDetails
大屏列表
shanghai/bigScreenCopy
业务运营
shanghai/bussOp
运营数字化
shanghai/operating
安全运营
shanghai/safetyOp
自主详情
shanghai/selfHelpDetails
支行
shanghai/subBranch
网点运营(日)
shanghai/webSite
网点运营(月)
shanghai/webSiteOp
PC管理页1
shanghai/pc_page_1
PC管理页2
shanghai/pc_page_2

// router/index.js
children: [
  {
    path: "/shanghai/accDetails",
    name: "accDetails",
    component: "accDetails",
    meta: {
      title: "账户详情",
      icon: "el-icon-goods"
    }
  },
  {
    path: "/shanghai/bigScreenCopy",
    name: "bigScreenCopy",
    component: "bigScreenCopy",
    meta: {
      title: "大屏列表",
      icon: "el-icon-goods"
    }
  },
  {
    path: "/shanghai/bussOp",
    name: "bussOp",
    component: "bussOp",
    meta: {
      title: "业务运营",
      icon: "el-icon-goods"
    }
  },
  {
    path: "/shanghai/operating",
    name: "operating",
    component: "operating",
    meta: {
      title: "运营数字化",
      icon: "el-icon-goods"
    }
  },
  {
    path: "/shanghai/safetyOp",
    name: "safetyOp",
    component: "safetyOp",
    meta: {
      title: "安全运营",
      icon: "el-icon-goods"
    }
  },
  {
    path: "/shanghai/selfHelpDetails",
    name: "selfHelpDetails",
    component: "selfHelpDetails",
    meta: {
      title: "自主详情",
      icon: "el-icon-goods"
    }
  },
  {
    path: "/shanghai/subBranch",
    name: "subBranch",
    component: "subBranch",
    meta: {
      title: "支行",
      icon: "el-icon-goods"
    }
  },
  {
    path: "/shanghai/webSite",
    name: "webSite",
    component: "webSite",
    meta: {
      title: "网点运营(日)",
      icon: "el-icon-goods"
    }
  },
  {
    path: "/shanghai/webSiteOp",
    name: "webSiteOp",
    component: "webSiteOp",
    meta: {
      title: "网点运营(月)",
      icon: "el-icon-goods"
    }
  },
  {
    path: "/shanghai/pc_page_1",
    name: "pc_page_1",
    component: "pc_page_1",
    meta: {
      title: "PC管理页1",
      icon: "el-icon-goods"
    }
  },
  {
    path: "/shanghai/pc_page_2",
    name: "pc_page_2",
    component: "pc_page_2",
    meta: {
      title: "PC管理页2",
      icon: "el-icon-goods"
    }
  },
]

// Layout => 菜单配置
children: [
  { label: "账户详情", route: "shanghai/accDetails" },
  { label: "大屏列表", route: "shanghai/bigScreenCopy" },
  { label: "业务运营", route: "shanghai/bussOp" },
  { label: "运营数字化", route: "shanghai/operating" },
  { label: "安全运营", route: "shanghai/safetyOp" },
  { label: "自主详情", route: "shanghai/selfHelpDetails" },
  { label: "支行", route: "shanghai/subBranch" },
  { label: "网点运营(日)", route: "shanghai/webSite" },
  { label: "网点运营(月)", route: "shanghai/webSiteOp" },
  { label: "PC管理页1", route: "shanghai/pc_page_1" },
  { label: "PC管理页2", route: "shanghai/pc_page_2" }
]

