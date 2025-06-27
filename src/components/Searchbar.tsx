import clsx from 'clsx';
import { VscSearch } from 'react-icons/vsc';
import SearchBarImg from '@assets/icons/search_bar_img.png';

const Searchbar: React.FC = () => {
    return (
        <div className={clsx('h-full', 'bg-white/85', 'w-85', 'flex', 'flex-row', 'items-center', 'justify-between')}>
            <div draggable="false" className="p-4">
                <VscSearch className="text-xl" />
            </div>
            <input
                className={clsx('h-full', 'align-middle', 'outline-none', 'grow', 'pr-1')}
                type="text"
                placeholder="Type here to search"
            />
            <img className={clsx('h-full w-full object-top object-cover')} draggable="false" src={SearchBarImg} />
        </div>
    );
};

export default Searchbar;
