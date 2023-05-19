import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Register = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        console.log({fullName: fullName, email: email,password: password, confirmPassword: confirmPassword});

        navigate('/profilePage');
    }

    return (
        <>
            <header>
                <h1>Sports Club</h1>
            </header>

            <main>
                <form onSubmit={submitForm}>

                    <p></p>
                    <label>Full Name:</label>
                    <input type='text' value={fullName} onChange={(e) => setFullName(e.target.value)}></input>
                    <p></p>
                    <label>Email:</label>
                    <input type='text'  value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <p></p>
                    <label>Password:</label>
                    <input type='password'  value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <p></p>
                    <label>Confirm Password:</label>
                    <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    
                    <p></p>
                    <button>Sign Up!</button>

                </form>
                <p><a href="/login">Already have an account? Login here.</a></p>
            </main>
        </>
    );

}
export default Register;