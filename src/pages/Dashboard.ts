import type BucketListItem from '@/models/BucketListItem'
import {
    deleteBucketListItem,
    getBucketList,
    updateBucketListItem,
} from '@/utils/bucketList'
import { getUsername } from '@/utils/user'

const ulBucketList: HTMLElement | null = document.querySelector('.bucketlist')
const spanUsername: HTMLElement | null = document.querySelector('#user-name')

if (!(ulBucketList instanceof HTMLUListElement)) {
    throw new Error('ulBucketList is not instance of HTMLUListElement')
}
if (!(spanUsername instanceof HTMLSpanElement)) {
    throw new Error('spanUsername is not intance of HTMLSpanElement')
}

const renderBucketList = (): void => {
    ulBucketList.innerHTML = ''
    const bucketList: BucketListItem[] = getBucketList()

    bucketList.forEach((item: BucketListItem, index: number) => {
        // Create an li element
        const liElement: HTMLLIElement = document.createElement('li')
        liElement.classList.add('bucketlist_item')

        // Create an input element
        const inputCheckboxElement: HTMLInputElement =
            document.createElement('input')
        inputCheckboxElement.classList.add('bucketlist-check')
        inputCheckboxElement.setAttribute('type', 'checkbox')
        inputCheckboxElement.setAttribute('name', 'bucketlist-check')
        inputCheckboxElement.setAttribute('id', 'bucketlist-check-' + index)
        if (item.checked) {
            inputCheckboxElement.setAttribute('checked', 'true')
        }
        inputCheckboxElement.addEventListener('click', () => {
            updateBucketListItem(item.id, item.name, item.theme, !item.checked)
            renderBucketList()
        })

        // Create a label element
        const labelElement: HTMLLabelElement = document.createElement('label')
        labelElement.setAttribute('for', 'bucketlist-check-' + index)
        labelElement.textContent = item.name + ', '

        // Create a span element
        const spanElement: HTMLSpanElement = document.createElement('span')
        spanElement.classList.add('bucketlist-theme')

        spanElement.textContent = item.theme

        labelElement.appendChild(spanElement)

        // Create a button element
        const buttonElement: HTMLButtonElement =
            document.createElement('button')
        buttonElement.setAttribute('type', 'button')
        buttonElement.addEventListener('click', () => {
            deleteBucketListItem(item.id)
            renderBucketList()
        })

        const imgElement: HTMLImageElement = document.createElement('img')
        imgElement.setAttribute('src', '/assets/images/trash_delete.png')

        buttonElement.appendChild(imgElement)

        liElement.appendChild(inputCheckboxElement)
        liElement.appendChild(labelElement)
        liElement.appendChild(buttonElement)

        ulBucketList.appendChild(liElement)
    })
}

spanUsername.textContent = getUsername()

// Render bucketlist when window loads
window.addEventListener('DOMContentLoaded', renderBucketList)
