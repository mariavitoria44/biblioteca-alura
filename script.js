document.addEventListener('DOMContentLoaded', function() {
    alert('Bem-vindo à Biblioteca Online!');
});

document.addEventListener('DOMContentLoaded', function() {
    const books = [
        { title: 'Dom Casmurro', author: 'Machado de Assis' },
        { title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis' },
        { title: 'O Primo Basílio', author: 'José de Alencar' },
    ];

    const bookList = document.getElementById('book-list');
    const searchInput = document.getElementById('search');

    function displayBooks(filteredBooks) {
        bookList.innerHTML = '';
        filteredBooks.forEach(book => {
            const listItem = document.createElement('li');
            listItem.textContent = `${book.title} - ${book.author}`;
            bookList.appendChild(listItem);
        });
    }

    function filterBooks() {
        const query = searchInput.value.toLowerCase();
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
        );
        displayBooks(filteredBooks);
    }

    searchInput.addEventListener('input', filterBooks);

    displayBooks(books);  // Exibir todos os livros inicialmente
});
<section id="register">
    <h2>Cadastro de Livro</h2>
    <form id="book-form">
        <input type="text" id="title" placeholder="Título" required>
        <input type="text" id="author" placeholder="Autor" required>
        <button type="submit">Adicionar Livro</button>
    </form>
</section>
