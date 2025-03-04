import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './pages/Home/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PhoneVerification } from "./pages/PhoneVerification/PhoneVerification";
import { SelectDate } from "./pages/SelectDate/SelectDate";
import { SelectField } from "./pages/SelectField/SelectField";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import TeamProfilePage from './pages/TeamProfile/TeamProfilePage';
import { User } from 'firebase/auth';
import { auth, onAuthStateChanged } from "./firebase";
import LoadingPage from './pages/Loading/LoadingPage';

function App() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true); // To handle loading state

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false); // Set loading to false once the auth state is determined
        });

        return () => unsubscribe(); // Cleanup the listener on unmount
    }, []);

    if (loading) {
        return <LoadingPage/>
    }

    return (
        <Routes>
            <Route path='/' element={user ? <Navigate to="/team-profile" /> : <HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/phone-verification' element={<PhoneVerification />} />
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
                <Route path='/team-profile' element={<TeamProfilePage />} />
                <Route path="/where" element={<SelectField />} />
                <Route path='/when' element={<SelectDate />} />
            </Route>
        </Routes>
    );
}

export default App;
