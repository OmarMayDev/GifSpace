"use client";
import { create } from "zustand";

type State = {
  loggedIn: boolean;
};

type Action = {
  updateloggedIn: (loggedIn: boolean) => void;
};
const useLoggedStore = create<State & Action>((set) => ({
  loggedIn: false,
  updateloggedIn: (loggedIn) => set(() => ({ loggedIn: loggedIn })),
}));

export default useLoggedStore;
