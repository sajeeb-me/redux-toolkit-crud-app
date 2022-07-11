import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from './booksSlice';

const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books);
    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deleteBook(id))
    }

    return (
        <div>
            <h2>List of Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books && books.map((books) => {
                            const { id, title, author } = books;
                            return <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{author}</td>
                                <td>
                                    <button>
                                        Edit
                                    </button>
                                    <button onClick={() => { handleDelete(id) }}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BooksView