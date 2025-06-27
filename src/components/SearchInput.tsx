import type { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

type SearchInputProps = {
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
} & InputHTMLAttributes<HTMLInputElement>;

const SearchInput: React.FC<SearchInputProps> = ({ icon, iconPosition = 'right', className, ...inputProps }) => {
    return (
        <div className={clsx('relative', className)}>
            <input
                type="text"
                className={clsx(
                    'outline-0',
                    'w-full',
                    'text-sm',
                    'border',
                    'border-neutral-300',
                    'h-6',
                    'cursor-text',
                    iconPosition === 'right' ? 'pr-6 pl-2' : 'pl-6 pr-2'
                )}
                {...inputProps}
            />
            {icon && (
                <div
                    className={clsx('text-xs', 'absolute', 'top-1.5', iconPosition === 'right' ? 'right-2' : 'left-2')}
                >
                    {icon}
                </div>
            )}
        </div>
    );
};

export default SearchInput;
