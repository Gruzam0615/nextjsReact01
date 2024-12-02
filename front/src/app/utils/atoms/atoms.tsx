import { atom } from "jotai";

export const server_name_atom = atom<string>("");

export const server_name_readWriteAtom = atom(server_name_atom, (_get, set, value: string) => {
    set(server_name_atom, value);
});