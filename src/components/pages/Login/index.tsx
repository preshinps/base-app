import { Button } from "antd";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { FormattedMessage } from "react-intl";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [authToken, setAuthToken] = useLocalStorage("authToken", null);

  // Access the state object associated with the current location
  const locationState = location.state;

  const login = () => {
    setTimeout(() => {
      const _authToken = "123456789"
      setAuthToken(_authToken);
      if (_authToken) {
        const toPath = locationState?.from?.pathname;
        navigate(toPath ?? "/");
      } else {
        navigate("/login");
      }
    }, 3000);
  };

  useEffect(() => {
    if (authToken && authToken !== "null") {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <FormattedMessage id="hello" />
      <Button onClick={login}>Login</Button>
    </div>
  );
}
