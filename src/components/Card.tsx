
import {Card} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-regular-svg-icons'

export const CustomCard = ({children, title}: {children: any, title: string}) => {
    return (
        <Card title={title} className={'p-0 border-[#dedede]'}>
            <section className="px-4 py-2">
                {children}
            </section>
            <section className="border-t border-[#f0f0f0] px-4 py-2 flex justify-between items-center">
                <div className={'h-6 w-6 bg-blue-300 rounded-full'}></div>
                <div>3 <FontAwesomeIcon icon={faMessage} /></div>
            </section>
        </Card>
    )
}
