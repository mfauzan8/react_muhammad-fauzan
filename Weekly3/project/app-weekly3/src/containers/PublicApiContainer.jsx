import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getFruits } from '../api';
import PublicApi from '../component/PublicApi'
import { setDataPublic } from '../features/dataSlice';

const PublicApiContainer = () => {
    const [loading, setLoading] = useState(true);
    const cats = useSelector((state) => state.data.cats);
    const dispatch = useDispatch();

    useEffect(() => {
        getFruits()
            .then((res) => {
                dispatch(setDataPublic(res));
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [loading]);

    return (
        <PublicApi cats={cats} />
    )
}

export default PublicApiContainer