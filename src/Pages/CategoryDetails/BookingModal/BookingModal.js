import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ booking, setBooking }) => {

    const { user } = useContext(AuthContext);

    const { product, resalePrice } = booking;

    const handleBookingProduct = event => {
        toast.success('Successfully Booked')
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const productName = form.buyProduct.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const buyerInfo = {
            name, email, productName, phone, location
        }
        setBooking(null)
        console.log(buyerInfo)
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="text-lg font-bold">{booking.product}</h3>


                    <form onSubmit={handleBookingProduct}
                        className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" className="input input-bordered w-full "
                            name='email' value={user.email} disabled />
                        <input type="text" className="input input-bordered w-full "
                            name='name' value={user.displayName} disabled />
                        <input type="text" className="input input-bordered w-full "
                            name='buyProduct' value={product} disabled />
                        <input type="text" value={resalePrice} className="input input-bordered w-full " disabled />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full " />
                        <input type="text" name='location' placeholder="Meeting Location" className="input input-bordered w-full " />
                        <input className='btn btn-success w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;