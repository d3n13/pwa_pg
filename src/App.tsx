import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Route, HashRouter, Routes, useParams } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter basename="/pwa_pg/">
      <Routes>
        <Route
          path="/foo"
          element={
            <>
              <Link to="/hello">go to hello</Link>
              <Link to="/hello/123">go to hello 123</Link>
            </>
          }
        />
        <Route path="/hello/:id" element={<IdReaderPage />}></Route>
        <Route
          path="/hello"
          element={
            <>
              <Link to="/foo">go to foo</Link>
              <div>
                <a href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img
                    src={reactLogo}
                    className="logo react"
                    alt="React logo"
                  />
                </a>
              </div>
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </>
          }
        ></Route>
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </HashRouter>
  );
}

function IdReaderPage() {
  const { id } = useParams<{
    id: string;
  }>();

  return (
    <>
      <p>id is {id}</p>
      <Link to="/foo">go to foo</Link>
    </>
  );
}

export default App;
