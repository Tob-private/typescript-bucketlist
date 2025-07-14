// import { createBucketListItem } from "@/utils/bucketList";

// // "Skapa" funktionalitet för bucketlist-arrayen
// const inputDream: HTMLElement | null = document.querySelector('#dream')
// const selectTheme: HTMLElement | null = document.querySelector('#dream-select')
// const formDream: HTMLElement | null = document.querySelector('form')

// if (!(inputDream instanceof HTMLInputElement)) {
//     throw new Error("inputDream is not intance of HTMLInputElement");
// }
// if (!(selectTheme instanceof HTMLSelectElement)) {
//     throw new Error("selectTheme is not intance of HTMLSelectElement");
// }
// if (!(formDream instanceof HTMLFormElement)) {
//     throw new Error("formDream is not intance of HTMLFormElement");
// }

// formDream.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (!inputDream.value.trim()) {
//         alert("Please enter a dream before submitting.");
//         return;
//     }

//     createBucketListItem(inputDream.value, selectTheme.value, false);
//     window.location.replace('/pages/dashboard.html');
// })
