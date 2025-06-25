import type React from 'react';
import { create } from 'zustand';

export type ElementStore = {
    element: React.ReactNode | null;
    setElement: (element: React.ReactNode) => void;
};

const elementStore = create<ElementStore>((set) => ({
    element: null,
    setElement: (element) => set({ element }),
}));

export default elementStore;
