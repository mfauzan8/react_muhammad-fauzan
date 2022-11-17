import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../api';
import AboutUs from '../component/AboutUs'
import { setUsers } from '../features/dataSlice';

const AboutUsContainer = () => {
    const [loading, setLoading] = useState(true);
    const users = useSelector((state) => state.data.users);
    const dispatch = useDispatch();



    useEffect(() => {
        getUsers()
            .then((res) => {
                dispatch(setUsers(res));
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [loading]);
    return (
        <AboutUs users={users} loading={loading} />
    )
}

export default AboutUsContainer