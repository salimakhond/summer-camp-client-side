import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';


const useBooking = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    
    const { refetch, data: booking = [] } = useQuery({
        queryKey: ['booking', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/booking?email=${user?.email}`)
            return res.data;
        },

    })

    return [booking, refetch]
};

export default useBooking;