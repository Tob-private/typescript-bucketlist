// här är det bara level-up!
import { getUsername } from '@/utils/user.js'
import { getThemes } from '@/utils/themes.js'
import { LSkeys } from '@/data/localStorageKeys'

const userName = getUsername()
const themes = getThemes()

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

const themeList = document.getElementById('theme-list') as HTMLUListElement
if (themeList) {
    themes.forEach((theme: string) => {
        const li = document.createElement('li')
        li.innerHTML = `<p>${theme}</p> <img src="@/assets/images/trash_delete.png" />`
        themeList.appendChild(li)
    })
}

// "logga ut"
const logOutBtn = document.querySelector('.logout')
logOutBtn?.addEventListener('click', logOut)

function logOut(): void {
    window.location.replace('login.html')
}
