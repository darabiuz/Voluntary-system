export const schoolData = [
  {
    key: "1",
    schoolName: "Example School",
    year: "2020",
    batch: "本科批",
    subject: "文科",
    type: "普通类",
    minScore: "600",
    controlLine: "580"
  }
  // ...
]

export const majorData = [
  {
    key: "1",
    majorName: "计算机科学与技术",
    year: "2020",
    avgScore: "650",
    maxScore: "700",
    minScore: "600",
    minRank: "1000",
    batch: "本科批",
    subject: "文科"
  }
  // ...
]

export const schoolColumns = [
  {
    title: "学校名称",
    dataIndex: "schoolName",
    key: "schoolName"
  },
  {
    title: "年份",
    dataIndex: "year",
    key: "year"
  },
  {
    title: "录取批次",
    dataIndex: "admissionBatch",
    key: "admissionBatch"
  },
  {
    title: "文理科",
    dataIndex: "subject",
    key: "subject"
  },
  {
    title: "招生类型",
    dataIndex: "enrollmentType",
    key: "enrollmentType"
  },
  {
    title: "最低分/排名",
    dataIndex: "minScoreRank",
    key: "minScoreRank",
    render: (v: any, record: any) => {
      return `${record.minScore}/${record.minScoreRank}`
    }
  },
  {
    title: "省控线",
    dataIndex: "provincialLine",
    key: "provincialLine"
  }
]

export const majorColumns = [
  {
    title: "专业名称",
    dataIndex: "majorName",
    key: "majorName"
  },
  {
    title: "年份",
    dataIndex: "year",
    key: "year"
  },
  {
    title: "平均分",
    dataIndex: "averageScore",
    key: "averageScore"
  },
  {
    title: "最高分",
    dataIndex: "maxScore",
    key: "maxScore"
  },
  {
    title: "最低分",
    dataIndex: "minScore",
    key: "minScore"
  },
  {
    title: "最低位次",
    dataIndex: "minScoreRank",
    key: "minScoreRank"
  },
  {
    title: "录取批次",
    dataIndex: "admissionBatch",
    key: "admissionBatch"
  },
  {
    title: "文理科",
    dataIndex: "subject",
    key: "subject"
  }
]

const currentYear = new Date().getFullYear()
const lastThreeYears = [currentYear - 1, currentYear - 2, currentYear - 3]
export const yearsOptions = lastThreeYears.map((item) => {
  return {
    label: item,
    value: item
  }
})

export const subjectOptions = [
  {
    label: "文科",
    value: "文科"
  },
  {
    label: "理科",
    value: "理科"
  }
]

/** 院校详情-->院校简介-->martrix */
export const schoolInfoColumns = [
  {
    key: "place",
    label: "地理位置",
    transform: (_: any, data: any) => {
      return `${data.province}${data.countryName}`
    }
  },
  {
    key: "dualName",
    label: "双一流",
    transform: (item: any, _: any) => {
      return item === "双一流" ? "是" : "否"
    }
  },
  {
    key: "type",
    label: "院校类型"
  },
  {
    key: "natureName",
    label: "办学类型"
  },
  {
    key: "levelName",
    label: "办学等级"
  },
  {
    key: "feature",
    label: "办学特色",
    transform: (_: any, data: any) => {
      const { isNine, isTwo } = data
      const is985 = isNine === 1 ? "985" : ""
      const is211 = isTwo === 1 ? "211" : ""
      const featureObj = [is985, is211].filter((item) => item)
      return featureObj?.length ? featureObj.join(" | ") : "无"
    }
  }
]
