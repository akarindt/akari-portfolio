import elementStore from '@stores/element';
function ElementContainer() {
    const eStore = elementStore();
    return <div className="absolute top-0 left-0 z-[12]">{eStore.element && eStore.element}</div>;
}

export default ElementContainer;
