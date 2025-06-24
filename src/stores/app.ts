import { create } from 'zustand';

type AppState = {
    selectedApp: string;
    setSelectedApp: (appId: string) => void;
};

const appStore = create<AppState>((set) => ({
    selectedApp: '',
    setSelectedApp: (appId: string) => set({ selectedApp: appId }),
}));

export default appStore;
