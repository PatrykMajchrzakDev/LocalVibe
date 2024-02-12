import { create } from "zustand";

interface StoreState {
  hoveredItemId: string | null; // Adjust the type according to your actual data
}

interface StoreActions {
  setHoveredItemId: (id: string | null) => void;
}

type MyStore = StoreState & StoreActions;

const mapPinStore = create<MyStore>((set) => ({
  hoveredItemId: null,
  setHoveredItemId: (id) => set({ hoveredItemId: id }),
}));

export default mapPinStore;
