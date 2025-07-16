import { saveUsername } from '@/utils/user'

const inputUsername: HTMLElement | null = document.querySelector('#username')
const inputPassword: HTMLElement | null = document.querySelector('#password')
const formLogin: HTMLElement | null = document.querySelector('form')
const btnTogglePassword: HTMLElement | null =
    document.querySelector('.toggle-password')

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

formLogin.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault()
    if (inputUsername.value === '') {
        alert('Användarrnamnet är tomt. Vänligen fyll i det')
    } else if (inputPassword.value.length < 4) {
        alert(
            'Lösenordet är för kort. Vänligen fyll i ett lösenord som är minst 4 tecken långt'
        )
    } else {
        saveUsername(inputUsername.value)
        formLogin.submit()
    }
})

btnTogglePassword.addEventListener('click', () => {
    if (inputPassword.getAttribute('type') === 'password') {
        inputPassword.setAttribute('type', 'text')
    } else {
        inputPassword.setAttribute('type', 'password')
    }
})
