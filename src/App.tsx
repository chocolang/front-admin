import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
//import "./App.css";
import Layout from "./components/Layout";
import { UtilStorage } from "./lib/util/UtilStorage";
import { RootState } from "./modules";
import { changeToken } from "./modules/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import More from "./pages/More";
import WordListPage from "./pages/WordListPage";
import WordEditPage from "./pages/WordEditPage";
import WordCreatePage from "./pages/WordCreatePage";
import WordPage from "./pages/WordPage/indext";

function App() {
  console.log('[App] start...')
  const dispatch = useDispatch();
  const userToken = useSelector((state: RootState) => state.auth.userToken);
  useEffect(() => {
    let token = UtilStorage.getToken();
    dispatch(changeToken(token));
  }, [dispatch]);

  return userToken ? (
    <div className="App">
      <Layout>
        <Route component={Home} path="/" exact></Route>
        <Route component={More} path="/more"></Route>
        <Route component={WordListPage} path="/wordList"></Route>
        <Route component={WordCreatePage} path="/wordCreate"></Route>
        <Route component={WordPage} path="/wordPage/:id"></Route>
        <Route component={WordEditPage} path="/wordEdit/:id"></Route>
      </Layout>
    </div>
  ) : (
    <div>
      <Login />
    </div>
  );
}

export default App;
