import { LSkeys } from '@/data/localStorageKeys'
import BucketListItem from '@/models/BucketListItem'

// Read function
export const getBucketList = (): BucketListItem[] => {
    const bucketListJSON = localStorage.getItem(LSkeys.bucketList)
    return bucketListJSON ? JSON.parse(bucketListJSON) : [{id: 1, name: "ababa", theme: "husdrömmar", checked: false}]
}

// Save helper function
const saveBucketList = (bucketList: BucketListItem[]) => {
    localStorage.setItem(LSkeys.bucketList, JSON.stringify(bucketList))
}

// Create
export const createBucketListItem = (
    name: string,
    theme: string,
    checked: boolean
): BucketListItem => {
    const bucketList = getBucketList()

    // Generate unique ID
    let bucketListID = 0
    const bucketListIDs = bucketList.map((item) => item.id)
    while (bucketListIDs.includes(bucketListID)) {
        bucketListID++
    }

    const newItem: BucketListItem = {
        id: bucketListID,
        name,
        theme,
        checked,
    }

    bucketList.push(newItem)
    saveBucketList(bucketList)

    return newItem
}

// Update
export const updateBucketListItem = (
    id: number,
    name: string,
    theme: string,
    checked: boolean
): BucketListItem | null => {
    const bucketList = getBucketList()
    const index = bucketList.findIndex((item) => item.id === id)

    if (index === -1) {
        console.warn(`BucketListItem with id ${id} not found.`)
        return null
    }

    const updatedItem: BucketListItem = {
        id,
        name,
        theme,
        checked,
    }

    bucketList[index] = updatedItem
    saveBucketList(bucketList)

    return updatedItem
}

// Delete
export const deleteBucketListItem = (id: number): boolean => {
    const bucketList = getBucketList()
    const updatedList = bucketList.filter((item) => item.id !== id)

    if (updatedList.length === bucketList.length) {
        console.warn(`BucketListItem with id ${id} not found.`)
        return false
    }

    saveBucketList(updatedList)
    return true
}
