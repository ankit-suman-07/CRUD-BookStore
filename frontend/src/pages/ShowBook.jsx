import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import "../css/ShowBook.css";

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
        <>
            <NavBar pagename={"Show Book"} />
            <div className='main-area' >

                <BackButton />
                {
                    loading ? (
                        <Loading />
                    ) : (
                            <div className='box' >
                                <div className='book-details'>
                                    <div className='detail-row' >
                                        <div className='book-label' >ID</div>
                                        <div>{books._id}</div>
                                    </div>
                                    <div className='detail-row' >
                                        <div className='book-label' >Title</div>
                                        <div>{books.title}</div>
                                    </div>
                                    <div className='detail-row' >
                                        <div className='book-label' >Author</div>
                                        <div>{books.author}</div>
                                    </div>
                                    <div className='detail-row' >
                                        <div className='book-label' >Year</div>
                                        <div>{books.publishYear}</div>
                                    </div>
                                    <div className='detail-row' >
                                        <div className='book-label' >Create Time</div>
                                        <div>{new Date(books.createdAt).toString()}</div>
                                    </div>
                                    <div className='detail-row' >
                                        <div className='book-label' >Update Time</div>
                                        <div>{new Date(books.updatedAt).toString()}</div>
                                    </div>
                        </div>
                        </div>
                    )
                }

            </div>
            <Footer />
        </>
    )
}

export default ShowBook;