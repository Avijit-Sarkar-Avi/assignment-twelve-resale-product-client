import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routers/Router/Router';

function App({ children }) {
  return (
    <div>
      <RouterProvider router={router}>{children}</RouterProvider>
    </div>
  );
}

export default App;
