import GoogleButton from 'react-google-button';
import { useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    let navigate = useNavigate();
    let auth = getAuth();
    let googleProvider = new GoogleAuthProvider();
    const signIn = () => {
        signInWithPopup(auth, googleProvider)
        .then((res) => {
            localStorage.setItem('userEmail', res.user.email)
        })
        .catch((error) => {
            console.log(error);
        });
    };
    useEffect(() => {
        onAuthStateChanged(auth, (response) => {
            if(response) {
                navigate('/home');
            }
            else {
                navigate('/');
            }
        })
    }, []);
    return (
        <div className = 'google-btn'>
            <GoogleButton onClick = {signIn}/>
        </div>
    );
}