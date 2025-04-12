import { HashRouter, Route, Routes, useParams } from "react-router";
import { CommonLayout } from "./components/CommonLayout";
import "./App.css";

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<>This is an index Route</>} />
          <Route path="foo" element={<>This is a foo Route</>} />
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
  return <p>id is {id}</p>;
}
