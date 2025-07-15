import { createBucketListItem } from "@/utils/bucketList.js";

// "Skapa" funktionalitet för bucketlist-arrayen
const inputDream: HTMLElement | null = document.querySelector('#dream')
const selectTheme: HTMLElement | null = document.querySelector('#dream-select')
const formDream: HTMLElement | null = document.querySelector('form')

if (!(inputDream instanceof HTMLInputElement)) {
    throw new Error("inputDream is not intance of HTMLInputElement");
} else {
    console.log(inputDream);

}
if (!(selectTheme instanceof HTMLSelectElement)) {
    throw new Error("selectTheme is not intance of HTMLSelectElement");
} else {
    console.log(selectTheme);

}
if (!(formDream instanceof HTMLFormElement)) {
    throw new Error("formDream is not intance of HTMLFormElement");
} else {
    console.log(formDream);

}

formDream.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!inputDream.value.trim()) {
        alert("Please enter a dream before submitting.");
        return;
    }

    createBucketListItem(inputDream.value, selectTheme.value, false);
    window.location.replace('/pages/dashboard.html');
})
