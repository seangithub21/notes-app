import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { LinearProgress } from "@mui/material";

import { paths } from "configs/routes";

import Layout from "components/Layout";

const NotesListPage = lazy(() => import("pages/NotesListPage"));
const NoteDetailsPage = lazy(() => import("pages/NoteDetailsPage"));

const routes = [
  {
    path: paths.notes,
    Component: <NotesListPage />,
  },
  {
    path: paths.noteDetails,
    Component: <NoteDetailsPage />,
  },
];

function App() {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<Layout>{route.Component}</Layout>}
          />
        ))}
        <Route path="*" element={<div />} />
      </Routes>
    </Suspense>
  );
}

export default App;
