import React from 'react';
import clsx from 'clsx';

interface NavButtonProps {
    icon: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, onClick, disabled = false }) => {
    return (
        <div
            onClick={disabled ? undefined : onClick}
            className={clsx(
                'text-sm',
                disabled ? 'text-neutral-400' : 'text-neutral-600 hover:text-black cursor-pointer'
            )}
        >
            {icon}
        </div>
    );
};

export default NavButton;
