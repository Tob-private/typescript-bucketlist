import { LSkeys } from '@/data/localStorageKeys'
import type BucketListItem from '@/models/BucketListItem'
import { getBucketList, updateBucketListItem } from './bucketList'

export const getThemes = (): string[] => {
    const themes = localStorage.getItem(LSkeys.themes)
    if (!themes) {
        const defaultThemes = [
            'teknikdrömmar',
            'vardagsdrömmar',
            'husdrömmar',
            'sportdrömmar',
            'resdrömmar',
        ]
        saveThemes(defaultThemes)
        return defaultThemes
    }
    return JSON.parse(themes)
}

const saveThemes = (themes: string[]): void => {
    localStorage.setItem(LSkeys.themes, JSON.stringify(themes))
}

export const createTheme = (theme: string): void => {
    const themes = getThemes()
    themes.push(theme)
    saveThemes(themes)
}

export const updateThemes = (themes: string[]): void => {
    saveThemes(themes)
}

export const deleteTheme = (theme: string): void => {
    const themes = getThemes()
    const themeIndex = themes.findIndex((t) => t == theme)
    themes.splice(themeIndex, 1)
    saveThemes(themes)

    // Update bucketlist items that use the deleted theme
    const bucketList: BucketListItem[] = getBucketList()
    bucketList.forEach((item: BucketListItem) => {
        if (item.theme === theme) {
            updateBucketListItem(item.id, item.name, '---', item.checked)
        }
    })
}
