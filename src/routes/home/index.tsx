/** 系统home首页 */
import { Layout, Typography, Image, Carousel } from "antd"
import styles from "./index.module.scss"
import { guideList } from "./constant"
import { GuideCard } from "./component"
const { Content } = Layout
const { Title } = Typography

const Home: React.FC = function () {
  return (
    <>
      {/* 内容 */}
      <Content className={styles.contentWrap}>
        <Title level={2} className={styles.title}>
          四川省高考志愿填报预测系统
        </Title>
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
    </>
  )
}
export default Home
