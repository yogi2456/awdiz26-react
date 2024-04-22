import React, { useState } from 'react';
// import './Profile.css';
// import Model from "react-modal"
import { Modal, ModalBody, ModalHeader, Row, Col} from "reactstrap";

const Profile = () => {
  const [load, setLoad] = useState(false)
  return (
    <div>
      <Modal size='md' isOpen={ load } toggle={() => setLoad(!load)}>
        <ModalHeader toggle={() => setLoad(!load)}>
          Popup
        </ModalHeader>
        <ModalBody>
          <form>
            <Row>
              <Col lg={12}>
              <div>
              <label htmlFor='name'>
                name
              </label>
              <input type='text' className='form-control' placeholder='name'/>
              </div>
              </Col>
              <Col lg={12}>
              <div>
              <label htmlFor='name'>
                name
              </label>
              <input type='text' className='form-control' placeholder='name'/>
              </div>
              </Col>
              <Col lg={12}>
              <div>
              <label htmlFor='name'>
                name
              </label>
              <input type='text' className='form-control' placeholder='name'/>
              </div>
              </Col>
            </Row>
          </form>
        </ModalBody>
      </Modal>
      <button className='btn mt-3' style={{backgroundColor: "#0b3629", color: "white"}} onClick={() => setLoad(true)}>
          open Model
      </button>
    </div>
  )
}

export default Profile
