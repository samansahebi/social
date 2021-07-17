import { authState } from "./actionTypes/auth"

export const updateObject = (oldObject:authState, updatedProperties:authState):authState => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}