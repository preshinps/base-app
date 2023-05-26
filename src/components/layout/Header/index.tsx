import { Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

type Props = any;

function Header(props: Props) {
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem("authToken");
    nav("/login");
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Button onClick={logout}>Log out</Button>
    </div>
  );
}

export default Header;
