import BgImg from '@assets/bg/bg_img.jpg';
import EdgeIcon from '@assets/icons/edge.ico';
import GithubIcon from '@assets/icons/github_icon.png';
import ThisPCIcon from '@assets/icons/imageres_109.ico';
import DesktopIcon from '@assets/icons/imageres_110.ico';
import ExeIcon from '@assets/icons/imageres_15.ico';
import ShortcutIcon from '@assets/icons/imageres_163.ico';
import PictureIcon from '@assets/icons/imageres_21.ico';
import FolderIcon from '@assets/icons/imageres_5.ico';
import PinIcon from '@assets/icons/imageres_5100.ico';
import DownloadFolderIcon from '@assets/icons/imageres_5303.ico';
import FileExplorerIcon from '@assets/icons/imageres_5325.ico';
import FileCheckIcon from '@assets/icons/imageres_5367.ico';
import RecyclerBinFullIcon from '@assets/icons/imageres_54.ico';
import WifiIcon from '@assets/icons/imageres_6024.ico';
import InfoIcon from '@assets/icons/imageres_81.ico';
import QuestionIcon from '@assets/icons/imageres_99.ico';
import SearchBarImg from '@assets/icons/search_bar_img.png';
import NetworkIcon from '@assets/icons/shell32_16782.ico';
import DocumentIcon from '@assets/icons/shell32_2.ico';
import FolderOpenIcon from '@assets/icons/shell32_264.ico';
import Desktop2Icon from '@assets/icons/shell32_35.ico';
import PictureFullIcon from '@assets/icons/shell32_63008.ico';
import StoreIcon from '@assets/icons/store3.ico';
import TaskViewIcon from '@assets/icons/task-view.svg';
import Windows10Logo from '@assets/icons/Windows_10_Logo.png';
import YtMusicIcon from '@assets/icons/yt_music.svg';
import QRImg from '@assets/icons/frame.png';

const ICONS = {
    BgImg,
    EdgeIcon,
    GithubIcon,
    ThisPCIcon,
    DesktopIcon,
    ExeIcon,
    ShortcutIcon,
    PictureIcon,
    FolderIcon,
    PinIcon,
    DownloadFolderIcon,
    FileExplorerIcon,
    FileCheckIcon,
    RecyclerBinFullIcon,
    WifiIcon,
    InfoIcon,
    QuestionIcon,
    SearchBarImg,
    NetworkIcon,
    DocumentIcon,
    FolderOpenIcon,
    Desktop2Icon,
    PictureFullIcon,
    StoreIcon,
    TaskViewIcon,
    Windows10Logo,
    YtMusicIcon,
    QRImg,
};

export const preloadImages = (): Promise<void[]> => {
    const imagePromises = Object.values(ICONS).map((src) => {
        return new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => reject();
        });
    });
    return Promise.all(imagePromises);
};

export default ICONS;
