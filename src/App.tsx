import Background from './components/Background';
import Taskbar from './components/Taskbar';

function App() {
    return (
        <div className="w-screen h-screen relative">
            <Background />
            <Taskbar />
        </div>
    );
}

export default App;
