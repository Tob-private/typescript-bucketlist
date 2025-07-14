// CRUD funktionalitet för bucketlist-arrayen
import bucketList from '@/data/bucketListData'
import BucketListItem from '@/models/BucketListItem'

export const getBucketList = (): BucketListItem[] => {
    return bucketList
}

export const createBucketListItem = (
    name: string,
    theme: string,
    checked: boolean
): BucketListItem => {
    //
    let bucketListID = 0
    const bucketListIDs = bucketList.map((item) => item.id)

    while (bucketListIDs.includes(bucketListID)) {
        bucketListID++
    }

    const newBucketListItem: BucketListItem = {
        id: bucketListID,
        name,
        theme,
        checked,
    }

    bucketList.push(newBucketListItem)

    return newBucketListItem
}

export const updateBucketListItem = (
    id: number,
    name: string,
    theme: string,
    checked: boolean
): BucketListItem | null => {
    const bucketListItem = bucketList.find((item) => item.id === id)

    if (!bucketListItem) {
        console.warn(`BucketListItem with id ${id} not found.`)
        return null
    }

    bucketListItem.name = name
    bucketListItem.theme = theme
    bucketListItem.checked = checked

    return bucketListItem
}

export const deleteBucketListItem = (id: number) => {
    const itemIndex = bucketList.findIndex((b) => b.id == id)
    return bucketList.splice(itemIndex, 1)
}
