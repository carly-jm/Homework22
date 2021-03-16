import axios from 'axios';

const API = {
    // axios call to grab the books from the google books API and the search input of the user
    getBooks: function(book) {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book)
    },
    // grab the books from the database that was saved by the user
    getApiBooks: function() {
        return axios.get("/api/books");
    },
    // add a book to the database when the user clicks save book
    addBook: function(data) {
        return axios.post("/api/books", data);
    },
    // delete the book by id when the user decides to remove from the saved page
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    // find a book by id
    findBook: function(id) {
        return axios.get("/api/search");
    }
};

export default API;

