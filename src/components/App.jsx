import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<HomePage />} />
      <Route path="/movies" element={<MovieSearchPage />} />
      <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
      <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};
