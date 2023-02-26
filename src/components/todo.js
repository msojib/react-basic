import BackDrop from "./BackDrop"
import Modal from "./Modal"
import { useState } from "react"

function Todo(props){
    const[modalIsOpen, setModalIsOpen] = useState(false);
    function deleteHandler(){
        setModalIsOpen(true);
    }
    function deleteModal(){
        setModalIsOpen(false);
    }
    return(
        <div>
            
            <div className="card">
            <h1>{props.text}</h1>
                <div className='actions'>
                    <button className='btn' onClick={deleteHandler}>Delete</button>
                </div>
            </div>
            {modalIsOpen && <Modal onCancel={deleteModal} onConfrim={deleteModal} />}
            {modalIsOpen && <BackDrop OnTest={deleteModal} />}
          
        </div>
    )
}
export default Todo