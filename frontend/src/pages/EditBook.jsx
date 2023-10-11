import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import "../css/EditBook.css";

const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setAuthor(response.data.author);
                setPublishYear(response.data.publishYear);
                setTitle(response.data.title);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                alert('An error occured. Please check the console.');
                console.log(error);
            })
    }, [])

    const handleEditBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };

        setLoading(true);
        axios
            .put(`http://localhost:5555/books/${id}`, data)
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
        <>
            <NavBar pagename={"Edit Book"} />
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
                                    <button onClick={handleEditBook} className='edit-btn' >
                                        Save Changes
                                    </button>
                                </div>

                            </div>
                )
            }
            </div >
            <Footer />
        </>
    )
}

export default EditBook;