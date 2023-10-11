import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import "../css/DeleteBook.css";

const DeleteBook = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDeleteBook = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:5555/books/${id}`)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error occured. Please check the console.');
                console.log(error);
            })
    }

    const handleCancel = () => {
        navigate('/');
    }

    return (
        <>
            <NavBar pagename={"Delete Book"} />
            <div className='main-area' >
                <BackButton />
            {
                loading ? (
                    <Loading />
                ) : (
                    ''
                )
                }
                <div className='box' >
                    <div className='delete-page' >
                        <div className='delete-prompt' >Are you sure you want to delete this book?</div>
                        <div className='delete-btn' >
                            <button onClick={handleDeleteBook} >
                                Yes, Delete it
                            </button>
                            <button onClick={handleCancel} >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DeleteBook