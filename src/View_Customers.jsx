import { useState } from "react";
import "./style.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import CustomerTable from "./CustomerTable.jsx";
import axios from "axios";

const View_Customers = () => {
    //useState for modal closing and opening
    const [value, setValue] = useState(false);
    //const [value2, setValue2] = useState(false);
    const [user, setUser] = useState({
        name1: "", name2: "", amount: ""
    });
    const d = new Date();
    var name, val;

    const setHomePage = () => {
        window.location.assign(`http://localhost:${window.location.port}/`)
    }
    const setViewPage = () => {
        window.location.assign(`http://localhost:${window.location.port}/view_customers`)
    }
    const setAboutPage = () => {
        window.location.assign(`http://localhost:${window.location.port}/about_page`)

    }

    const closeModel = () => {
        setValue(false);
    }
    const openButton = () => {
        setValue(true);
    }
    const eventHandle = (e) => {
        name = e.target.name;
        val = e.target.value;
        
        setUser({ ...user, [name]: val });
    }

    const AddEvent = () => {
        var AfterSubmitFormName1 = document.getElementById("AfterSubmitFormName1").value;
        var AfterSubmitFormName2 = document.getElementById("AfterSubmitFormName2").value;
        var AmountToSend = parseInt(document.getElementById("AmountToSend").value);


        const SenderAccount = AfterSubmitFormName1 + "demo";
        const SenderAmountInAccount = parseInt(document.getElementById(SenderAccount).innerHTML);
        if (AmountToSend > SenderAmountInAccount) {
            alert("OOPS!!Insufficient Balance")
        }
        else {
            var ReceiverAccount = AfterSubmitFormName2 + "demo";
            var RecieverAmountInAccount = parseInt(document.getElementById(ReceiverAccount).innerHTML);
            var FinalMoneyInSenderAccount = SenderAmountInAccount - AmountToSend;
            var FinalMoneyInReceiverAccount = RecieverAmountInAccount + AmountToSend;
            document.getElementById(SenderAccount).innerHTML = FinalMoneyInSenderAccount;
            document.getElementById(ReceiverAccount).innerHTML = FinalMoneyInReceiverAccount;
            alert(`Successful Transaction !!  
                  Rs. ${AmountToSend} is sent to ${AfterSubmitFormName2}`);
            //console.log(Input);

        }
    }
    const onSubmit = () =>{
        
        const TransferDetails = {
            name1 : user.name1,
            name2 : user.name2,
            amount : user.amount
        }
        axios.post("http://localhost:4000/app/view_customers", TransferDetails)
        .then(response=>console.log(response.data))

        alert("Details submitted in records...")

    }
    const Double = () =>{
        onSubmit();
        AddEvent();
    }
    const TableBtn = () => {


        if (document.getElementById("displaytable").style.display === "none") {
            document.getElementById("displaytable").style.display = "block";
            document.getElementById("getdate").innerHTML = d;
        }
        else {
            document.getElementById("displaytable").style.display = "none";

        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" className="link1 m-3" onClick={setHomePage}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" className="link1 m-3" onClick={setViewPage}>View Customers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" className="link1 m-3" onClick={setAboutPage}>About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br />
            <br />
            <h1 className="text-center text-decoration-underline text-danger">Customer Details</h1>
            <br />
            <div className="buttoncenter">
            <button className="text-center btn btn-primary m-2" onClick={openButton} >Pay here</button>
            </div>
            {/*For displaying Modal form */}
            <Modal show={value} onHide={closeModel}>
                <Modal.Header closeButton>
                    <Modal.Title>Transaction form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group method="post" >
                        <Form.Label>Type Name here</Form.Label><br />
                        <Form.Label>From:</Form.Label>
                        <Form.Control
                            type="text"
                            name="name1"
                            value={user.name1}
                            id="AfterSubmitFormName1"
                            onChange={eventHandle}>

                        </Form.Control>
                        <Form.Label>To:</Form.Label>
                        <Form.Control
                            type="text"
                            name="name2"
                            value={user.name2}
                            id="AfterSubmitFormName2"
                            onChange={eventHandle}>

                        </Form.Control>
                        <Form.Label>Amount:</Form.Label>
                        <Form.Control
                            type="number"
                            name="amount"
                            value={user.amount}
                            id="AmountToSend"
                            onChange={eventHandle}>

                        </Form.Control><br />
                        <button className="btn-dark button_style p-2" type="submit" onClick={Double} >Send</button>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <button className="button_style btn-dark p-2" id="buttonid" onClick={closeModel}>Close</button>

                </Modal.Footer>
            </Modal>

            {/*For displaying customer table*/}
            <CustomerTable />

            <br /><br/>
            {/*For displaying Transaction table*/}
            <div>
                <button className="btn btn-primary p-3" onClick={TableBtn}>See Recent Transaction</button>
            </div>
            <br />
            <br />

            <table className="table container-fluid mx-auto w-auto" id="displaytable" style={{ display: "none" }}>
                <thead>
                    <tr className="table-danger">
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-primary">
                        <td>{user.name1}</td>
                        <td>{user.name2}</td>
                        <td>{user.amount}</td>
                        <td id="getdate"></td>
                    </tr>

                </tbody>
            </table>


            <br />
            <br />

            {/*For displaying footer*/}

            <footer className="footer">
                <ul className="list2 p-4">
                    <li className="list2">Find us on Social media</li>
                    <li className="list-center">
                        <ul className="list2">
                            <li className="list3 m-2"><FacebookIcon /></li>
                            <li className="list3 m-2"><InstagramIcon /></li>
                            <li className="list3 m-2"><TwitterIcon /></li>
                            <li className="list3 m-2"><LinkedInIcon /></li>
                        </ul>
                    </li>
                </ul>
            </footer>


        </>
    )
}
export default View_Customers;