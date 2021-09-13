import addContentToModal from "./addContentToModal.js";

export default function createContentToModal() {
    let data = localStorage.getItem("bookView");
    let modalBook = JSON.parse(data);

    addContentToModal(modalBook);
}