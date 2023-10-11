import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';

const BookModal = ({ book, onClose }) => {

    return (
        <div onClick={onClose} >
            <div onClick={(event) => event.stopPropagation()} >
                <AiOutlineClose onClick={onClose} />
            </div>
            <div>
                <div>{book._id}</div>
                <div>{book.title}</div>
                <div>{book.author}</div>
                <div>{book.publishYear}</div>
                <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
                    fuga qui voluptas tempora nemo porro incidunt nisi deleniti repudiandae
                    eligendi, eaque minus at distinctio aspernatur nostrum nulla iusto atque
                    perspiciatis?
                    Blanditiis harum aperiam enim. Et itaque vero odio libero unde, sunt quae
                    nulla dolore distinctio? Officia mollitia dolorem esse facilis quo sint. 
                </div>

            </div>
        </div>
    )
}

export default BookModal;