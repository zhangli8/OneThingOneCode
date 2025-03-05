export function getPageParams<T extends Record<string, any>>(level = 1): T {
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - level]
  return (currentPage as any).options || {}
}
