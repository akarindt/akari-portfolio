import ShortcutIcon from '../assets/icons/imageres_163.ico';
import appStore from '../stores/app';
import type { AppIconSettings } from '../utils/app-icons';
import type { MouseEvent } from 'react';

function AppIcon({ appId, icon, iconName, shortcut, link }: AppIconSettings) {
    const state = appStore();

    function handleContextMenu(event: MouseEvent) {
        event.preventDefault();
    }

    function handleDoubleClick() {
        if (link) {
            window.open(link, '_blank');
        }
        state.setSelectedApp('');
    }

    function handleClick() {
        state.setSelectedApp(appId);
    }

    return (
        <div
            data-appid={appId}
            onContextMenu={handleContextMenu}
            onDoubleClick={handleDoubleClick}
            onClick={handleClick}
            draggable="false"
            className={`hover:cursor-pointer ${
                state.selectedApp === appId && 'bg-white/30'
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
                    state.selectedApp !== appId && 'truncate'
                } drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-sm text-white text-center mt-1`}
            >
                {iconName}
            </div>
        </div>
    );
}

export default AppIcon;
