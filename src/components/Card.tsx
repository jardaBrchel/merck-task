import {Card} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-regular-svg-icons'

type CustomCardProps = {
    title: string;
    children: React.ReactNode;
}

export const CustomCard = ({children, title}: CustomCardProps) => {
    return (
        <Card title={title} className={'p-0 border-[#dedede]'}>
            <section className="px-4 py-2">
                {children}
            </section>
            <section className="border-t border-[#f0f0f0] px-4 py-2 flex justify-between items-center">
                <img src="/avatar.png" className={'h-6 w-6 bg-blue-300 rounded-full'} alt=""/>
                <div>3 <FontAwesomeIcon icon={faMessage} /></div>
            </section>
        </Card>
    )
}
