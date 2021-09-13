import addBookContainer from "./addBooksToContainer.js";

export default function createBooksContainers(books) {
    const container = document.querySelector('#container');
    
    books.forEach(book => {
        addBookContainer(book, container);
    });
}
