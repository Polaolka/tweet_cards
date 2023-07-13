import { useSelector } from 'react-redux';
import { MainContainer } from './App.styled';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../SharedLayout/SharedLayout';
import { Loader } from 'components/Loader/Loader';
import Home from 'pages/Home';
import { selectIsLoading } from 'redux/loader/selectors';
import { ToastContainer } from 'react-toastify';

// const Home = lazy(() => import('pages/Home'));
const Tweets = lazy(() => import('pages/Tweets'));

const App = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}

      {<MainContainer>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />}/>
              <Route path="tweets" element={<Tweets />}/>
              <Route path="/*" element={<Home />} />
            </Route>
          </Routes>
          <ToastContainer/>
        </MainContainer>}
    </>
  );
};

export default App;
