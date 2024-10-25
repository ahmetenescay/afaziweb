import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('/admin', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(response.data);
            } catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    navigate('/login');
                }
            }
        };

        fetchData();
    }, [navigate]);

    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>Admin Panel</h1>
            {/* Admin panel içeriği */}
        </div>
    );
};

export default AdminPage;
