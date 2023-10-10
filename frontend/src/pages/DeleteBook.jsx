import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

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

    return (
        <div>
            <BackButton />
            <h3>Delete Book</h3>
            {
                loading ? (
                    <Loading />
                ) : (
                    ''
                )
            }
            <div>
                <h3>Are you sure you want to delete this book?</h3>
                <button onClick={handleDeleteBook} >
                    Yes, Delete it
                </button>
            </div>
        </div>
    )
}

export default DeleteBook