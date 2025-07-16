import type BucketListItem from '@/models/BucketListItem.js'
import { deleteBucketListItem, getBucketList } from '@/utils/bucketList.js'
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
        const inputElement: HTMLInputElement = document.createElement('input')
        inputElement.classList.add('dream-check')
        inputElement.setAttribute('type', 'checkbox')
        inputElement.setAttribute('name', 'dream-check')
        inputElement.setAttribute('id', 'dream-check-' + index)
        if (item.checked) {
            inputElement.setAttribute('checked', 'true')
        }

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

        liElement.appendChild(inputElement)
        liElement.appendChild(labelElement)
        liElement.appendChild(buttonElement)

        ulBucketList.appendChild(liElement)
    })
}

spanUsername.textContent = getUsername()


// Render bucketlist when window loads
window.addEventListener('DOMContentLoaded', renderBucketList)
