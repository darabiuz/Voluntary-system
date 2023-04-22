/** 将url的pathname转化为不存在空的字符串数组 */
export const splitUrlPaths = (url: string) => {
  const pathSegments = new URL(url).pathname
    .split("/")
    .filter((segment) => segment)
  return pathSegments
}
