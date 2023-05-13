/** 将url的pathname转化为不存在空的字符串数组 */
export const splitUrlPaths = (url: string) => {
  const pathSegments = new URL(url).pathname
    .split("/")
    .filter((segment) => segment)
  return pathSegments
}

export function filterEmptyValues(obj: { [key: string]: any }) {
  let newObj: { [key: string]: any } = {}

  Object.keys(obj).forEach((key) => {
    const value = obj[key]

    // 如果值为null或undefined，不包含在新对象中
    if (value == null) return

    // 如果值为数组，只有在数组非空时才包含在新对象中
    if (Array.isArray(value)) {
      if (value.length > 0) newObj[key] = value
      return
    }

    // 如果值为对象，只有在对象非空时才包含在新对象中
    if (typeof value === "object") {
      if (Object.keys(value).length > 0) newObj[key] = value
      return
    }

    // 如果值为字符串，只有在字符串非空时才包含在新对象中
    if (typeof value === "string") {
      if (value.trim() !== "") newObj[key] = value
      return
    }

    // 如果值为其他类型，包含在新对象中
    newObj[key] = value
  })

  return newObj
}
