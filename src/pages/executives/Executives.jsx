import React from "react";
import MembersCard from "../../components/Cards/MembersCard";
import { useQuery } from "react-query";
import axios from "axios";


const Executives = () => {

  const { isLoading, error, data=[], isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn:async () =>
     await axios
        .get('http://localhost:3000/executives')
        .then((res) => res.data),
  })




  return (
    <div className=" w-full  mt-20 py-20">
      <div className=" w-5/6 mx-auto grid grid-cols-4 gap-5">
        {
data.map((member,index)=> <MembersCard key={index} member={member}></MembersCard>)
        }
      </div>
    </div>
  );
};

export default Executives;
