import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList } from '../../redux/dataFetch';

export const Other = ({ name, title }) => {
    const dispatch = useDispatch();
    const {items } = useSelector(state => state.dataFetchReducer);

    useEffect(() => {
        dispatch(fetchList());
    }, []);
    return (
        <div>
            <div className="container mainbody">
                <h1>{title}</h1>
                <p>{name} were passed as props from the router</p>
                {' '}
                <p>List fetched through our express proxy</p>
                <ul style={{height: '300px', width:'400px', overflowY: 'scroll', outline:'1px gray solid'}}>
                { items.map(el => <li key={el.id}>{el.title}</li>)}
                </ul>
            </div>
        </div>
    )
}
