import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';


const useBooking = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: booking = [] } = useQuery({
        queryKey: ['booking', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`)
            return res.json()
        },

    })

    return [booking, refetch]
};

export default useBooking;