import React, { useEffect, useState } from "react";
import axios from 'axios';

const UpdateNews = (props) => {
    const [popupActive, setPopupActive] = useState(false);
    const [title, setTitle] = useState(props.news.title);
	const [content, setContent] = useState(props.news.content);
    
    const handleUpdateYourNews = async () => {
        await axios.put(`http://localhost:3000/api/news/${props.news._id}`, {
            userId: props.userId,
            title: title,
            content: content
        })
        .then(res => {
            alert('Update success!');
        })
        .catch(err => {
            alert(`Failed! ${err}`)
        })
	}
    
    return (
        <div>
            <i className="ti-pencil" onClick={() => setPopupActive(!popupActive)}></i>
            { popupActive ?
                (<form className='add-news-form'>
                    <p>Title</p>
                    <textarea className='popup-input popup-input-title' placeholder='Title' value={title} onChange={(event) => { setTitle(event.target.value) }}></textarea>
                    <p>Content</p>
                    <textarea className='popup-input popup-input-content' placeholder='Content' value={content} onChange={(event) => { setContent(event.target.value) }}></textarea>
                    <p>Author</p>
                    <button onClick={() => {
                        handleUpdateYourNews();
                        setPopupActive(!popupActive);
                    }}>Update</button>
                </form>) : '' }
        </div>
    )
}

export default UpdateNews;