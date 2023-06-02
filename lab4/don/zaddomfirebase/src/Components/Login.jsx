import { logInWithGoogle, logInWithGithub, useUser, logout } from "../Firebase/AuthService";
const Login = () => {

    const user = useUser();
    if(user){
        return (
            <div>
                <h2>You are logged in as {user.displayName}</h2>
                <button onClick={logout}>Log me out</button>
            </div>
            );    
    }
    return (
        <div>
            <h2>Please log in</h2>
            <button onClick={logInWithGoogle}>Login with Google</button>
            <button onClick={logInWithGithub}>Login with Github</button>
        </div>
        );
}

export default Login;