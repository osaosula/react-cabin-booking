//import { useState } from "react";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
export default AddCabin;

//function AddCabin() {
//const [isOpenModal, setIsOpenmodal] = useState(false);

// return (
// <div>
//   <Button onClick={() => setIsOpenmodal((show) => !show)}>
//     Add new cabin
//   </Button>
//   {isOpenModal && (
//     <Modal onCloseModal={() => setIsOpenmodal(false)}>
//       <CreateCabinForm onCloseModal={() => setIsOpenmodal(false)} />
//     </Modal>
//   )}
// </div>
//);
