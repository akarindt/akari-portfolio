import InfoIcon from '../assets/icons/imageres_81.ico';
import { SlArrowRight } from 'react-icons/sl';
import contextMenuStore from '../stores/context-menu';
import clsx from 'clsx';

function ContextMenu() {
    const state = contextMenuStore();

    return (
        <div
            className={clsx(
                `${state.isOpen ? 'absolute' : 'hidden'}`,
                `top-[${state.position.y}%]`,
                `left-[${state.position.x}%]`,
                'z-[9]',
                'w-[320px]',
                'h-max',
                'py-2',
                'context-menu',
                'bg-neutral-100'
            )}
        >
            <div>
                <div>
                    <div className="flex flex-row items-center gap-2 hover:bg-neutral-200 px-3 py-[2px]">
                        <div className="w-4 h-4"></div>
                        <div className="flex flex-row justify-between items-center grow">
                            <span className="text-sm">View</span>
                            <SlArrowRight className="text-xs" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2 hover:bg-neutral-200 px-3 py-[2px]">
                        <div className="w-4 h-4"></div>
                        <div className="flex flex-row justify-between items-center grow">
                            <span className="text-sm">Sort by</span>
                            <SlArrowRight className="text-xs" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2 hover:bg-neutral-200 px-3 py-[2px]">
                        <div className="w-4 h-4"></div>
                        <div className="text-sm">Refresh</div>
                    </div>
                </div>

                <div className="px-3 my-1">
                    <hr className="border-neutral-400" />
                </div>
            </div>
            <div>
                <div>
                    <div className="flex flex-row items-center gap-2 hover:bg-neutral-200 px-3 py-[2px]">
                        <div className="w-4 h-4"></div>
                        <div className="text-sm text-neutral-500">Delete</div>
                    </div>
                    <div className="flex flex-row items-center gap-2 hover:bg-neutral-200 px-3 py-[2px]">
                        <div className="w-4 h-4"></div>
                        <div className="flex flex-row justify-between items-center grow text-neutral-500">
                            <span className="text-sm">Undo delete</span>
                            <span className="text-sm">Ctrl + Z</span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2 hover:bg-neutral-200 px-3 py-[2px]">
                        <div className="w-4 h-4"></div>
                        <div className="text-sm">Open command window here</div>
                    </div>
                </div>

                <div className="px-3 my-1">
                    <hr className="border-neutral-400" />
                </div>
            </div>
            <div>
                <div>
                    <div className="flex flex-row items-center gap-2 hover:bg-neutral-200 px-3 py-[2px]">
                        <div className="w-4 h-4">
                            <img className="w-full h-full" src={InfoIcon} />
                        </div>
                        <div className="text-sm">About Windows</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContextMenu;
