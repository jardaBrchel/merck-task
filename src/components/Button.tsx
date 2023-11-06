import {faArrowAltCircleDown, faFileLines, faBarChart} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Badge } from 'antd';

export const CustomButton = ({label, icon, badge}: {label: string, icon?: string, badge?: string}) => {
    const ButtonIcon = {
        'download': faArrowAltCircleDown,
        'notes': faFileLines,
        'filter': faBarChart,
    }

    return (
        <button className={'bg-white text-black px-4 py-2 rounded-md flex items-center'}>
            <span>{label}</span>
            {badge ? <Badge count={99} overflowCount={9} style={{ backgroundColor: '#019875', fontSize: '10px' }} className={'pl-2'} /> : null}
            {icon ? <FontAwesomeIcon icon={ButtonIcon[icon]} color={'#019875'} className={'pl-2'}/> : null}
        </button>
    )
};
