import elementStore from '../stores/element';
import Winver from './elements/Winver';

function ElementContainer() {
    const eStore = elementStore();
    return (
        <div className="absolute top-0 left-0 z-[12]">
            <Winver />
        </div>
    );
}

export default ElementContainer;
