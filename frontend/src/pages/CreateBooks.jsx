import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };

        setLoading(true);
        axios
            .post('http://localhost:5555/books', data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. Please Check Connection');
                console.log(error);
            })
    };

    return (
        <div>
            <BackButton />
            <h3>Create Book</h3>
            {
                loading ? (
                    <Loading />
                ) : (
                    <div>
                        <div>
                            <label>Title</label>
                            <input
                                type='text'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <label>Author</label>
                            <input
                                type='text'
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                            <label>Publish Year</label>
                            <input
                                type='number'
                                value={publishYear}
                                onChange={(e) => setPublishYear(e.target.value)}
                            />
                        </div>
                        <button onClick={handleSaveBook} >
                            Save
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default CreateBooks