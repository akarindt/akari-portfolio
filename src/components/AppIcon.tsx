import ShortcutIcon from '@assets/icons/imageres_163.ico';
import appStore from '@stores/app';
import contextMenuStore from '@stores/context-menu';
import elementStore from '@stores/element';
import type { AppIconSettings } from '@utils/app-icons';
import type { MouseEvent } from 'react';

const AppIcon: React.FC<AppIconSettings> = ({ appId, icon, iconName, shortcut, link, createElement }) => {
    const aStore = appStore();
    const cmStore = contextMenuStore();
    const eStore = elementStore();

    const handleContextMenu = (event: MouseEvent) => {
        event.preventDefault();
    };

    const handleDoubleClick = () => {
        if (link) {
            window.open(link, '_blank');
        }

        if (createElement) {
            const instanceId = eStore.setElement(appId, null);
            eStore.removeElement(instanceId);
            eStore.setElement(appId, createElement(instanceId));
        }

        aStore.setSelectedApp('');
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
                    alt={iconName}
                    className="h-full w-full absolute top-0 left-0 z-[1]"
                />
                {shortcut && (
                    <img
                        draggable="false"
                        className="w-[40px] h-[40px] absolute bottom-0 left-0 z-[2]"
                        src={ShortcutIcon}
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
