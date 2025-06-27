import type { ReactNode } from 'react';
import type React from 'react';
import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export type ElementStore = {
    elements: {
        id: string;
        type: string;
        instanceId: string;
        content: ReactNode;
    }[];
    setElement: (type: string, element: React.ReactNode) => string;
    removeElement: (instanceId: string) => void;
    getElementsByType: (type: string) => { id: string; type: string; instanceId: string; content: ReactNode }[];
};

const elementStore = create<ElementStore>((set, get) => ({
    elements: [],
    setElement: (type, element) => {
        const instanceId = uuidv4();
        set((state) => {
            return {
                elements: [...state.elements, { id: type, type, instanceId, content: element }],
            };
        });
        return instanceId;
    },
    removeElement: (instanceId) =>
        set((state) => ({
            elements: state.elements.filter((el) => el.instanceId !== instanceId),
        })),
    getElementsByType: (type) => {
        return get().elements.filter((el) => el.type === type);
    },
}));

export default elementStore;
