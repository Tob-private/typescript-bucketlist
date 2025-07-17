// här är det bara level-up!
import { getUsername } from '@/utils/user.js'
import { createTheme, deleteTheme, getThemes } from '@/utils/themes.js'
import { LSkeys } from '@/data/localStorageKeys'

const userName = getUsername()

const nameInput = document.getElementById('name-input') as HTMLInputElement
const buttonSaveName = document.querySelector(
    '.btn-username'
) as HTMLInputElement
nameInput.value = userName

buttonSaveName.addEventListener('click', () => {
    if (nameInput.value !== '') {
        localStorage.setItem(LSkeys.user, nameInput.value)
    } else {
        alert('Användarnamnet är tomt!')
    }
})

const renderThemes = () => {
    const themeList = document.getElementById('theme-list') as HTMLUListElement
    themeList.innerHTML = ''

    const themes = getThemes()

    if (themeList) {
        themes.forEach((theme: string) => {
            const li = document.createElement('li')
            li.innerHTML = `<p>${theme}</p>`
            const imgElement = document.createElement('img')
            imgElement.setAttribute('src', '../assets/images/trash_delete.png')
            imgElement.addEventListener('click', () => {
                deleteTheme(theme)
                renderThemes()
            })
            li.appendChild(imgElement)

            themeList.appendChild(li)
        })
    }
}
renderThemes()

const inputTheme = document.querySelector('#theme-input') as HTMLInputElement
const btnAddTheme = document.querySelector('.btn-add-theme') as HTMLInputElement
btnAddTheme.addEventListener('click', () => {
    if (!inputTheme.value) {
        alert('Tema fältet är tomt. Vänligen fyll i det med ditt önskade tema')
    } else {
        createTheme(inputTheme.value)
        renderThemes()
        inputTheme.value = ''
    }
})

// "logga ut"
const logOutBtn = document.querySelector('.logout')
logOutBtn?.addEventListener('click', logOut)

function logOut(): void {
    localStorage.removeItem(LSkeys.user)
    window.location.replace('login.html')
}
