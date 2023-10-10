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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fuga qui voluptas tempora nemo porro incidunt nisi deleniti repudiandae eligendi, eaque minus at distinctio aspernatur nostrum nulla iusto atque perspiciatis?
                    Blanditiis harum aperiam enim. Et itaque vero odio libero unde, sunt quae nulla dolore distinctio? Officia mollitia dolorem esse facilis quo sint. Sed placeat cupiditate accusamus molestias est laborum magnam!
                    Commodi excepturi ducimus aspernatur dolorem corrupti asperiores officia hic, necessitatibus fuga doloremque dolore dicta deleniti molestias sit pariatur laborum vel quas ut? Laborum natus saepe placeat autem optio quasi enim.
                    Molestias eaque nihil perspiciatis adipisci repellendus nobis, quidem recusandae natus. Molestias necessitatibus modi eius dignissimos, saepe sequi. Cum fugit fuga suscipit sed, similique minima dolorum cupiditate nam. Eius, a porro.
                    Quisquam eligendi esse earum suscipit tempore beatae quidem iure itaque corporis doloremque harum dolores aperiam, incidunt numquam? Perspiciatis, molestias quasi delectus in nisi laboriosam voluptatum doloribus qui quae totam minima?
                </div>

            </div>
        </div>
    )
}

export default BookModal;