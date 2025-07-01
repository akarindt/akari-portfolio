import elementStore from '@stores/element';

const ElementContainer: React.FC = () => {
    const eStore = elementStore();

    console.log(eStore.elements);

    return (
        <div className="absolute top-0 left-0 z-[12]">
            {eStore.elements.map((element) => (
                <div className="w-max h-max" key={element.instanceId}>
                    {element.content}
                </div>
            ))}
        </div>
    );
};

export default ElementContainer;
