import { LSkeys } from "@/data/localStorageKeys"

export const getThemes = (): string[] => {
    const themes = localStorage.getItem(LSkeys.themes)
    if (!themes) {
        const defaultThemes = ['teknikdrömmar',
            'vardagsdrömmar',
            'husdrömmar',
            'sportdrömmar',
            'resdrömmar',]
        saveThemes(defaultThemes)
        return defaultThemes
    }
    return JSON.parse(themes)
}

export const saveThemes = (themes: string[]): void => {
    localStorage.setItem(LSkeys.themes, JSON.stringify(themes))
}

export const createTheme = (theme: string): void => {
    console.log("create theme:", theme);
    
    const themes = getThemes()
    themes.push(theme)
    saveThemes(themes)
}

export const updateThemes = (themes: string[]): void => {
    saveThemes(themes)
}

export const deleteTheme = (theme: string): void => {
    console.log("deleting theme:", theme);
    
    const themes = getThemes()
    const themeIndex = themes.findIndex((t) => t == theme)
    console.log(themeIndex);
    themes.splice(themeIndex, 1)
    saveThemes(themes)
}
