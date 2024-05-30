// import { useEffect, useState } from "react";
import RouterAppProvider from "./routers/router";
// import { loadMyData } from "./http/http";

function App() {
  // const [token, setToken] = useState();
  // const [myInfo, setMyInfo] = useState();

  // useEffect(() => {
  //   const loadMember = async () => {
  //     const json = await loadMyData(token);

  //     setMyInfo(json.body);
  //   };
  //   loadMember();
  // }, [token]);
  // return <RouterAppProvider token={token} />;
  return <RouterAppProvider />;
}

export default App;
