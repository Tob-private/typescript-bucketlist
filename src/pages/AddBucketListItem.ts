import { createBucketListItem } from '@/utils/bucketList'
import { getThemes } from '@/utils/themes'
import { getUsername } from '@/utils/user'

// "Skapa" funktionalitet för bucketlist-arrayen
const spanUsername: HTMLElement | null = document.querySelector('#user-name')
const inputBucketlist: HTMLElement | null =
    document.querySelector('#bucketlist')
const selectTheme: HTMLElement | null =
    document.querySelector('#bucketlist-select')
const formBucketlist: HTMLElement | null = document.querySelector('form')

if (!(inputBucketlist instanceof HTMLInputElement)) {
    throw new Error('inputBucketlist is not intance of HTMLInputElement')
}
if (!(selectTheme instanceof HTMLSelectElement)) {
    throw new Error('selectTheme is not intance of HTMLSelectElement')
}
if (!(formBucketlist instanceof HTMLFormElement)) {
    throw new Error('formBucketlist is not intance of HTMLFormElement')
}
if (!(spanUsername instanceof HTMLSpanElement)) {
    throw new Error('spanUsername is not intance of HTMLSpanElement')
}
spanUsername.textContent = getUsername()

// <option value="teknik">Teknikdrömmar</option>
const themes: string[] = getThemes()
themes.forEach((theme: string) => {
    const optionElement = document.createElement('option')
    optionElement.setAttribute('value', theme)
    optionElement.innerText = theme
    selectTheme.appendChild(optionElement)
})

formBucketlist.addEventListener('submit', (e) => {
    e.preventDefault()

    if (!inputBucketlist.value.trim()) {
        alert('Please enter a bucketlist before submitting.')
        return
    }

    createBucketListItem(inputBucketlist.value, selectTheme.value, false)
    window.location.replace('/pages/dashboard.html')
})
