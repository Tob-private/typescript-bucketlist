// Logik för att lägga till och ta bort teman
import themes from '@/data/themesData'

export const getThemes = (): string[] => {
    return themes
}

export const createTheme = (theme: string): string[] => {
    themes.push(theme)
    return themes
}

export const deleteTheme = (theme: string): string[] => {
    const themeIndex = themes.findIndex((t) => t == theme)
    return themes.splice(themeIndex, 1)
}
