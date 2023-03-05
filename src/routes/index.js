import HomePage from '@/pages/HomePage';
import DetailPage from '@/pages/DetailPage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: 'users/:id', element: <DetailPage /> },
];

export default routes;