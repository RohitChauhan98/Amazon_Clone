import{ auth, googleProvider } from '../config/firebase'
import{createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth'

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const signIn = async () =>{
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.log(err)
        }
    };

    const signInWithGoogle = async() =>{
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async() =>{
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    }
}