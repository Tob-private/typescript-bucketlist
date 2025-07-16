import type BucketListItem from '@/models/BucketListItem.js'
import {
    deleteBucketListItem,
    getBucketList,
    updateBucketListItem,
} from '@/utils/bucketList.js'
import { getUsername } from '@/utils/user'

const ulBucketList: HTMLElement | null = document.querySelector('.dream-list')
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
        liElement.classList.add('dream-list_item')

        // Create an input element
        const inputCheckboxElement: HTMLInputElement =
            document.createElement('input')
        inputCheckboxElement.classList.add('dream-check')
        inputCheckboxElement.setAttribute('type', 'checkbox')
        inputCheckboxElement.setAttribute('name', 'dream-check')
        inputCheckboxElement.setAttribute('id', 'dream-check-' + index)
        if (item.checked) {
            inputCheckboxElement.setAttribute('checked', 'true')
        }
        inputCheckboxElement.addEventListener('click', () => {
            updateBucketListItem(item.id, item.name, item.theme, !item.checked)
        })

        // Create a label element
        const labelElement: HTMLLabelElement = document.createElement('label')
        labelElement.setAttribute('for', 'dream-check-' + index)
        labelElement.textContent = item.name + ', '

        // Create a span element
        const spanElement: HTMLSpanElement = document.createElement('span')
        spanElement.classList.add('dream-theme')
        spanElement.textContent = item.theme

        labelElement.appendChild(spanElement)

        // Create a button element
        const buttonElement: HTMLButtonElement =
            document.createElement('button')
        buttonElement.setAttribute('type', 'button')
        buttonElement.addEventListener('click', () => {
            console.log('clicked on delete button index', index)
            console.log(item)
            deleteBucketListItem(item.id)
            renderBucketList()
        })
        console.log('Button created for index', index)

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
