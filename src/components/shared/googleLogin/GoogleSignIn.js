import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignInGoogle = ({ setUserPayload }) => {
  const navigate = useNavigate();

  const CustomerSignUp = async (signUpPayload) => {
    try {
      // const response = await api.auth.signupUser(signUpPayload);
      // console.log("======>email login", response);
      // setUser(response);
      // navigate("/customer/premium-leads");
    } catch (error) {
      toast.error("Error! Wrong credentials. Please try again.");
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(res.data);
        const signUpPayload = {
          first_name: res.data.given_name,
          middle_name: "",
          last_name: res.data.family_name,
          email: res.data.email,
          role: "CUSTOMER", // Default role
          password: res.data.sub,
        };
        CustomerSignUp(signUpPayload);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <GoogleLogin
      size="large"
      shape="circle"
      text="continue_with"
      width={600}
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default SignInGoogle;
