import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import CloseIcon from "../assets/close.png";
import "../css/BookModal.css";

const BookModal = ({ book, onClose }) => {

    return (
        <div onClick={onClose} className='modal-box' >
            <div className='modal-inner' >
                <div className='modal-top' >

                    <div onClick={(event) => event.stopPropagation()} >
                        <img src={CloseIcon} onClick={onClose} />
                    </div>
                </div>

                <div className='modal-data' >
                    <div><label>ID :</label> {book._id}</div>
                    <div><label>Title :</label> {book.title}</div>
                    <div><label>Author :</label> {book.author}</div>
                    <div><label>Year :</label> {book.publishYear}</div>
                    <div className='modal-para' >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
                    fuga qui voluptas tempora nemo porro incidunt nisi deleniti repudiandae
                    eligendi, eaque minus at distinctio aspernatur nostrum nulla iusto atque
                    perspiciatis?
                    Blanditiis harum aperiam enim. Et itaque vero odio libero unde, sunt quae
                    nulla dolore distinctio? Officia mollitia dolorem esse facilis quo sint. 
                </div>

                </div>
            </div>
        </div>
    )
}

export default BookModal;