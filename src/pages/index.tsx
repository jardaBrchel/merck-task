import { Layout, Space, Col, Row } from 'antd';
import {CustomCard} from '../components/Card';
import {ButtonType, CustomButton} from '../components/Button';
import { trpc } from '@/utils/trpc';

const { Header, Content } = Layout;

export default function Index() {
    const chartData = trpc.getChartData.useQuery();

    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
                <Header>
                    <Row>
                        <Col><span style={{fontSize: '16px'}}>App title</span></Col>
                    </Row>
                </Header>
                <Content>
                    <Row className={'pb-[20px]'}>
                        <Col span={24} className={'flex justify-between items-center'}>
                            <h1 className={'text-xl'}>Page title</h1>
                            <section className={'flex gap-4'}>
                                <CustomButton label="Export to PDF" icon={ButtonType.Download} />
                                <CustomButton label="Notes (3)" icon={ButtonType.Notes} />
                                <CustomButton label="Filter" badge={14} icon={ButtonType.Filter} />
                            </section>
                        </Col>
                    </Row>
                    <Row gutter={[32, 16]}>
                        <Col span={12}>
                            <CustomCard title={'Chart title'}>
                                <p className={'text-red-400'}>Card content</p>
                            </CustomCard>
                        </Col>
                        <Col span={12}>
                            <CustomCard title={'Chart title'}>
                                <p className={'text-red-400'}>Card content</p>
                            </CustomCard>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Space>
    );
}
