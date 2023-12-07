export const data = JSON.parse("{\"key\":\"v-53fc0d51\",\"path\":\"/zh/foo/\",\"title\":\"测试1\",\"lang\":\"简体中文\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"zh/foo/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
