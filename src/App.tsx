import React, {useEffect} from 'react';
import './App.scss';
import {Nav} from "./components/Nav";
import {Header} from "./components/Header";
import {Users} from "./components/Users";
import {useDispatch} from "react-redux";
import {getUsersThunk} from "./store/modules/thunks/getUsersThunk";
import {AppDispatch} from "./store";
import {FormBlock} from "./components/Form";


function App() {

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(getUsersThunk())
    }, [])

    return (
        <div className="App">
            <Nav/>
            <div className="wrapper">
                <Header />
                <Users />
                <FormBlock />
            </div>
        </div>
    );
}

export default App;
