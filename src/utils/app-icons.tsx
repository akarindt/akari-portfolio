import ThisPCIcon from '@assets/icons/imageres_109.ico';
import FolderIcon from '@assets/icons/shell32_264.ico';
import RecycleBinIcon from '@assets/icons/imageres_54.ico';
import YTMusicIcon from '@assets/icons/yt_music.svg';
import GithubIcon from '@assets/icons/github_icon.png';
import WinverIcon from '@assets/icons/imageres_15.ico';
import Winver from '@components/elements/Winver';
import type { ReactNode } from 'react';
import FileExplorer from '@components/elements/FileExplorer';
import Projects from '@components/elements/Projects';
import QuickAccess from '@components/elements/QuickAccess';

export type AppIconSettings = {
    appId: string;
    iconName: string;
    icon: string;
    shortcut: boolean;
    createElement?: (instanceId: string) => ReactNode;
    link?: string;
};

const appIconSettings: AppIconSettings[] = [
    {
        appId: 'this-pc',
        iconName: 'This PC',
        icon: ThisPCIcon,
        shortcut: false,
        createElement: (instanceId) => (
            <FileExplorer
                instanceId={instanceId}
                folderName="This PC"
                path={['This PC']}
                pathDisplay="C:/"
                startIcon={<img className="p-1" src={ThisPCIcon} />}
            >
                <QuickAccess />
            </FileExplorer>
        ),
    },
    {
        appId: 'user-folder',
        iconName: 'Projects',
        icon: FolderIcon,
        shortcut: false,
        createElement: (instanceId) => (
            <FileExplorer
                instanceId={instanceId}
                folderName="Projects"
                path={['Projects']}
                pathDisplay="C:/Users/AKARI/Desktop/Projects"
                startIcon={<img className="p-1" src={FolderIcon} />}
            >
                <Projects />
            </FileExplorer>
        ),
    },
    {
        appId: 'recycler-bin',
        iconName: 'Recycler Bin',
        icon: RecycleBinIcon,
        shortcut: false,
    },
    {
        appId: 'yt-music',
        iconName: 'YT Music',
        icon: YTMusicIcon,
        shortcut: true,
        link: 'https://music.youtube.com/playlist?list=PL0D_ztGqMoBgO9_8vvvYg-LbnMXuA-TAp&feature=shared',
    },
    {
        appId: 'github-desktop',
        iconName: 'Github Desktop',
        icon: GithubIcon,
        shortcut: true,
        link: 'https://github.com/akarindt/akari-portfolio',
    },
    {
        appId: 'winver',
        iconName: 'winver.exe',
        icon: WinverIcon,
        shortcut: true,
        createElement: (instanceId) => <Winver instanceId={instanceId} />,
    },
];

export default appIconSettings;
