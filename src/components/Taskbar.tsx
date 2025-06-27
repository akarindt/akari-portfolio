import { FaWindows } from 'react-icons/fa';
import Searchbar from '@components/Searchbar';
import TaskbarIcon from '@components/TaskbarIcon';
import EdgeIcon from '@assets/w11Icons/applications/edge.ico';
import StoreIcon from '@assets/w11Icons/applications/store3.ico';
import TaskView from '@assets/icons/task-view.svg';
import FileExplorerIcon from '@assets/icons/imageres_5325.ico';
import WifiIcon from '@assets/icons/imageres_6024.ico';
import { PiChatCenteredLight } from 'react-icons/pi';
import { SlArrowDown } from 'react-icons/sl';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import clsx from 'clsx';

const Taskbar: React.FC = () => {
    const [time, setTime] = useState<Date>(new Date());

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
                            <img className="h-5" src={TaskView} />
                        </TaskbarIcon>
                        <TaskbarIcon>
                            <img className="h-8" src={StoreIcon} />
                        </TaskbarIcon>
                        <TaskbarIcon>
                            <img className="h-8" src={FileExplorerIcon} />
                        </TaskbarIcon>
                        <TaskbarIcon>
                            <img className="h-8" src={EdgeIcon} />
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
                                <img className="h-5" src={WifiIcon} />
                            </TaskbarIcon>
                        </div>
                        <TaskbarIcon customClasses={clsx('flex', 'flex-col', 'items-center', 'px-2')}>
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
