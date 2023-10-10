import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';

const ShowBook = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setBooks(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <BackButton />
            <h3>Show Book</h3>
            {
                loading ? (
                    <Loading />
                ) : (
                    <div>
                        <div>
                            <span>ID</span>
                            <span>{books._id}</span>
                        </div>
                        <div>
                            <span>Title</span>
                            <span>{books.title}</span>
                        </div>
                        <div>
                            <span>Author</span>
                            <span>{books.author}</span>
                        </div>
                        <div>
                            <span>Year</span>
                            <span>{books.publishYear}</span>
                        </div>
                        <div>
                            <span>Create Time</span>
                            <span>{new Date(books.createdAt).toString()}</span>
                        </div>
                        <div>
                            <span>Update Time</span>
                            <span>{new Date(books.updatedAt).toString()}</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ShowBook;