export function arrayToObject(array: string[]) {
  const keys = ["dual_class", "985", "211"]
  let obj: any = {}

  keys.forEach((key) => {
    if (array?.includes(key)) {
      obj[key] = 1
    }
  })

  return obj
}

export const getInitProvinceLine = (batch: string, category: string) => {
  switch (batch) {
    case "batch1":
      return 535
    case "batch2":
      return category === "文科" ? 470 : 440
    case "batch3":
      return category === "文科" ? 570 : 530
    case "batch4":
      return 150
    case "batch5":
      return 0
    default:
      return 0
  }
}
