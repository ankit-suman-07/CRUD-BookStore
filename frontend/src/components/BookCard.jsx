import React, { useState } from 'react';
import { BiShow } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineAddBox } from 'react-icons/md';
import { Link } from 'react-router-dom';
import BookModal from './BookModal';
import ModalIcon from "../assets/modal.png";
import ShowIcon from "../assets/show.png";
import EditIcon from "../assets/edit.png";
import DeleteIcon from "../assets/bin.png";
import "../css/BookCard.css";

function BookCard({ book, index }) {
    const [showModal, setShowModal] = useState(false);
    return (

        <div className='card' >
            <span className='cart-title' >{book.title}</span>
            <div className='card-body' >
                <span><b>Author :</b>  {book.author}</span>
                <span><b>Year :</b> {book.publishYear}</span>
            </div>

            <div className='card-operations' >
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
            {
                showModal && (
                    <BookModal book={book} onClose={() => setShowModal(false)} />
                )
            }
        </div>

    )
}

export default BookCard