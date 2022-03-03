import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroeScreen } from '../components/heroe/HeroeScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <Routes>
              
                <Route path='/' element={ <Navbar /> }>
                    <Route exact="true" path='/marvel' element={ <MarvelScreen /> } /> 
                    <Route exact="true" path='/heroe/:heroeId' element={ <HeroeScreen /> } />
                    <Route exact="true" path='/dc' element={ <DcScreen /> } />           
                    {/* Si no hace match se navega hacia "/" */}
                    <Route path='*' element={ <Navigate replace to="/" /> } />
                </Route>

                {/* <Route path='/' element={ <DashboardRoutes /> } />  */}
                <Route exact="true" path='/login' element={  <LoginScreen /> } />
                {/* Si no hace match renderiza el componete <NotFound />  
                <Route path='*' element={<NotFound /> } /> */}
               
                {/* Si no hace match se navega hacia "/" */}
                {/* <Route path='*' element={ <Navigate replace to="/" /> } />  */}
            </Routes>
        </div>

    </Router>
  )
}
