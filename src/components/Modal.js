function Modal(props){
    function cancelModal(){
        props.onCancel();
    }
    function confirmlModal(){
        props.onConfrim();
    }
    return(
        <div className="modal">
            <p>Are You Sure?</p>
            <button className="btn btn--alt" onClick={cancelModal}>Cancel</button>
            <button className="btn" onClick={confirmlModal}>Delete</button>
        </div>
    )
}
export default Modal;