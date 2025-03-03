
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/d2dWebsite/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/d2dWebsite/home?page=home",
    "route": "/d2dWebsite"
  },
  {
    "renderMode": 2,
    "route": "/d2dWebsite/services"
  },
  {
    "renderMode": 2,
    "route": "/d2dWebsite/home"
  },
  {
    "renderMode": 2,
    "route": "/d2dWebsite/resources"
  },
  {
    "renderMode": 2,
    "route": "/d2dWebsite/resource"
  },
  {
    "renderMode": 2,
    "route": "/d2dWebsite/aboutus"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25053, hash: '2495c30956d63875eda148e3ae12544787ae74c8a621cd977e92808c0794fcb0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17975, hash: 'b06408a88804cf7d14e94c2141fdc2ce412dc3cd64d6588099cd2b072d54d94a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 68570, hash: '66ea262c722423cb3922dad92542d703f33a813e35a0c62e616411c45741aeca', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'resource/index.html': {size: 61707, hash: 'dbb6f6f18d2b438e9421dabdba5109455647b3dd6e48322e193ae5d3b960c903', text: () => import('./assets-chunks/resource_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 61269, hash: '9f0aca2e9749e573a841b9c97591d0f8602e9e149d442d323cc3cc72bb3fd87c', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 55659, hash: '4eac3f47fed9bca60762360261cf76b90391fe43e7d210ccf9df721564ec4ff3', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'resources/index.html': {size: 60096, hash: '943ec047ca64595f59226b60aef761a7f3a5c11df18c4f04150a344b56dbbff7', text: () => import('./assets-chunks/resources_index_html.mjs').then(m => m.default)},
    'styles-NIAV7JTM.css': {size: 11059, hash: 'l8zZ338iqlQ', text: () => import('./assets-chunks/styles-NIAV7JTM_css.mjs').then(m => m.default)}
  },
};
