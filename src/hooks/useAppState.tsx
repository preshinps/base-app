import { useContext } from "react";
import AuthContext from "../context/AppContex";

const useAppState = () => useContext(AuthContext);
export default useAppState;
