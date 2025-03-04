
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/d2dWebsite-1.0.0/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/d2dWebsite-1.0.0/home?page=home",
    "route": "/d2dWebsite-1.0.0"
  },
  {
    "renderMode": 2,
    "route": "/d2dWebsite-1.0.0/services"
  },
  {
    "renderMode": 2,
    "route": "/d2dWebsite-1.0.0/home"
  },
  {
    "renderMode": 2,
    "route": "/d2dWebsite-1.0.0/resources"
  },
  {
    "renderMode": 2,
    "route": "/d2dWebsite-1.0.0/resource"
  },
  {
    "renderMode": 2,
    "route": "/d2dWebsite-1.0.0/aboutus"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25059, hash: '1a8e9c9f3bf4bfa59a557a59420b5a460fdc62d392b6393941adffb34cd9bad6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17981, hash: '41e964a2310816ff378a83fe118d79a96fbf900fe5345c6fc2bb4efe107c192e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 68576, hash: '848ca5261e65a852975f363d01494cb16964570c6a9e46f601cef681b3d2cae8', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'resources/index.html': {size: 60104, hash: '7dfeee79c7d8185476753d885c326ea896d9013f8345c07fb499d4e09fe8c76a', text: () => import('./assets-chunks/resources_index_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 55665, hash: '237c5ceacdcd01c725eae246da4e253dd095eaee4a49097df53e45809b648d59', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 61275, hash: '0560302a0cf2129f65ae628f107eb05ee6fb3b0028b1b31dbf189346f218d850', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'resource/index.html': {size: 61711, hash: '4bf75ecd40bcd76bcc74d8d2eaea5956948617fd753f0b52c31d1c47cbe2fee1', text: () => import('./assets-chunks/resource_index_html.mjs').then(m => m.default)},
    'styles-NIAV7JTM.css': {size: 11059, hash: 'l8zZ338iqlQ', text: () => import('./assets-chunks/styles-NIAV7JTM_css.mjs').then(m => m.default)}
  },
};
