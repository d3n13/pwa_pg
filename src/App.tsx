import { HashRouter, Route, Routes, useParams } from "react-router";
import { CommonLayout } from "./components/CommonLayout";

import blubSvg from "./bulb-svgrepo-com.svg";

import "./App.css";
import { Unmounter } from "./components/Unmounter";

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<>This is an index Route</>} />
          <Route
            path="foo"
            element={
              <>
                This is a foo Route. Here's an item that was imported into the
                component
                <Unmounter>
                  <img height={100} src={blubSvg} />
                </Unmounter>
              </>
            }
          />
          <Route path="bar/:id" element={<IdReaderPage />} />
          <Route path="bar" element={<>This is a bar Route</>} />
          <Route
            path="*"
            element={<>The page you're looking for isn't here</>}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

function IdReaderPage() {
  const { id } = useParams<{ id?: string }>();
  return <>id is {id}</>;
}
