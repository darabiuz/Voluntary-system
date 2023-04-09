// 整合enum与map
export const generateMap = (mapInfo: { [key: string]: any }) => {
  if (!mapInfo && !Object.keys(mapInfo).length) return []
  return Object.keys(mapInfo)?.map((item) => ({
    key: item,
    label: mapInfo?.[item]
  }))
}
