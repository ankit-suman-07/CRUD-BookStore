import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

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
            <div className='header' >
                <h3>Books List</h3>
                <Link to='/books/create' >
                    <MdOutlineAddBox />
                </Link>
            </div>
            {
                loading ? (
                    <Loading />
                ) : (
                    <table>
                        <thead >
                            <tr>
                                <th>No.</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Year</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map((book, index) => (
                                    <tr key={book._id} >
                                        <td>{index + 1}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.publishYear}</td>
                                        <td>
                                            <div>
                                                <Link to={`/books/details/${book._id}`}>
                                                    <BsInfoCircle />
                                                </Link>
                                                <Link to={`/books/edit/${book._id}`}>
                                                    <AiOutlineEdit />
                                                </Link>
                                                <Link to={`/books/delete/${book._id}`}>
                                                    <MdOutlineAddBox />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}

export default Home