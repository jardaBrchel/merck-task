import { Layout, Space, Col, Row } from 'antd';
import {CustomCard} from '../components/Card';
import {PieChart} from '../components/PieChart';
import {LineChart} from '../components/LineChart';
import {ActionBar} from '../components/ActionBar';

const { Header, Content } = Layout;

export default function Index() {
    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
                <Header>
                    <Row>
                        <Col><span style={{fontSize: '16px'}}>App title</span></Col>
                    </Row>
                </Header>
                <Content>
                    <ActionBar />
                    <Row gutter={[32, 16]}>
                        <Col span={12}>
                            <CustomCard title={'Covid variants [%]'}>
                                <PieChart />
                            </CustomCard>
                        </Col>
                        <Col span={12}>
                            <CustomCard title={'Hospital cases weekly'}>
                                <LineChart />
                            </CustomCard>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Space>
    );
}
