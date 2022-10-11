import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main/Main';

function App() {
  const routes = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
      {path:'/', element:<Topics></Topics>, loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz')},
      {path:'/topics', element:<Topics></Topics> , loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz')},
      {path:'/statistics', element:<Statistics></Statistics>},
      {path:'/blog', element:<Blog></Blog>},
      {path:'*', element:<Error></Error>}
    ]}
  ])
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
