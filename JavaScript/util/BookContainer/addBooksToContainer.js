import { headerAnimation } from "../util.js";

export default function addBookContainer(book, container) {
    
    headerAnimation();
    
    const noImage = "https://bijao.uninorte.edu.co/tutoriales_tic/img/icono/no_imagen.png";

    
    let bookContainer = document.createElement('article');

    bookContainer.innerHTML = ` <figure id="${book.id}" class="cardContainer">
                                    <div class="">
                                        <img src="${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : noImage}" class="imgBook" alt="${book.volumeInfo.title}">
                                    </div>
                                    <figcaption class="containerTitleAndAuthor">
                                        <p class="titleBook">${book.volumeInfo.title}</p>
                                        <p class="authorBook">By ${book.volumeInfo.authors ? book.volumeInfo.authors : "anonymous"}</p>
                                    </figcaption>
                                </figure>`;

    bookContainer.className = "card";
    bookContainer.style.width = "190px";
    bookContainer.style.backgroundImage = `linear-gradient(#f8f7ff 10%, #fff)`;
    
    container.appendChild(bookContainer);
}
