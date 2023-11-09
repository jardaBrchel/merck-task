import {Layout, Space, Col, Row} from 'antd';
import {CustomCard} from '../components/Card';
import {PieChart, PieChartId} from '../components/PieChart';
import {LineChart, LineChartId} from '../components/LineChart';
import {ActionBar} from '../components/ActionBar';
import {trpc} from '../utils/trpc';

const {Header, Content} = Layout;

export default function Index() {
    const likesData = trpc.getLikes.useQuery();
    const setLike = trpc.putLikes.useMutation();

    const handleCardLike = (id: string, value: boolean) => {
        setLike.mutate({id, value});
    }

    return (
        <Space direction="vertical" style={{width: '100%'}} size={[0, 48]}>
            <Layout>
                <Header>
                    <Row>
                        <Col><span style={{fontSize: '16px'}}>App title</span></Col>
                    </Row>
                </Header>
                <Content>
                    <ActionBar/>
                    <Row gutter={[32, 16]}>
                        <Col span={12}>
                            <CustomCard
                                onLike={(value: boolean) =>
                                    handleCardLike(PieChartId, value)
                                }
                                isLiked={likesData.data?.[PieChartId] ?? false}
                                comments={3}
                                title={'Covid variants [%]'}>
                                <PieChart/>
                            </CustomCard>
                        </Col>
                        <Col span={12}>
                            <CustomCard
                                onLike={(value: boolean) =>
                                    handleCardLike(LineChartId, value)
                                }
                                isLiked={likesData.data?.[LineChartId] ?? false}
                                comments={3}
                                title={'Hospital cases weekly'}>
                                <LineChart/>
                            </CustomCard>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Space>
    );
}
