import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddBook.css';

const AddBook = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL , setImageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            bookName: data.bookName,
            authorName: data.authorName,
            price: data.price,
            imageURL :imageURL
        }
        const url = `https://floating-wildwood-70864.herokuapp.com/addBook`;
        console.log(eventData)

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res))
    };


    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '8bdf5eaf2ced933b204dba05036a6893');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(function(response) {
            setImageURL(response.data.data.display_url);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    return (
        <div>
            <form className="container" onSubmit={handleSubmit(onSubmit)}>
                <div className="row formStyle">
                    <div className="col-md-6">
                        <h5>Book Name</h5>
                        <input defaultValue="" placeholder='Enter Book Name' {...register("bookName")} />
                    </div>

                    <div className="col-md-6">
                        <h5>Author Name</h5>
                        <input placeholder='Enter Author Name' {...register("authorName")} />
                    </div>

                    <div className="col-md-6">
                        <h5>Add Price</h5>
                        <input placeholder='Enter Price' {...register("price")} />
                    </div>

                    <div className="col-md-6">
                        <h5>Add Book Cover Photo</h5>
                        <input type="file" name= "exampleRequired" onChange={handleImageUpload} />
                    </div>

                </div>
                <input className='s-btn' type="submit" />
            </form>
        </div>
    );
};

export default AddBook;
