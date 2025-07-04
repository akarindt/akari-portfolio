import { create } from 'zustand';

export type ExplorerStoreType = {
    explorers: string[];
    addExplorer: (explorer: string) => void;
    removeExplorer: (explorer: string) => void;
};

export const explorerStore = create<ExplorerStoreType>((set) => ({
    explorers: [],
    addExplorer: (explorer) => set((state) => ({ explorers: [...state.explorers, explorer] })),
    removeExplorer: (explorer) =>
        set((state) => {
            const index = state.explorers.indexOf(explorer);
            if (index === -1) return state;

            const newExplorers = [...state.explorers];
            newExplorers.splice(index, 1);
            return { explorers: newExplorers };
        }),
}));
