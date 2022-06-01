import React, {useState} from 'react'
import { Modal } from 'react-bootstrap';
import "../css/Button.css";

function HTP() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <div id='center'>
            <button className="button-30" onClick={handleShow} >How To Play</button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              id="modal"
            >
              <Modal.Header closeButton id="modalHeader">
                <Modal.Title>How To Play</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p> - Pemain akan memilih karakter yang akan digunakan pada menu pilih karakter. </p>
                <p> - Pemain memasukan nama pemain yang akan digunakan. </p>
                <p> - Pemain akan memulai permainan pada hari Minggu jam 00.00. </p>
                <p> - Pemain akan bermain selama satu minggu (7 hari) waktu dalam permainan. </p>
                <p> - Pemain akan memenangkan permainan jika pemain berhasil bertahan selama satu minggu (7 hari). </p>
                <p> - Pemain akan kalah jika ada salah satu bar dalam permainan yang mencapai 0. </p>
              </Modal.Body>
              <Modal.Footer>
                <p>Selamat Bermain</p>
              </Modal.Footer>
            </Modal>
          </div>
    </div>
  )
}

export default HTP