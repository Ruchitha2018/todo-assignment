import React, { useState, useEffect, Fragment} from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import AddCategory from  "../category-components/AddCategory";
import EditCategory from  "../category-components/EditCategory";

import AddTask from  "../task-components/AddTask";
import EditTask from  "../task-components/EditTask";



const ModalDesign = props => {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        window.location.reload(false);
        setIsOpen(false);
    };
    
    const categoryFormButton = () => (
        <Fragment>  
      {props.button === "add-category" ?
         <button type="button" class="btn btn-info" onClick={showModal}>Add Category</button>: <p onClick={showModal}><i class="fa fa-edit" aria-hidden="true"></i> Edit </p>}
      </Fragment> 
    );
    
    const categoryModalForm = () => (
        <Fragment>
            {props.button === "add-category" ? <AddCategory /> : <EditCategory categoryId = {props.id}/>}
        </Fragment>
    );
    
    const taskFormButton = () => (
        <Fragment>  
      {props.button === "add-task" ?
         <button type="button" class="btn btn-info" onClick={showModal}>Add Task</button>: <p onClick={showModal}><i class="fa fa-edit" aria-hidden="true"></i> Edit </p>}
      </Fragment> 
    );
    
    const taskModalForm = () => (
        <Fragment>
            {props.button === "add-task" ? <AddTask categoryId = {props.id} /> : <EditTask taskId = {props.id}/>}
        </Fragment>
    );
     
    useEffect(() => {
     }, []);  
    
    return(
        <Fragment>
        {props.element === "category" ? categoryFormButton() : taskFormButton()}
          <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
             <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
             <Modal.Body>{props.element === "category" ? categoryModalForm() : taskModalForm()}</Modal.Body>
                 <Modal.Footer>
                    <button type="button" class="btn btn-danger" onClick={hideModal}>Cancel</button>
                </Modal.Footer>
             </Modal>
        </Fragment>
        );
};
export default ModalDesign;
