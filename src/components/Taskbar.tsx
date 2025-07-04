import { FaWindows } from 'react-icons/fa';
import Searchbar from '@components/Searchbar';
import TaskbarIcon from '@components/TaskbarIcon';
import icons from '@utils/preload-image';
import { PiChatCenteredLight } from 'react-icons/pi';
import { SlArrowDown } from 'react-icons/sl';
import { useEffect, useState } from 'react';
import { explorerStore } from '@stores/explorer';
import dayjs from 'dayjs';
import clsx from 'clsx';

const Taskbar: React.FC = () => {
    const [time, setTime] = useState<Date>(new Date());
    const exStore = explorerStore();

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);

    return (
        <div className="absolute bottom-0 left-0 z-[20] w-full select-none">
            <div className="w-full h-13 bg-white/85">
                <div className="h-full flex flex-row">
                    <div className="h-full w-full items-center flex flex-row">
                        <TaskbarIcon>
                            <FaWindows className="text-2xl group-hover:text-blue-500" />
                        </TaskbarIcon>
                        <div className="h-full flex items-center">
                            <Searchbar />
                        </div>
                        <TaskbarIcon>
                            <img loading="eager" className="h-5" alt="Task View Icon" src={icons.TaskViewIcon} />
                        </TaskbarIcon>
                        <TaskbarIcon>
                            <img loading="eager" className="h-8" alt="Store Icon" src={icons.StoreIcon} />
                        </TaskbarIcon>
                        <TaskbarIcon
                            customClasses={clsx(
                                exStore.explorers.includes('folder') && 'bg-white border-b-[3px] border-blue-500'
                            )}
                        >
                            <img
                                loading="eager"
                                className="h-8"
                                alt="File Explorer Icon"
                                src={icons.FileExplorerIcon}
                            />
                        </TaskbarIcon>
                        <TaskbarIcon>
                            <img loading="eager" className="h-8" alt="Edge Icon" src={icons.EdgeIcon} />
                        </TaskbarIcon>
                    </div>
                    <div className={clsx('flex', 'flex-row', 'justify-center')}>
                        <div className="flex flex-row items-center">
                            <TaskbarIcon customClasses={clsx('w-max', 'px-2')}>
                                <SlArrowDown className="text-md" />
                            </TaskbarIcon>
                            <TaskbarIcon customClasses={clsx('w-max', 'px-2')}>
                                <button className="text-black text-sm">ENG</button>
                            </TaskbarIcon>
                            <TaskbarIcon customClasses={clsx('w-max', 'px-2')}>
                                <img loading="eager" className="h-5" alt="Wifi Icon" src={icons.WifiIcon} />
                            </TaskbarIcon>
                        </div>
                        <TaskbarIcon customClasses={clsx('flex', 'flex-col', 'items-center', 'px-2', 'w-max')}>
                            <div className="text-sm">{dayjs(time).format('HH:mm A')}</div>
                            <div className="text-sm">{dayjs(time).format('DD-MM-YYYY')}</div>
                        </TaskbarIcon>
                        <TaskbarIcon customClasses={clsx('w-max', 'px-3')}>
                            <PiChatCenteredLight className="text-2xl" />
                        </TaskbarIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Taskbar;
