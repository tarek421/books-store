import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './CheckOut.css'

const CheckOut = () => {

    const { _id } = useParams();
    const [book, setBook] = useState({});
    const {bookName, price} = book;
    useEffect(() => {
        fetch('https://floating-wildwood-70864.herokuapp.com/book/'+_id)
        .then(res => res.json())
        .then(data => setBook(data))
    },[_id])

    const history = useHistory()
    const handleOrderNow = (_id) => {
        history.push(`/order/${_id}`);
    }

    return (
        <div className="container">
            <h3>Check Out</h3>
            <div className="checkOut">
            <div className="row">
                <div className="col-md-7">
                    <h4>Description</h4>
                </div>
                <div className="col-md-3">
                    <h4 style={{textAlign:'center'}}>Quantity</h4>
                </div>
                <div className="col-md-2">
                    <h4 style={{textAlign:'center'}}>Price</h4>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-7">
                    <h4>{bookName}</h4>
                </div>
                <div className="col-md-3">
                    <h4 style={{textAlign:'center'}}>1</h4>
                </div>
                <div className="col-md-2">
                    <h4 style={{textAlign:'center'}}>{price}</h4>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-7">
                    <h4>Total</h4>
                </div>
                <div className="col-md-3">
                    <h4 style={{textAlign:'center'}}>1</h4>
                </div>
                <div className="col-md-2">
                    <h4 style={{textAlign:'center'}}>{price}</h4>
                </div>
            </div>
            <Button onClick={()=>handleOrderNow(_id)} style={{width:'100px', marginLeft: '86%', marginTop: '20px'}} variant="contained" size="small" color="secondary">Order</Button>
            </div>
        </div>
    );
};

export default CheckOut;