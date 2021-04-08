import { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://floating-wildwood-70864.herokuapp.com/books')
            .then(response => response.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                {
                    books.map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Home;