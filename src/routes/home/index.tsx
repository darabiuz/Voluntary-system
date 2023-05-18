/** 系统home首页 */
import { Layout, Image, Carousel } from "antd"
import styles from "./index.module.scss"
import { guideList } from "./constant"
import { GuideCard } from "./component"
import EasyWrapper from "@components/easy-wrapper"
import BlockTitle from "@components/block-title"
const { Content } = Layout
import Img1 from "../../assets/home-bg-1.jpeg"
import Img2 from "../../assets/home-bg-2.jpg"

const Home: React.FC = function () {
  return (
    <>
      {/* 内容 */}
      <EasyWrapper>
        <Content>
          <BlockTitle content="四川省高考志愿填报预测系统" />
          <Carousel autoplay>
            <div>
              <Image src={Img1} height={400} width={1400} />
            </div>
            <div>
              <Image src={Img2} height={400} width={1400} />
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
