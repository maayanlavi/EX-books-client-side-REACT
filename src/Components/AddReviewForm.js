import React, { useEffect, useState } from 'react';

const AddReviewForm = ({ onSubmit, reviewToEdit, buttonText }) => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [stars, setStars] = useState('');
    useEffect(() => {
        if (reviewToEdit) {
            setText(reviewToEdit.text)
            setName(reviewToEdit.name);
            setStars(reviewToEdit.stars);
        }
        else {
            setText('')
            setName('');
            setStars('');
        }
    }, [reviewToEdit])
    const labelStyle = {
        height: '60px',
        width: '150%',
        marginTop: '10px',
        borderRadius: '5px',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '18px',
        border: '2px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '25%'

    }
    const onResetForm = () => {
        setName('');
        setText('');
        setStars('')
    }

    return (
        <form
            className="form"
            style={{ width: '100%', height: '100%', position: 'absolute', top: '-50px' }}
            onSubmit={(e) => onSubmit(e, { name, text, stars }, onResetForm)}>
            <label>
                <input
                    style={labelStyle}
                    placeholder="NAME"
                    type="text" name="name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                <input
                    style={labelStyle}
                    placeholder="TEXT"
                    type="text"
                    name="text"
                    value={text}
                    required
                    onChange={(e) => setText(e.target.value)} />
            </label>
            <br />
            <label>
                <input
                    type="number"
                    id="stars"
                    min="1"
                    max="5"
                    class="form-control"
                    placeholder="STARS"
                    style={labelStyle}
                    name="stars"
                    value={stars}
                    required
                    onChange={(e) => setStars(e.target.value)} />
            </label>
            <br />
            <button style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', color: 'black', width: '100%', height: '60px', border: '3px solid #8C6630', borderRadius: '5px', marginTop: '16px', fontWeight: '700', fontSize: '16px', marginLeft: '50%' }} type='submit'>{buttonText}</button>
        </form>
    )
}


export default AddReviewForm;