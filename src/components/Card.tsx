import {Card} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faHeart } from '@fortawesome/free-regular-svg-icons'

type CustomCardProps = {
    title: string;
    children: React.ReactNode;
    onLike: (isLiked: boolean) => void;
    isLiked: boolean;
    comments: number;
}

export const CustomCard = ({children, title, onLike, isLiked, comments}: CustomCardProps) => {
    return (
        <Card title={title} className={'p-0 border-[#dedede]'}>
            <section className="px-4 py-2">
                {children}
            </section>
            <section className="border-t border-[#f0f0f0] px-4 py-2 flex justify-between items-center">
                <img src="/avatar.png" className={'h-6 w-6 bg-blue-300 rounded-full'} alt=""/>
                <section className={'flex justify-between items-center gap-3'}>
                    <FontAwesomeIcon
                        icon={faHeart}
                        onClick={() => onLike(!isLiked)}
                        style={{color: isLiked ? '#f56565' : '#111111'}}
                        className={`cursor-pointer`}/>
                    <div>{comments} <FontAwesomeIcon icon={faMessage} /></div>
                </section>

            </section>
        </Card>
    )
}
