import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Order = () => {
    
    const { _id } = useParams();
    const [book, setBook] = useState({});
    const {bookName, price} = book;
    useEffect(() => {
        fetch('https://floating-wildwood-70864.herokuapp.com/book/'+_id)
        .then(res => res.json())
        .then(data => setBook(data))
    },[_id])
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-7">
                    <h4>Description</h4>
                </div>
                <div className="col-md-3">
                    <h4>Quantity</h4>
                </div>
                <div className="col-md-2">
                    <h4>Price</h4>
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
        </div>
    );
};

export default Order;