import createContentToModal from "./ModalContent/index.js";
import { openModal } from "./util.js";

export default function saveDataInLocalStorage(newBook) {

    const noImage = "https://bijao.uninorte.edu.co/tutoriales_tic/img/icono/no_imagen.png"; 
    const cardContainer = document.querySelectorAll(".cardContainer");

    for (let card of cardContainer) {
        card.addEventListener("click", (event) => {
                
            let elementClicked = event.target;
            let containerId = elementClicked.id 
                            ? elementClicked.id 
                            : elementClicked.parentNode.parentNode.id; 

            newBook.forEach(book => {
                if (book.id === containerId) {

                    let bookSave = {
                        img: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : noImage,
                        title: book.volumeInfo.title,
                        author: book.volumeInfo.authors ? book.volumeInfo.authors : "anonymous",
                        description: book.volumeInfo.description ? book.volumeInfo.description : "no description",
                        pageCount: book.volumeInfo.pageCount ? book.volumeInfo.pageCount : "anonymous",
                        language: book.volumeInfo.language,
                        price: book.saleInfo.saleability == "FOR_SALE" ? book.saleInfo.listPrice.amount : "NOT FOR SALE",
                        url: book.volumeInfo.infoLink,
                    }
                    
                    localStorage.setItem('bookView', JSON.stringify(bookSave));
                    
                    openModal();
                    
                    createContentToModal();
                }
            });
        });
    }
}