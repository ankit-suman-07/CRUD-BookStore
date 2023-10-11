import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import "../css/EditBook.css";

const CreateBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

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
                enqueueSnackbar('Book Created Successfully', { variant: 'success' })
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error', { variant: 'error' })
                //alert('An error happened. Please Check Connection');
                console.log(error);
            })
    };

    return (
        <>
            <NavBar pagename={"Create Book"} />
            <div className='main-area' >
                <BackButton />
                {
                loading ? (
                    <Loading />
                ) : (
                            <div className='box' >
                                <div className='edit-form' >
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

                                    <button onClick={handleSaveBook} className='edit-btn' >
                                        Save
                                    </button>
                                </div>
                    </div>
                )
            }
            </div>
        </>
    )
}

export default CreateBooks