import elementStore from '@stores/element';

const ElementContainer: React.FC = () => {
    const eStore = elementStore();

    return (
        <div className="absolute top-0 left-0 z-[12]">
            {eStore.elements.map((element) => (
                <div key={element.instanceId}>{element.content}</div>
            ))}
        </div>
    );
};

export default ElementContainer;
