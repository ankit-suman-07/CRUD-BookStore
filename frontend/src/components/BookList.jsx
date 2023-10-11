import React, { useState } from 'react';
import "../css/Home.css";
import { Link } from 'react-router-dom';
import BookModal from './BookModal';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { BiShow } from 'react-icons/bi';

import ModalIcon from "../assets/modal.png";
import ShowIcon from "../assets/show.png";
import EditIcon from "../assets/edit.png";
import DeleteIcon from "../assets/bin.png";

const BookList = ({ book, index }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='table-row' >
            <span>{index + 1}</span>
            <span>{book.title}</span>
            <span>{book.author}</span>
            <span>{book.publishYear}</span>
            <span>
                <div className='operations' >
                    <button onClick={() => setShowModal(true)} >
                        <img src={ModalIcon} />
                    </button>
                    <Link to={`/books/details/${book._id}`} className='link' >
                        <img src={ShowIcon} />
                    </Link>
                    <Link to={`/books/edit/${book._id}`} className='link' >
                        <img src={EditIcon} />
                    </Link>
                    <Link to={`/books/delete/${book._id}`} className='link' >
                        <img src={DeleteIcon} />
                    </Link>
                </div>
            </span>
            {
                showModal && (
                    <BookModal book={book} onClose={() => setShowModal(false)} />
                )
            }
        </div>
    )
}

export default BookList