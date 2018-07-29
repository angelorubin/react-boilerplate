export const imports = {
  'src/atoms/button/button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-atoms-button-button" */ 'src/atoms/button/button.mdx'),
}
