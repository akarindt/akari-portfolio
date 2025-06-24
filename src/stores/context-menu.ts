import { create } from 'zustand';

export type ContextMenuState = {
    isOpen: boolean;
    position: { x: number; y: number };
    setOpen: (isOpen: boolean) => void;
    setPosition: (x: number, y: number) => void;
};

const contextMenuStore = create<ContextMenuState>((set) => ({
    isOpen: false,
    position: { x: 0, y: 0 },
    setOpen: (isOpen) => set({ isOpen }),
    setPosition: (x, y) => set({ position: { x, y } }),
}));

export default contextMenuStore;
