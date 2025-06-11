import { FaWindows } from 'react-icons/fa';
import Searchbar from './Searchbar';
import TaskbarIcon from './TaskbarIcon';
import EdgeIcon from '../assets/w11Icons/applications/edge.ico';
import StoreIcon from '../assets/w11Icons/applications/store3.ico';
import TaskView from '../assets/icons/task-view.svg';
import FileExplorerIcon from '../assets/icons/imageres_1023.ico';

function Taskbar() {
    return (
        <div className="absolute bottom-0 left-0 z-[10] w-full">
            <div className="w-full h-13 bg-white/85">
                <div className="h-full flex flex-row">
                    <div className="h-full w-full items-center flex flex-row">
                        <TaskbarIcon>
                            <FaWindows className="text-2xl" />
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
                </div>
            </div>
        </div>
    );
}

export default Taskbar;
