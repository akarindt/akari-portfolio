import React from 'react';
import Bg from '../assets/bg/bg_img.jpg';
import contextMenuStore from '../stores/context-menu';
import ContextMenu from './ContextMenu';
import Layout from './Layout';

function Background() {
    const cmStore = contextMenuStore();
    const contextRef = React.useRef<HTMLDivElement>(null);

    function handleContextMenu(event: React.MouseEvent) {
        event.preventDefault();
        cmStore.setOpen(false);
        const currentTarget = event.currentTarget as HTMLDivElement;
        const rect = currentTarget.getBoundingClientRect();
        const x = Math.round(((event.clientX - rect.left) / rect.width) * 100);
        const y = Math.round(((event.clientY - rect.top) / rect.height) * 100);

        cmStore.setPosition(x, y);

        const timeout = setTimeout(() => {
            cmStore.setOpen(true);
            clearTimeout(timeout);
        }, 100);
    }

    function handleOnClick(event: React.MouseEvent<HTMLDivElement | MouseEvent>) {
        if (contextRef.current && !contextRef.current?.contains(event.target as Node)) {
            cmStore.setOpen(false);
        }
    }

    return (
        <div className="w-screen h-screen relative select-none">
            <img
                onClick={handleOnClick}
                onContextMenu={handleContextMenu}
                draggable="false"
                src={Bg}
                className="select-none w-full h-full object-cover absolute top-0 left-0 z-[0]"
            />
            <Layout />
            <ContextMenu ref={contextRef} />
        </div>
    );
}

export default Background;
