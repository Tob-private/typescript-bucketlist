// Logik för att lägga till och ändra "name"

import { LSkeys } from "@/data/localStorageKeys"

export const getUsername = (): string => {
    const user = localStorage.getItem(LSkeys.user)
    console.log('get user')
    return user ?? "no username saved"
}

export const saveUsername= (name: string): void => {
     localStorage.setItem(LSkeys.user, name)
}

export const updateName = (name: string): string => {
    localStorage.setItem(LSkeys.user, name)
    return name
}
