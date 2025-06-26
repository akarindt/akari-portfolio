import React from 'react';

interface SidebarItemProps {
    icon: string;
    label: string;
    isPinned?: boolean;
    pinIcon?: string;
    onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isPinned, pinIcon, onClick }) => {
    return (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-1 grow" onClick={onClick}>
                <div className="w-4 h-4">
                    <img className="w-full h-full" src={icon} />
                </div>
                <div className="text-sm">{label}</div>
            </div>
            <div>
                {isPinned && pinIcon && (
                    <div className="w-4 h-4">
                        <img className="w-full h-full" src={pinIcon} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SidebarItem;
