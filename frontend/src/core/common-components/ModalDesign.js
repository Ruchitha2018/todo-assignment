import React, { useState, useEffect, Fragment} from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import AddCategory from  "../category-components/AddCategory";
import EditCategory from  "../category-components/EditCategory";


const ModalDesign = props => {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        window.location.reload(false);
        setIsOpen(false);
    };
    
    const formButton = () => (
        <Fragment>  
      {props.button === "add-category" ?
         <button type="button" class="btn btn-info" onClick={showModal}>Add Category</button>: <p onClick={showModal}><i class="fa fa-edit" aria-hidden="true"></i> Edit </p>}
      </Fragment> 
    );
    
    const modalForm = () => (
        <Fragment>
            {props.element === "category" ? props.button === "add-category" ? <AddCategory /> : <EditCategory categoryId = {props.id}/> : ""}
        </Fragment>
    );
     
    useEffect(() => {
     }, []);  
    
    return(
        <Fragment>
        {formButton()}
          <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
             <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
             <Modal.Body>{modalForm()}</Modal.Body>
                 <Modal.Footer>
                    <button type="button" class="btn btn-danger" onClick={hideModal}>Cancel</button>
                </Modal.Footer>
             </Modal>
        </Fragment>
        );
};
export default ModalDesign;
