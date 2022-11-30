import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],

        queryFn: async () => {
            const res = await fetch('https://server-phi-three.vercel.app/users?category=saler');
            const data = await res.json();
            return data
        }
    });

    const handleVerifiedSeller = id => {
        fetch(`https://server-phi-three.vercel.app/users/verify/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Varifed Seller')
                    refetch();
                }
            })
    }

    const handleDeleteSeller = email => {
        fetch(`https://server-phi-three.vercel.app/users/seller/${email}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.error(`deleted successfully`);
                }
            })
    }

    return (
        <div>
            <h2 className='text-2xl'>All Seller</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verified</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) =>
                                <tr key={user._id} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user?.role !== 'verified seller' && <button
                                        onClick={() => handleVerifiedSeller(user._id)}
                                        className='btn btn-xs btn-accent'>
                                        Verified</button>}</td>

                                    <td><button
                                        onClick={() => handleDeleteSeller(user.email)}
                                        className='btn btn-xs btn-error'>Delete
                                    </button></td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllSellers;