document.addEventListener('DOMContentLoaded', () => {
    // Get unique user identifier
    const userEmail = localStorage.getItem('email') || 'guest';
    displayBooks(userEmail);
});

function displayBooks(userEmail) {
    const bookTableBody = document.getElementById('bookTableBody');
    const books = JSON.parse(localStorage.getItem(`books_${userEmail}`)) || [];

    bookTableBody.innerHTML = '';

    books.forEach(book => {
        const row = `
            <tr id="row-${book.id}">
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.category}</td>
                <td>
                    <button onclick="editBook(${book.id}, '${userEmail}')" class="btn btn-primary btn-sm">Edit</button>
                    <button onclick="updateBook(${book.id}, '${userEmail}')" class="btn btn-secondary btn-sm">Update</button>
                    <button onclick="deleteBook(${book.id}, '${userEmail}')" class="btn btn-danger btn-sm">Delete</button>
                    
                </td>
            </tr>
        `;
        bookTableBody.innerHTML += row;
    });
}

function addBook() {
    const title = prompt('Enter book title:');
    const author = prompt('Enter book author:');
    const category = prompt('Enter book category:');
    const userEmail = localStorage.getItem('email') || 'guest';

    const books = JSON.parse(localStorage.getItem(`books_${userEmail}`)) || [];
    const id = books.length > 0 ? books[books.length - 1].id + 1 : 1;
    const newBook = { id, title, author, category };
    books.push(newBook);
    localStorage.setItem(`books_${userEmail}`, JSON.stringify(books));
    displayBooks(userEmail);
}

function editBook(id, userEmail) {
    const books = JSON.parse(localStorage.getItem(`books_${userEmail}`)) || [];
    const book = books.find(b => b.id === id);

    if (book) {
        const title = prompt('Enter book title:', book.title);
        const author = prompt('Enter book author:', book.author);
        const category = prompt('Enter book category:', book.category);

        book.title = title;
        book.author = author;
        book.category = category;

        localStorage.setItem(`books_${userEmail}`, JSON.stringify(books));
        displayBooks(userEmail);
    } else {
        console.error('Book not found');
    }
}

function updateBook(id, userEmail) {
    const books = JSON.parse(localStorage.getItem(`books_${userEmail}`)) || [];
    const book = books.find(b => b.id === id);

    if (book) {
        const title = prompt('Enter new book title:', book.title);
        const author = prompt('Enter new book author:', book.author);
        const category = prompt('Enter new book category:', book.category);

        book.title = title;
        book.author = author;
        book.category = category;

        localStorage.setItem(`books_${userEmail}`, JSON.stringify(books));
        displayBooks(userEmail);
    } else {
        console.error('Book not found');
    }
}

function deleteBook(id, userEmail) {
    let books = JSON.parse(localStorage.getItem(`books_${userEmail}`)) || [];
    books = books.filter(book => book.id !== id);
    localStorage.setItem(`books_${userEmail}`, JSON.stringify(books));
    displayBooks(userEmail);
}
