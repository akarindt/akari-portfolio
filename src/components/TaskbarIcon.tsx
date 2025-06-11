function TaskbarIcon({ children }: { children: React.ReactNode }) {
    return <div className="hover:bg-white/90 h-full flex items-center justify-center w-15">{children}</div>;
}

export default TaskbarIcon;
