import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],

        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?category=buyer');
            const data = await res.json();
            return data
        }
    })

    const handleDeleteBuyer = email => {
        fetch(`http://localhost:5000/users/buyer/${email}`, {
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
            <h2 className='text-2xl'>All Buyer</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
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
                                    <td><button
                                        onClick={() => handleDeleteBuyer(user.email)}
                                        className='btn btn-xs btn-error'>Delete</button></td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;