import Background from '@components/Background';
import Taskbar from '@components/Taskbar';
import type React from 'react';
import { useEffect, useState } from 'react';
import { preloadImages } from '@utils/preload-image';

const App: React.FC = () => {
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        preloadImages()
            .then(() => setIsFinished(true))
            .catch(() => setIsFinished(true));
    }, []);

    return (
        <>
            {isFinished && (
                <div className="w-screen h-screen relative overflow-hidden select-none">
                    <Background />
                    <Taskbar />
                </div>
            )}
        </>
    );
};

export default App;
