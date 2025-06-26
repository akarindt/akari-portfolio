import React from 'react';
import { TfiClose, TfiLayoutLineSolid, TfiLayoutWidthFull } from 'react-icons/tfi';

interface WindowControlsProps {
    onClose?: () => void;
    onMinimize?: () => void;
    onMaximize?: () => void;
}

const WindowControls: React.FC<WindowControlsProps> = ({ onClose, onMinimize, onMaximize }) => {
    return (
        <div className="flex flex-row">
            <button onClick={onMinimize} className="hover:bg-neutral-200 py-2 px-4 flex items-center justify-center">
                <TfiLayoutLineSolid className="text-xs" />
            </button>
            <button onClick={onMaximize} className="hover:bg-neutral-200 py-2 px-4 flex items-center justify-center">
                <TfiLayoutWidthFull className="text-xs" />
            </button>
            <button
                onClick={onClose}
                className="hover:bg-red-500 hover:text-white py-2 px-4 flex items-center justify-center"
            >
                <TfiClose className="text-xs" />
            </button>
        </div>
    );
};

export default WindowControls;
