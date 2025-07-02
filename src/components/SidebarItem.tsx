type SidebarItemProps = {
    icon: string;
    label: string;
    isPinned?: boolean;
    pinIcon?: string;
    onClick?: () => void;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isPinned, pinIcon, onClick }) => {
    return (
        <div className="flex flex-row items-center justify-between hover w-full pl-5 pr-2 py-[1px] hover:bg-neutral-100">
            <div className="flex flex-row items-center gap-1 grow" onClick={onClick}>
                <div className="w-4 h-4">
                    <img loading="eager" className="w-full h-full" alt={`${label} icon`} src={icon} />
                </div>
                <div className="text-sm">{label}</div>
            </div>
            <div>
                {isPinned && pinIcon && (
                    <div className="w-4 h-4">
                        <img loading="eager" className="w-full h-full" alt="Pin icon" src={pinIcon} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SidebarItem;
