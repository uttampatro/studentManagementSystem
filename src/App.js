import './App.css';
import Home from './pages/home';
import Login from './pages/login/index';
import Register from './pages/register/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddStudent from './pages/addStudent';
import UpdateStudent from './pages/updateStudent';

function App() {
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        const userExists = localStorage.getItem('user');
        userExists ? setIsAuth(true) : setIsAuth(false);
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <div className="app_body">
                    <Routes>
                        {!isAuth ? (
                            <>
                                <Route
                                    path="/"
                                    element={
                                        <Login auth={() => setIsAuth(true)} />
                                    }
                                />
                                <Route
                                    path="/register"
                                    element={
                                        <Register
                                            auth={() => setIsAuth(true)}
                                        />
                                    }
                                />
                            </>
                        ) : (
                            <>
                                <Route
                                    path="/home"
                                    element={
                                        <Home auth={() => setIsAuth(false)} />
                                    }
                                />
                                <Route
                                    path="/addStudent"
                                    element={
                                        <AddStudent
                                            auth={() => setIsAuth(false)}
                                        />
                                    }
                                />
                                <Route
                                    path="/updateStudent/:_id"
                                    element={
                                        <UpdateStudent
                                            auth={() => setIsAuth(false)}
                                        />
                                    }
                                />
                            </>
                        )}
                        <Route path="*" />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
