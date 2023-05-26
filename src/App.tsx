import { Button, ConfigProvider } from "antd";
// import "./App.css";
// import 'antd/dist/reset.css';
import { StyleProvider } from "@ant-design/cssinjs";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRouter";
import AppProvider from "./context/AppProvider";

function App() {

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3CB136',
          fontFamily: "Poppins, -apple-system, ui-sans-serif, system-ui",
        },
      }}
    >
      <StyleProvider hashPriority="high">
        <AppProvider>
          {/* <div className="flex justify-center items-center h-screen w-screen flex-col"> */}
          {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
          {/* <Button type="primary">TEST</Button> */}
          {/* </div> */}
          {/* <RouterProvider router={router} /> */}
          <AppRoutes />
        </AppProvider>
      </StyleProvider>
    </ConfigProvider>
  );
}

export default App;
