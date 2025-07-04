import icons from '@utils/preload-image';
import Winver from '@components/elements/Winver';
import type { ReactNode } from 'react';
import FileExplorer from '@components/elements/FileExplorer';
import Projects from '@components/elements/Projects';
import QuickAccess from '@components/elements/QuickAccess';
import projects from './projects';

export type AppIconSettings = {
    appId: string;
    iconName: string;
    icon: string;
    shortcut: boolean;
    createElement?: (instanceId: string) => ReactNode;
    link?: string;
    explorer: string;
};

const appIconSettings: AppIconSettings[] = [
    {
        appId: 'this-pc',
        iconName: 'This PC',
        icon: icons.ThisPCIcon,
        shortcut: false,
        createElement: (instanceId) => (
            <FileExplorer
                totalItems={0}
                instanceId={instanceId}
                folderName="This PC"
                path={['This PC']}
                pathDisplay="C:/"
                startIcon={<img loading="eager" className="p-1" alt="This PC Icon" src={icons.ThisPCIcon} />}
            >
                <QuickAccess />
            </FileExplorer>
        ),
        explorer: 'folder',
    },
    {
        appId: 'user-folder',
        iconName: 'Projects',
        icon: icons.FolderOpenIcon,
        shortcut: false,
        createElement: (instanceId) => (
            <FileExplorer
                totalItems={projects.length}
                instanceId={instanceId}
                folderName="Projects"
                path={['Projects']}
                pathDisplay="C:/Users/AKARI/Desktop/Projects"
                startIcon={<img loading="eager" className="p-1" alt="Folder Open Icon" src={icons.FolderOpenIcon} />}
            >
                <Projects />
            </FileExplorer>
        ),
        explorer: 'folder',
    },
    {
        appId: 'recycler-bin',
        iconName: 'Recycler Bin',
        icon: icons.RecyclerBinFullIcon,
        shortcut: false,
        explorer: '',
    },
    {
        appId: 'yt-music',
        iconName: 'YT Music',
        icon: icons.YtMusicIcon,
        shortcut: true,
        link: 'https://music.youtube.com/playlist?list=PL0D_ztGqMoBgO9_8vvvYg-LbnMXuA-TAp&feature=shared',
        explorer: '',
    },
    {
        appId: 'github-desktop',
        iconName: 'Github Desktop',
        icon: icons.GithubIcon,
        shortcut: true,
        link: 'https://github.com/akarindt/akari-portfolio',
        explorer: '',
    },
    {
        appId: 'winver',
        iconName: 'winver.exe',
        icon: icons.ExeIcon,
        shortcut: true,
        createElement: (instanceId) => <Winver instanceId={instanceId} />,
        explorer: '',
    },
];

export default appIconSettings;
