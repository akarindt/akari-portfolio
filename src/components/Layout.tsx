import AppIcon from './AppIcon';
import appIconSettings from '../utils/app-icons';
import { v4 as uuidv4 } from 'uuid';
import ElementContainer from './ElementContainer';

function Layout() {
    return (
        <div className="absolute top-0 left-0 z-[5] p-1">
            <ElementContainer />
            <div className="flex max-h-[calc(100vh-3.25rem)] flex-col flex-wrap gap-4 pb-1">
                {appIconSettings.map((app) => (
                    <AppIcon {...app} key={uuidv4()} />
                ))}
            </div>
        </div>
    );
}

export default Layout;
