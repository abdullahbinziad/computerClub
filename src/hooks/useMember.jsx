import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";
const useMember = () => {
    const {user, loading} = UseAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isMember, isLoading: isMemberLoading} = useQuery({
        queryKey: ['isMember', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/member/${user?.email}`);
            return res.data.member;
        }
    })
    return [isMember, isMemberLoading]
};

export default useMember;

