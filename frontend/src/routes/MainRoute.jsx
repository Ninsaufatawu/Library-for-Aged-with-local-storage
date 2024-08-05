
import { Routes, Route } from 'react-router-dom';
import {HomePage} from '../pages/HomePage';



export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
    </Routes>
  );
};

export default MainRoute;
