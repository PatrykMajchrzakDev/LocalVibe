import { create } from "zustand";
import { MapCenter } from "../types/MapTypes";
interface StoreState {
  selectedItemLocation: MapCenter | null;
}

interface StoreActions {
  setSelectedItemLocation: (center: MapCenter) => void;
}

type MyStore = StoreState & StoreActions;

const mapCenterStore = create<MyStore>((set) => ({
  selectedItemLocation: null,
  setSelectedItemLocation: (center: MapCenter) =>
    set({ selectedItemLocation: center }),
}));

export default mapCenterStore;
