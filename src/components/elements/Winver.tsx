import { Rnd } from 'react-rnd';
import { TfiClose } from 'react-icons/tfi';
import Windows10Icon from '@assets/icons/Windows_10_Logo.png';
import elementStore from '@stores/element';
import { useEffect, useState } from 'react';

const Winver: React.FC<{ id?: string; instanceId: string }> = ({ instanceId }) => {
    const eStore = elementStore();
    const [isAnimating, setIsAnimating] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            eStore.removeElement(instanceId);
        }, 150);
    };

    return (
        <Rnd
            className={`${eStore.getCurrentFocusedElement(instanceId) ? 'z-[100]' : ''}`}
            style={{
                cursor: 'context-menu',
            }}
            default={{
                x: 200,
                y: 100,
                width: 500,
                height: 400,
            }}
            cancel="#winver-content"
            enableResizing={false}
            onDragStart={() => eStore.focusElement(instanceId)}
        >
            <div
                onClick={() => eStore.focusElement(instanceId)}
                className={`w-full h-full bg-neutral-100 windows-10-shadow ${
                    isAnimating ? 'windows-animation-open' : ''
                } ${isClosing ? 'windows-animation-close' : ''}`}
            >
                <div className="flex flex-row w-full justify-between">
                    <div
                        className={`text-sm h-full p-2 text-center ${
                            eStore.getCurrentFocusedElement(instanceId) ? 'text-black' : 'text-neutral-400'
                        }`}
                    >
                        About Windows
                    </div>
                    <button
                        onClick={handleClose}
                        className="hover:bg-red-500 hover:text-white p-2 flex items-center justify-center"
                    >
                        <TfiClose />
                    </button>
                </div>
                <div id="winver-content" className="relative bg-[#f7ebeb] h-full w-full py-3 flex flex-col gap-4">
                    <div className="px-24">
                        <img draggable="false" className="w-full h-full" src={Windows10Icon} />
                    </div>
                    <div className="px-3">
                        <hr className="border-neutral-400" />
                    </div>
                    <div className="px-10 flex flex-col gap-3">
                        <p className="text-sm text-left">
                            I created this as a fun project to learn React and TypeScript. It is not meant to be a fully
                            functional Windows OS, but rather a simulation of the Windows 10 interface.
                        </p>
                        <p className="text-sm text-left">
                            This project is not in any way affiliated with Microsoft and should not be confused with
                            Microsoft's Operating System or Products.
                        </p>
                        <p className="text-sm text-left">
                            This is also not{' '}
                            <a className="underline text-blue-500" href="https://www.microsoft.com/en-in/windows-365">
                                Windows 365 cloud PC
                            </a>
                        </p>
                        <p className="text-sm text-left">
                            Microsoft, Windows and Other demonstrated Products in this project are trademarks of the
                            Microsoft group of companies
                        </p>
                    </div>{' '}
                    <div className="absolute bottom-0 right-0 p-3">
                        <button
                            onClick={handleClose}
                            className="text-sm w-[100px] bg-[#d7d5d5] border border-blue-500 p-1 cursor-pointer"
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </Rnd>
    );
};

export default Winver;
