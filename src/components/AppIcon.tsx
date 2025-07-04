import icons from '@utils/preload-image';
import appStore from '@stores/app';
import contextMenuStore from '@stores/context-menu';
import elementStore from '@stores/element';
import type { AppIconSettings } from '@utils/app-icons';
import type { MouseEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { explorerStore } from '@stores/explorer';

const AppIcon: React.FC<AppIconSettings> = ({ appId, icon, iconName, shortcut, link, createElement, explorer }) => {
    const aStore = appStore();
    const cmStore = contextMenuStore();
    const eStore = elementStore();
    const exStore = explorerStore();

    const handleContextMenu = (event: MouseEvent) => {
        event.preventDefault();
    };

    const handleDoubleClick = () => {
        if (link) {
            window.open(link, '_blank');
        }

        if (createElement) {
            const instanceId = uuidv4();
            eStore.setElement(appId, createElement(instanceId), instanceId);
        }

        aStore.setSelectedApp('');
        exStore.addExplorer(explorer);
    };

    const handleClick = () => {
        if (cmStore.isOpen) {
            cmStore.setOpen(false);
        }
        aStore.setSelectedApp(appId);
    };

    return (
        <div
            data-appid={appId}
            onContextMenu={handleContextMenu}
            onDoubleClick={handleDoubleClick}
            onClick={handleClick}
            draggable="false"
            className={`${
                aStore.selectedApp === appId && 'bg-white/30'
            } hover:bg-white/30 flex flex-col items-center justify-center p-1`}
        >
            <div draggable="false" className="h-[50px] w-[50px] relative">
                <img
                    src={icon}
                    draggable="false"
                    loading="eager"
                    alt={iconName}
                    className="h-full w-full absolute top-0 left-0 z-[1]"
                />
                {shortcut && (
                    <img
                        draggable="false"
                        loading="eager"
                        alt="Shortcut indicator"
                        className="w-[40px] h-[40px] absolute bottom-0 left-0 z-[2]"
                        src={icons.ShortcutIcon}
                    />
                )}
            </div>
            <div
                draggable="false"
                className={`w-[80px] ${
                    aStore.selectedApp !== appId && 'truncate'
                } drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-sm text-white text-center mt-1`}
            >
                {iconName}
            </div>
        </div>
    );
};

export default AppIcon;
