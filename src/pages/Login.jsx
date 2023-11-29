import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { currentUser, signinWithGoogle } = UserAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  // redirect to /chat after getting access
  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there 👋</h1>
          <p className="py-6">
            Join the conversation, meet new people, and make connections in one
            shared room.
          </p>
          <button onClick={handleLogin} className="btn btn-primary">
            LOGIN WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
