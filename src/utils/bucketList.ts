import { LSkeys } from '@/data/localStorageKeys.js'
import BucketListItem from '@/models/BucketListItem.js'

// Read function
export const getBucketList = (): BucketListItem[] => {
    const bucketListJSON = localStorage.getItem(LSkeys.bucketList)
    console.log('get bucketlist')
    return bucketListJSON
        ? JSON.parse(bucketListJSON)
        : [{ id: 1, name: 'ababa', theme: 'husdrömmar', checked: false }]
}

// Save helper function
const saveBucketList = (bucketList: BucketListItem[]) => {
    console.log('Save bucketlist')

    localStorage.setItem(LSkeys.bucketList, JSON.stringify(bucketList))
}

// Create
export const createBucketListItem = (
    name: string,
    theme: string,
    checked: boolean
): BucketListItem => {
    console.log('create bucketlist')
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
    console.log('update bucketlist')
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
    console.log('delete bucketlist')
    const bucketList = getBucketList()
    const updatedList = bucketList.filter((item) => item.id !== id)

    if (updatedList.length === bucketList.length) {
        console.warn(`BucketListItem with id ${id} not found.`)
        return false
    }

    saveBucketList(updatedList)
    return true
}
