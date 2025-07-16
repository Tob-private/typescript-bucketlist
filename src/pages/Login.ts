import { saveUsername } from "@/utils/user"

const inputUsername: HTMLElement | null = document.querySelector('#username')
const formLogin: HTMLElement | null = document.querySelector('form')

if (!(inputUsername instanceof HTMLInputElement)) {
    throw new Error('inputUsername is not instance of HTMLInputElement')
}
if (!(formLogin instanceof HTMLFormElement)) {
    throw new Error('formLogin is not instance of HTMLFormElement')
}

formLogin.addEventListener('submit', () => {
    // e.preventDefault()
    saveUsername(inputUsername.value)
    // formLogin.submit()
})