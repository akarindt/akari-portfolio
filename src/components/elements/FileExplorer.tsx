import { Rnd } from 'react-rnd';
import { RxDividerVertical } from 'react-icons/rx';
import FileIcon1 from '@assets/icons/imageres_5367.ico';
import FolderIcon1 from '@assets/icons/imageres_5.ico';
import { TfiAngleDown } from 'react-icons/tfi';
import { FaArrowLeft, FaArrowRight, FaArrowUp, FaAngleDown } from 'react-icons/fa';
import QuestionIcon from '@assets/icons/imageres_99.ico';
import { VscSearch } from 'react-icons/vsc';
import DesktopIcon from '@assets/icons/shell32_35.ico';
import DownloadIcon from '@assets/icons/imageres_5303.ico';
import DocumentIcon from '@assets/icons/shell32_2.ico';
import PictureIcon from '@assets/icons/shell32_63008.ico';
import ThisPCIcon from '@assets/icons/imageres_109.ico';
import NetworkIcon from '@assets/icons/shell32_16782.ico';
import PinIcon from '@assets/icons/imageres_5100.ico';
import { useState, useEffect } from 'react';
import elementStore from '@stores/element';
import SidebarItem from '@components/SidebarItem';
import SearchInput from '@components/SearchInput';
import NavButton from '@components/NavButton';
import MenuTab from '@components/MenuTab';
import WindowControls from '@components/WindowControls';

function FileExplorer({
    children,
    folderName,
    startIcon,
    pathDisplay,
    path,
}: {
    children: React.ReactNode;
    folderName: string;
    startIcon: React.ReactNode;
    pathDisplay: string;
    path: string[];
}) {
    const eStore = elementStore();
    const [isAnimating, setIsAnimating] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    function handleClose(): void {
        setIsClosing(true);
        setTimeout(() => {
            eStore.setElement(null);
        }, 150);
    }

    return (
        <Rnd
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
        >
            <div
                className={`w-full h-full bg-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ${
                    isAnimating ? 'windows-animation-open' : ''
                } ${isClosing ? 'windows-animation-close' : ''}`}
            >
                <div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                            <div className="h-6 w-6">{startIcon}</div>
                            <RxDividerVertical className="text-neutral-500" />
                            <div className="h-6 w-6">
                                <img className="p-1" src={FileIcon1} />
                            </div>
                            <div className="h-6 w-6">
                                <img className="p-1" src={FolderIcon1} />
                            </div>
                            <RxDividerVertical className="text-neutral-500" />
                            <div className="text-sm text-black">{folderName}</div>
                        </div>{' '}
                        <WindowControls onClose={handleClose} />
                    </div>
                    <div className="flex flex-row justify-between items-center border-b border-neutral-300 cancel">
                        {' '}
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
                                <img src={QuestionIcon} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-2 my-1 px-1 cancel">
                        {' '}
                        <div className="flex py-1.5 gap-3">
                            <NavButton icon={<FaArrowLeft />} />
                            <NavButton icon={<FaArrowRight />} disabled={true} />
                            <NavButton icon={<FaAngleDown />} />
                            <NavButton icon={<FaArrowUp />} />
                        </div>
                        <div className="grow">
                            <SearchInput
                                placeholder={`${path.join(' > ')}`}
                                onFocus={(e) => {
                                    e.target.value = pathDisplay;
                                    e.target.select();
                                }}
                                onBlur={(e) => (e.target.value = '')}
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
                <div className="cancel h-[calc(100%-87px)] w-full flex flex-row">
                    <div className="w-[200px] pl-5 pt-4 pb-2 pr-2 border-r border-neutral-50 flex flex-col gap-1">
                        <SidebarItem icon={DesktopIcon} label="Desktop" isPinned={true} pinIcon={PinIcon} />
                        <SidebarItem icon={DownloadIcon} label="Downloads" isPinned={true} pinIcon={PinIcon} />
                        <SidebarItem icon={DocumentIcon} label="Documents" isPinned={true} pinIcon={PinIcon} />
                        <SidebarItem icon={PictureIcon} label="Pictures" isPinned={true} pinIcon={PinIcon} />
                        <SidebarItem icon={FolderIcon1} label="Projects" />
                        <SidebarItem icon={ThisPCIcon} label="This PC" />
                        <SidebarItem icon={NetworkIcon} label="Network" />
                    </div>
                    <div className="grow pt-4 px-5">{children}</div>
                </div>
                <div className="h-5 w-full bg-neutral-50 text-xs flex items-center px-2">30 items</div>
            </div>
        </Rnd>
    );
}

export default FileExplorer;
