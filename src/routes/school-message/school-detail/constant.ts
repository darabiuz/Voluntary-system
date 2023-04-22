// 您需要实现 getSchoolDetails() 函数来获取学校和专业的相关数据
// 这里我们只是用一些示例数据来说明如何渲染表格
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
    key: "minScoreRank"
  },
  {
    title: "省控线",
    dataIndex: "provincialControlLine",
    key: "provincialControlLine"
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
    dataIndex: "minRank",
    key: "minRank"
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
    value: "liberal"
  },
  {
    label: "理科",
    value: "science"
  }
]
