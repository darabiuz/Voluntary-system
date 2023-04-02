/** 系统主页面 */
import { Layout, Menu, Typography, Image, Carousel } from "antd"
import { UserOutlined } from "@ant-design/icons"
import styles from "./index.module.scss"
import { menuList, guideList } from "./constant"
import { GuideCard } from "./component"
const { Header, Content, Footer } = Layout
const { Title } = Typography

const Home: React.FC = function () {
  return (
    <>
      <Layout className="layout">
        {/* 首部 */}
        <Header className={styles.header}>
          <Menu items={menuList} theme="dark" mode="horizontal" />
          <UserOutlined className={styles.signIcon} />
        </Header>
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
        {/* 尾部 */}
        <Footer style={{ textAlign: "center" }}>
          高考志愿填报系统 ©2023 保留所有权利
        </Footer>
      </Layout>
    </>
  )
}
export default Home
