import getBooksOfGoogleApi from "./util/getBooksOfGoogleApi.js";
import createBooksContainers from "./util/BookContainer/index.js";
import { closeModal, addContentModalLoading, openModal, removeAllChildNodes, headerAnimation } from "./util/util.js";
import saveDataInLocalStorage from "./util/saveDataInLocalStorage.js";

document.querySelector('form').onsubmit = async function(e) {
    e.preventDefault();

    const q = document.querySelector("#searchInput").value;
    
    const container = document.querySelector("#container");
    
    if (container.firstChild) {
        removeAllChildNodes(container);
    }
    
    addContentModalLoading(container);
    openModal();
    
    const responseGoogleApi = await getBooksOfGoogleApi(q);
    
    if (responseGoogleApi) {

        createBooksContainers(responseGoogleApi);
        saveDataInLocalStorage(responseGoogleApi);
        document.querySelector(".modalLoading").remove();
    
    } else {
        
        headerAnimation();
        container.innerHTML = "NOT FOUND!";
    }

    closeModal();
    
    // window.setInterval(() => {
    //     console.log("Hola felipe!");
    // }, 2000);
};

closeModal();

localStorage.removeItem("bookView");