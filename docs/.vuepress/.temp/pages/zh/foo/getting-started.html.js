export const data = JSON.parse("{\"key\":\"v-43992fb2\",\"path\":\"/zh/foo/getting-started.html\",\"title\":\"test\",\"lang\":\"简体中文\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"zh/foo/getting-started.md\"}")

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
