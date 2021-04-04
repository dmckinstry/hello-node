import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../redux/example';
import { Example } from '../../components';

import './HomeScreen.css';

export const HomeScreen = () => {
    const dispatch = useDispatch();
    const { message } = useSelector(state => state.exampleReducer);
    useEffect(() => {
        dispatch(update());
    }, []);

    return (
        <div className="container mainbody">
            <h1>App Container</h1>
            <p>If the redux extension is installed, you should see that an action was called and that the reducer was triggered.</p>
            <p>{message}</p>
            <Example />
        </div>
    );
}

