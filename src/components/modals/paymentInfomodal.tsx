import React from "react";
import { useState } from "react";
import { Button, Modal} from "react-bootstrap";
import { toast } from "react-toastify";



const PaymentInfoModal: React.FC<any> = ({ on, off,paymentInfo }) => {
    const [uploadedFile,setUploadedFile]=useState('');

    const handleFileUpdload = ()=>{
        if(uploadedFile) {
            off()
            toast.success('Attachement sent to Admin!')
        }
        else {
            toast.error('Payment slip not uploaded!')
        }
            }

    return (
        <div>
            <Modal show={on} centered size="lg">
                <Modal.Header className="bg-primary fw-bold text-light">
                    <div className="d-flex justify-content-between w-100">
                    <p>Payment Details</p>
                    <i onClick={()=>off()} role='button' className="bi bi-x-circle"></i>
                    </div>
                </Modal.Header>

                <Modal.Body className="">
                    <div className="d-flex flex-wrap">
                    <div className="">
                    <p className="fw-bold">Kindly make your payment to the information below and upload your evidence of payment for confirmation.</p>
                        <p className="mt-4">{`Payment Method : ${paymentInfo?.title || ''}`}</p>
                        <p>{`Email : ${paymentInfo?.email || ''}`}</p>
                        <p>{`Tag/Id : ${paymentInfo?.tag || ''}`}</p>

                    </div>

                    <div className="d-flex align-items-center justify-content-center px-3">
                        <input onChange={(e)=>setUploadedFile(e.target.value)} type="file"></input>

                    </div>

                    <div className="d-flex mt-4 align-items-center justify-content-center">
                       <Button onClick={handleFileUpdload}>Complete Order</Button>

                    </div>

                    
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}
export default PaymentInfoModal;