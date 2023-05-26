import {
  Route,
  Navigate,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import useAuthToken from "../hooks/useAuthToken";
import { Layout } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function PrivateRoute() {
  const isToken = useAuthToken();
  const location = useLocation();

  return isToken && isToken !== "null" ? (
    <Layout>
      <Header className="!bg-primary">
        <div className="text-white">
        Header
        </div>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}

export default PrivateRoute;
