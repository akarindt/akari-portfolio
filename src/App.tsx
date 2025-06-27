import Background from '@components/Background';
import Taskbar from '@components/Taskbar';
import type React from 'react';

const App: React.FC = () => {
    return (
        <div className="w-screen h-screen relative overflow-hidden select-none">
            <Background />
            <Taskbar />
        </div>
    );
};

export default App;
