import type { ReactNode } from 'react';
import type React from 'react';
import { create } from 'zustand';

export type ElementStore = {
    elements: {
        id: string;
        type: string;
        instanceId: string;
        content: ReactNode;
        isFocused: boolean;
    }[];
    setElement: (type: string, element: React.ReactNode, id: string) => void;
    removeElement: (instanceId: string) => void;
    focusElement: (instanceId: string) => void;
    getCurrentFocusedElement: (instanceId: string) => boolean;
};

const elementStore = create<ElementStore>((set, get) => ({
    elements: [],
    setElement: (type, element, id) => {
        set((state) => {
            return {
                elements: [
                    ...state.elements.map((el) => ({ ...el, isFocused: false })),
                    { id: type, type, instanceId: id, content: element, isFocused: true },
                ],
            };
        });
    },
    removeElement: (instanceId) =>
        set((state) => ({
            elements: state.elements.filter((el) => el.instanceId !== instanceId),
        })),
    focusElement: (instanceId) =>
        set((state) => ({
            elements: state.elements.map((el) =>
                el.instanceId === instanceId ? { ...el, isFocused: true } : { ...el, isFocused: false }
            ),
        })),
    getCurrentFocusedElement: (instanceId) => {
        const element = get().elements.find((el) => el.instanceId === instanceId);
        return element ? element.isFocused : false;
    },
}));

export default elementStore;
