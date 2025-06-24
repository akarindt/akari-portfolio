import clsx from 'clsx';

function TaskbarIcon({ children, customClasses }: { children: React.ReactNode; customClasses?: string }) {
    return (
        <div
            draggable="false"
            className={clsx(
                'select-none',
                'group',
                'hover:bg-white/90',
                'h-full',
                'flex',
                'items-center',
                'justify-center',
                'select-none',
                customClasses?.includes('w-') ? '' : 'min-w-16',
                customClasses
            )}
        >
            {children}
        </div>
    );
}

export default TaskbarIcon;
