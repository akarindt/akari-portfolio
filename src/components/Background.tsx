import Bg from '../assets/bg/bg_img.jpg';

function Background() {
    return <img src={Bg} className="w-full h-full object-cover absolute top-0 left-0 z-[0]" />;
}

export default Background;
