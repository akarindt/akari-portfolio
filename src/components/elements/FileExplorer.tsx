import { Rnd } from 'react-rnd';
import { RxDividerVertical } from 'react-icons/rx';
import { TfiAngleDown } from 'react-icons/tfi';
import { FaArrowLeft, FaArrowRight, FaArrowUp, FaAngleDown } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc';
import icons from '@utils/preload-image';
import { useState, useEffect, useRef } from 'react';
import elementStore from '@stores/element';
import SidebarItem from '@components/SidebarItem';
import SearchInput from '@components/SearchInput';
import NavButton from '@components/NavButton';
import MenuTab from '@components/MenuTab';
import WindowControls from '@components/WindowControls';
import { explorerStore } from '@stores/explorer';

type FileExplorerProps = {
    children: React.ReactNode;
    folderName: string;
    startIcon: React.ReactNode;
    pathDisplay: string;
    path: string[];
    id?: string;
    instanceId: string;
    totalItems: number;
};

const FileExplorer: React.FC<FileExplorerProps> = ({
    children,
    folderName,
    startIcon,
    pathDisplay,
    path,
    instanceId,
    totalItems,
}) => {
    const eStore = elementStore();
    const exStore = explorerStore();
    const [isAnimating, setIsAnimating] = useState(true);
    const [isClosing, setIsClosing] = useState(false);
    const [show, setShow] = useState(true);
    const ref = useRef<Rnd>(null);

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            eStore.removeElement(instanceId);
        }, 150);
        exStore.removeExplorer('folder');
    };

    return (
        <Rnd
            className={`${eStore.getCurrentFocusedElement(instanceId) ? 'z-[100]' : ''}`}
            ref={ref}
            style={{
                cursor: 'context-menu',
            }}
            default={{
                x: 200,
                y: 30,
                width: 1200,
                height: 600,
            }}
            minHeight={200}
            minWidth={400}
            cancel=".cancel"
            onDragStart={() => eStore.focusElement(instanceId)}
        >
            <div
                onClick={() => eStore.focusElement(instanceId)}
                id={instanceId}
                className={`w-full h-full bg-white windows-10-shadow ${isAnimating ? 'windows-animation-open' : ''} ${
                    isClosing ? 'windows-animation-close' : ''
                } ${eStore.getCurrentFocusedElement(instanceId) ? 'border border-blue-300' : ''}`}
            >
                <div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                            <div className="h-6 w-6">{startIcon}</div>
                            <RxDividerVertical className="text-neutral-500" />
                            <div className="h-6 w-6">
                                <img loading="eager" className="p-1" alt="File Check Icon" src={icons.FileCheckIcon} />
                            </div>
                            <div className="h-6 w-6">
                                <img loading="eager" className="p-1" alt="Folder Icon" src={icons.FolderIcon} />
                            </div>
                            <RxDividerVertical className="text-neutral-500" />
                            <div
                                className={`text-sm text-black ${
                                    eStore.getCurrentFocusedElement(instanceId) ? 'text-black' : 'text-neutral-400'
                                }`}
                            >
                                {folderName}
                            </div>
                        </div>
                        <WindowControls onClose={handleClose} />
                    </div>
                    <div className="flex flex-row justify-between items-center border-b border-neutral-300 cancel">
                        <div className="flex flex-row items-center">
                            <MenuTab label="File" active={true} />
                            <MenuTab label="Home" />
                            <MenuTab label="Share" />
                            <MenuTab label="View" />
                        </div>
                        <div className="flex flex-row gap-4 items-center px-3.5">
                            <div className="text-neutral-500 text-xs">
                                <TfiAngleDown />
                            </div>
                            <div className="w-4 h-4">
                                <img loading="eager" alt="Question Icon" src={icons.QuestionIcon} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-2 my-1 px-1 cancel">
                        <div className="flex py-1.5 gap-3">
                            <NavButton icon={<FaArrowLeft />} />
                            <NavButton icon={<FaArrowRight />} disabled={true} />
                            <NavButton icon={<FaAngleDown />} />
                            <NavButton icon={<FaArrowUp />} />
                        </div>
                        <div className="grow relative">
                            {show && <div className="w-6 h-6 absolute top-0 left-0">{startIcon}</div>}
                            <SearchInput
                                placeholder={`    > ${path.join(' > ')}`}
                                onFocus={(e) => {
                                    setShow(false);
                                    e.target.value = pathDisplay;
                                    e.target.select();
                                }}
                                onBlur={(e) => {
                                    e.target.value = '';
                                    setShow(true);
                                }}
                            />
                        </div>{' '}
                        <div className="w-[250px]">
                            <SearchInput
                                placeholder={`Search ${folderName}`}
                                icon={<VscSearch />}
                                iconPosition="right"
                            />
                        </div>
                    </div>
                </div>
                <div className="cancel h-[calc(100%-107px)]">
                    <div className="w-full flex flex-row h-full">
                        <div className="w-[200px] h-[100%-87px] overflow-x-scroll pt-4 pb-2 border-r border-neutral-50 flex flex-col gap-1">
                            <SidebarItem
                                icon={icons.Desktop2Icon}
                                label="Desktop"
                                isPinned={true}
                                pinIcon={icons.PinIcon}
                            />
                            <SidebarItem
                                icon={icons.DownloadFolderIcon}
                                label="Downloads"
                                isPinned={true}
                                pinIcon={icons.PinIcon}
                            />
                            <SidebarItem
                                icon={icons.DocumentIcon}
                                label="Documents"
                                isPinned={true}
                                pinIcon={icons.PinIcon}
                            />
                            <SidebarItem
                                icon={icons.PictureFullIcon}
                                label="Pictures"
                                isPinned={true}
                                pinIcon={icons.PinIcon}
                            />
                            <SidebarItem icon={icons.FolderIcon} label="Projects" />
                            <SidebarItem icon={icons.ThisPCIcon} label="This PC" />
                            <SidebarItem icon={icons.NetworkIcon} label="Network" />
                        </div>
                        <div className="grow pt-5 pl-2 overflow-x-scroll">{children}</div>
                    </div>
                    <div className=" h-5 w-full bg-neutral-50 text-xs flex items-center px-2">{totalItems} items</div>
                </div>
            </div>
        </Rnd>
    );
};

export default FileExplorer;
