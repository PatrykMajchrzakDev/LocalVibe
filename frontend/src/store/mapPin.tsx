import { create } from "zustand";

interface StoreState {
  hoveredItemId: string | null;
  selectedItemId: string | null;
}

interface StoreActions {
  setHoveredItemId: (id: string | null) => void;
  setSelectedItemId: (id: string | null) => void;
}

type MyStore = StoreState & StoreActions;

const mapPinStore = create<MyStore>((set) => ({
  hoveredItemId: null,
  selectedItemId: null,
  setHoveredItemId: (id) => set({ hoveredItemId: id }),
  setSelectedItemId: (id) => set({ selectedItemId: id }),
}));

export default mapPinStore;
