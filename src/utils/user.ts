// Logik för att lägga till och ändra "name"
let userName = ''

export const getName = (): string => {
    return userName
}

export const updateName = (name: string): string => {
    userName = name
    return userName
}
