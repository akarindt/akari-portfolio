import icons from '@utils/preload-image';
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
        icon: icons.ThisPCIcon,
        shortcut: false,
        createElement: (instanceId) => (
            <FileExplorer
                instanceId={instanceId}
                folderName="This PC"
                path={['This PC']}
                pathDisplay="C:/"
                startIcon={<img className="p-1" src={icons.ThisPCIcon} />}
            >
                <QuickAccess />
            </FileExplorer>
        ),
    },
    {
        appId: 'user-folder',
        iconName: 'Projects',
        icon: icons.FolderOpenIcon,
        shortcut: false,
        createElement: (instanceId) => (
            <FileExplorer
                instanceId={instanceId}
                folderName="Projects"
                path={['Projects']}
                pathDisplay="C:/Users/AKARI/Desktop/Projects"
                startIcon={<img className="p-1" src={icons.FolderOpenIcon} />}
            >
                <Projects />
            </FileExplorer>
        ),
    },
    {
        appId: 'recycler-bin',
        iconName: 'Recycler Bin',
        icon: icons.RecyclerBinFullIcon,
        shortcut: false,
    },
    {
        appId: 'yt-music',
        iconName: 'YT Music',
        icon: icons.YtMusicIcon,
        shortcut: true,
        link: 'https://music.youtube.com/playlist?list=PL0D_ztGqMoBgO9_8vvvYg-LbnMXuA-TAp&feature=shared',
    },
    {
        appId: 'github-desktop',
        iconName: 'Github Desktop',
        icon: icons.GithubIcon,
        shortcut: true,
        link: 'https://github.com/akarindt/akari-portfolio',
    },
    {
        appId: 'winver',
        iconName: 'winver.exe',
        icon: icons.ExeIcon,
        shortcut: true,
        createElement: (instanceId) => <Winver instanceId={instanceId} />,
    },
];

export default appIconSettings;
