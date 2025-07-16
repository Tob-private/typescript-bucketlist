import { saveUsername } from "@/utils/user"

const inputUsername: HTMLElement | null = document.querySelector('#username')
const inputPassword: HTMLElement | null = document.querySelector('#password')
const formLogin: HTMLElement | null = document.querySelector('form')
const btnTogglePassword: HTMLElement | null = document.querySelector('.toggle-password')

if (!(inputUsername instanceof HTMLInputElement)) {
    throw new Error('inputUsername is not instance of HTMLInputElement')
}
if (!(inputPassword instanceof HTMLInputElement)) {
    throw new Error('inputPassword is not instance of HTMLInputElement')
}
if (!(formLogin instanceof HTMLFormElement)) {
    throw new Error('formLogin is not instance of HTMLFormElement')
}
if (!(btnTogglePassword instanceof HTMLButtonElement)) {
    throw new Error('btnTogglePassword is not instance of HTMLButtonElement')
}

formLogin.addEventListener('submit', () => {
    saveUsername(inputUsername.value)
})

btnTogglePassword.addEventListener('click', () => {
    if (inputPassword.getAttribute('type') === "password") {
        inputPassword.setAttribute('type', 'text')
    } else {
        inputPassword.setAttribute('type', 'password')
        
    }
})
