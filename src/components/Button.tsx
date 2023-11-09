import {faArrowAltCircleDown, faFileLines, faBarChart} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Badge, Button, Space} from 'antd';

export enum ButtonType {
    Download = 'download',
    Notes = 'notes',
    Filter = 'filter',
}

const ButtonIcon = {
    'download': faArrowAltCircleDown,
    'notes': faFileLines,
    'filter': faBarChart,
}

const mainColor = '#019875'

type CustomButtonProps = {
    label: string;
    icon?: ButtonType;
    badge?: number;
}

export const CustomButton = ({label, icon, badge}: CustomButtonProps) => {
    return (
        <Button type="default" className={'bg-white text-black px-4 py-2 rounded-md flex items-center border-0 shadow-none'}>
            <Space size="small" align="center">
                <span>{label}</span>
                {badge ? <Badge count={99} overflowCount={9} style={{backgroundColor: mainColor, fontSize: '10px'}}
                                className={'pl-1'}/> : null}
                {icon ? <FontAwesomeIcon icon={ButtonIcon[icon]} color={mainColor} className={'pl-1'}/> : null}
            </Space>
        </Button>
    )
};
