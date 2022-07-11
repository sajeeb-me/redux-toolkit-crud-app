import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './booksSlice';
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const book = {
            id: uuidv4(),
            title,
            author
        };
        dispatch(addBook(book));
        navigate('/show-books', { replace: true });
    };

    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label htmlFor="title">Title: </label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        required
                    />
                </div>
                <div className='form-field'>
                    <label htmlFor="title">Author: </label>
                    <input
                        onChange={(e) => setAuthor(e.target.value)}
                        type="text"
                        name="title"
                        id="title"
                        value={author}
                        required
                    />
                </div>
                <button type='submit'>Add book</button>
            </form>
        </div>
    )
}

export default AddBook