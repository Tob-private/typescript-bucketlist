// här är det bara level-up!
import { getName } from '@/utils/user.js'
import { getThemes } from '@/utils/themes.js'

const userName = getName()
const themes = getThemes()

const nameInput = document.getElementById('name-input') as HTMLInputElement
nameInput.value = userName

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
