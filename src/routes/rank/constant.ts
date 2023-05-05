import { generateMap } from "@help/index"
import { TableColumnProps } from "antd"
import { ColumnType, ColumnsType } from "antd/es/table"

export const columns: ColumnType<any>[] = [
  {
    title: "排名",
    dataIndex: "rank",
    key: "rank",
    sorter: true,
    fixed: "left"
  },
  {
    title: "学校名称",
    dataIndex: "schoolName",
    key: "schoolName",
    fixed: "left"
  },
  { title: "省市", dataIndex: "province", key: "province" },
  { title: "学校类型", dataIndex: "schoolType", key: "schoolType" },
  { title: "总得分", dataIndex: "totalScore", key: "totalScore", sorter: true },
  {
    title: "办学层次得分",
    dataIndex: "educationLevelScore",
    key: "educationLevelScore",
    sorter: true
  },
  {
    title: "学科水平得分",
    dataIndex: "disciplineScore",
    key: "disciplineScore",
    sorter: true
  },
  {
    title: "办学资源得分",
    dataIndex: "resourceScore",
    key: "resourceScore",
    sorter: true
  },
  {
    title: "师资规模与结构得分",
    dataIndex: "facultyStructureScore",
    key: "facultyStructureScore",
    sorter: true
  },
  {
    title: "人才培养得分",
    dataIndex: "talentTrainingScore",
    key: "talentTrainingScore",
    sorter: true
  },
  {
    title: "科学研究得分",
    dataIndex: "researchScore",
    key: "researchScore",
    sorter: true
  },
  {
    title: "服务社会得分",
    dataIndex: "socialServiceScore",
    key: "socialServiceScore",
    sorter: true
  },
  {
    title: "高端人才得分",
    dataIndex: "topTalentScore",
    key: "topTalentScore",
    sorter: true
  },
  {
    title: "重大项目与成果得分",
    dataIndex: "majorProjectsScore",
    key: "majorProjectsScore",
    sorter: true
  },
  {
    title: "国际竞争力得分",
    dataIndex: "internationalCompetitivenessScore",
    key: "internationalCompetitivenessScore",
    sorter: true
  }
]

export enum rankTypeEnum {
  School = 1,
  Major
}

const rankTypeMap = {
  [rankTypeEnum.School]: "院校排行",
  [rankTypeEnum.Major]: "热门专业排行"
}

export const tabItems = generateMap(rankTypeMap)
