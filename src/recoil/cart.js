import { selector } from "recoil";

export const cartState = selector({
    key: "cartState",
    default: []
})