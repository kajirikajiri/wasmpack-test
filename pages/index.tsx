import { greet } from "../wasm-pack/pkg/hello_wasm_bg.wasm";
import { useEffect } from "react";

const App = () => {
  useEffect(()=>{
    greet()
  }, [])
  return <></>
};

export default App;
