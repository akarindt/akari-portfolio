import Bg from '../assets/bg/bg_img.jpg';
import ContextMenu from './ContextMenu';
import Layout from './Layout';

function Background() {
    return (
        <div className="w-screen h-screen relative select-none">
            <img
                draggable="false"
                src={Bg}
                className="select-none w-full h-full object-cover absolute top-0 left-0 z-[0]"
            />
            <Layout />
            <ContextMenu />
        </div>
    );
}

export default Background;
