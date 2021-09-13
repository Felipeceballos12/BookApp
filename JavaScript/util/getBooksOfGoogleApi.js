import { API_KEY } from "./apiKey.js";

export default async function getBooksOfGoogleApi(name) {
    
    try {

        const url = "https://www.googleapis.com/books/v1/volumes?q=" + name + "&maxResults=40&key=" + API_KEY;

        const booksResponse = await fetch(url);
        const booksData = await booksResponse.json();
        
        return booksData.items;

    } catch (err) {
        console.log(err);
    }    
}