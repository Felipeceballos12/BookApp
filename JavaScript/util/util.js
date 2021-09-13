export function headerAnimation() {

    const containerBackground = document.querySelector("#containerBackground");
    const titleSearchBook = document.querySelector("#titleSearchBook");
    containerBackground.classList.add("changeHeightBackground");
    titleSearchBook.style.display = "none";
}

export function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export function openModal() {
    let modal = document.querySelector("#myModal");
    modal.style.display = "block";
}

export function closeModal() {
    
    let modal = document.querySelector("#myModal");
    let span = document.querySelector(".close");
    
    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", () => {
        modal.style.display = "none";
        localStorage.removeItem("bookView");
    })

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            localStorage.removeItem("bookView");
        }
    });
}

export function addContentModalLoading(container) {
    const modalLoading = document.createElement("div");

    modalLoading.classList.add("modalLoading");
    modalLoading.id = "myModal";
    
    modalLoading.innerHTML = `<div class="modal-content-loading">
                                    <h6>LOADING....</h6>                    
                            </div>`;

    container.appendChild(modalLoading);
}