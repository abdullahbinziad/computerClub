

import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";
import axios from "axios";
const use100PercentProfile = () => {
    const {user, loading} = UseAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {
        isLoading,
        error,
        data = [],
       refetch,
        isFetching,
      } = useQuery({
        queryKey: ["repoData", user],
        queryFn: () =>
          axios
            .get(`http://localhost:3000/member?email=${user?.email}`)
            .then((res) => res.data),
      });
    const myData = data[0] ;
    


    const MAX_POINTS = 100;
    const POINTS_PER_PROPERTY = 8;
    const POINTS_FOR_SOCIAL_LINK = 20;
    
    let totalPoints = 0;
    
    // Calculate points for properties with values
    for (const key in myData) {
      if (key === 'socialLink') {
        if (myData[key].length > 0) {
          totalPoints += POINTS_FOR_SOCIAL_LINK;
        }
      } else {
        if (myData[key] != null && String(myData[key]).trim() !== '') {
          totalPoints += POINTS_PER_PROPERTY;
        }
      }
    }
    
    // Ensure total points don't exceed maximum
    totalPoints = Math.min(totalPoints, MAX_POINTS);
return [totalPoints,refetch] ;
   
};



export default use100PercentProfile;

