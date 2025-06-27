import clsx from 'clsx';

type MenuTabProps = {
    label: string;
    active?: boolean;
    onClick?: () => void;
};

const MenuTab: React.FC<MenuTabProps> = ({ label, active = false, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={clsx(
                'text-sm',
                'p-0.5',
                'w-18',
                'text-center',
                'cursor-pointer',
                active && 'bg-blue-500 text-white',
                !active && 'hover:bg-neutral-100'
            )}
        >
            {label}
        </div>
    );
};

export default MenuTab;
