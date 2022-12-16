/* eslint-disable */
import { selector, selectorFamily } from "recoil";
import { cartsListState } from "./cartsList";

export const cartSelector = selectorFamily({
    key: 'cartSelector',
    get: ({ get }) => {
        get(cartsListState).filter( (el) => el.id === cart.id);
    }
})