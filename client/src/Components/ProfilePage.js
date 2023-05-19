import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const ProfilePage = (props) => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [photo, setPhoto] = useState(null);
    const [base64string, setBase64String] = useState("");

    const logOutButton = (e) => {
        e.preventDefault();
        navigate('/');
    }
    const photoHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setBase64String(reader.result.toString());
        }
        
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    const photoFormSubmit = (e) => {
        e.preventDefault();
        setPhoto(base64string);
        setBase64String("");
        navigate('/profilePage');
    }

    return (
        <>
            <header>
                <img src={photo} style={{
                    height: "100px",
                    width: "150px", 
                    borderRadius: "5px"}}></img>
                <h2>Logged In User Name</h2>
                <button onClick={logOutButton}>Logout</button>
                <button onClick={(e) => navigate('/editProfile')}>Edit your Information</button>
                <button onClick={(e) => navigate('/photos')}>Photos</button>
                <button onClick={(e) => navigate('/feed')}>Feed</button>
            </header>
            <main>
                <div className="Information">
                    <h4>Information</h4>
                    <p>Lives in city,state</p>
                    <p>current sport</p>
                    <p>currently playing for sport team</p>
                    <p>birthday</p>
                    <p>gender</p>
                    <p>joined on</p>
                </div>
                <div className="What's-New--Add-Photo">
                    <form>
                        <label>Whats New</label>
                        <textarea></textarea>
                    </form>
                    <form onSubmit={photoFormSubmit}>
                        <label>Add photo</label>
                        <input type='file' onChange={photoHandler}></input>
                        <button>Add Photo</button>
                    </form>
                </div>
                <div className="Posts">
                    <p><b>User Name</b></p>
                    <p>post</p>
                    <p><button>Like</button> number of likes</p>
                    <p><button>Comment</button></p>
                    <button>Delete</button>
                </div>
            </main>
        </>
    );
}
export default ProfilePage;