"use client";
import { create } from "zustand";

type State = {
  files: File | null;
};

type Action = {
  updateFile: (file: File | null) => void;
};
const useFileStore = create<State & Action>((set) => ({
  files: null,
  updateFile: (files) => set(() => ({ files: files })),
}));

export default useFileStore;
