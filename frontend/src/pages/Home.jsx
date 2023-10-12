import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import BookList from '../components/BookList';
import "../css/Home.css";

import Add from "../assets/add.png";
import Card from "../assets/card.png";
import List from "../assets/list.png";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState(true);
    console.log('home');

    const handleViewList = () => {
        setView(true);
    }

    const handleViewCard = () => {
        setView(false);
    }

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    return (
        <div className='App' >
            <nav>
                <NavBar pagename={"Home"} />
            </nav>
            <div className='main-area' >

                <div className='header' >

                    <Link to='/books/create' className='link' >
                        <img src={Add} alt='image' />
                    </Link>
                    <span>Books List</span>
                    <div className='view-btn' >
                        <button onClick={handleViewCard} >
                            <img src={Card} alt='image' />
                        </button>
                        <button onClick={handleViewList} >
                            <img src={List} alt='image' />
                        </button>
                    </div>
                </div>
            {
                loading ? (
                    <Loading />
                ) : (
                            view ? (
                                <div className='content'>
                                    <div className='table-head' >
                                        <span>No.</span>
                                        <span>Title</span>
                                        <span>Author</span>
                                        <span>Year</span>
                                        <span>Operations</span>
                                    </div>

                                    {
                                        books.map((book, index) => (
                                            <BookList key={book._id} book={book} index={index} />

                                        ))
                                    }
                                </div>

                            ) : (

                                <div className='content-card'>
                                            {

                                            books.map((book, index) => (
                                                <BookCard key={book._id} book={book} index={index} />
                                                )
                                            )


                                            }
                                </div>

                            )

                )
                }
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home;