import {Col, Row} from 'antd';
import {ButtonType, CustomButton} from './Button';

export const ActionBar = () => {
    return (
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
    )
}
