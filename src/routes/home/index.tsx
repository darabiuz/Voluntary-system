/** 系统home首页 */
import { Layout, Typography, Image, Carousel } from "antd"
import styles from "./index.module.scss"
import { guideList } from "./constant"
import { GuideCard } from "./component"
import EasyWrapper from "@components/easy-wrapper"
import BlockTitle from "@components/block-title"
const { Content } = Layout

const Home: React.FC = function () {
  return (
    <>
      {/* 内容 */}
      <EasyWrapper>
        <Content>
          <BlockTitle content="四川省高考志愿填报预测系统" />
          <Carousel autoplay>
            <div>
              <Image src="https://via.placeholder.com/1920x600" />
            </div>
            <div>
              <Image src="https://via.placeholder.com/1920x600" />
            </div>
          </Carousel>
          <div className={styles.siteLayoutContent}>
            <GuideCard guideList={guideList} />
          </div>
        </Content>
      </EasyWrapper>
    </>
  )
}
export default Home
