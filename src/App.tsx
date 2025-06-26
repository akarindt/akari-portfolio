import Background from '@components/Background';
import Taskbar from '@components/Taskbar';

function App() {
    return (
        <div className="w-screen h-screen relative overflow-hidden select-none">
            <Background />
            <Taskbar />
        </div>
    );
}

export default App;
