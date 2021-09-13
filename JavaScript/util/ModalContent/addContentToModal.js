export default function addContentToModal(book) {
    
    let containerModal = document.querySelector("#containerContent");

    containerModal.innerHTML = `<div class="containerImgAndBtn">
                                    <img class="containerModalImg" src="${book.img}" alt="${book.title}">
                                    <div>
                                        <div class="titleModal">   
                                            <h2>${book.title}</h2>
                                        </div>
                                        <p class="containerAboutAuthor"><strong>author:</strong> ${book.author}</p>
                                        <p class="containerPriceAndPages"><strong>Num Pages:</strong> #${book.pageCount}</p>
                                        <p class="containerAboutAuthor"><strong>language:</strong> ${book.language}</p>
                                        <p class="containerPriceAndPages"><strong>price:</strong> ${book.price}</p>
                                        ${book.price !== "NOT FOR SALE" 
                                            ? `<a href="${book.url}" target="_blank" class="urlBook">Go to Buy</a>` 
                                            : `<div style="height: 42.57px;"></div>`}
                                    </div>
                                </div>
                                <div>
                                    <p class="containerDescripcion" style="${book.description.length > 538 ? "height:204.8px; overflow-y:auto;" : "height: 100%"}"><strong>description:</strong> ${book.description}</p>
                                </div>`;
};