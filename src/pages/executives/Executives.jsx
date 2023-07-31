import React from "react";
import MembersCard from "../../components/Cards/MembersCard";


const Executives = () => {

const member = [
    
    {
        name: "ABDULLAH BIN ZIAD",
        position: "Super Advicer",
        img: "https://i.ibb.co/nkfqp8J/formal.jpg"
        

    },
    {
        name: "ABDULLAH BIN ZIAD",
        position: "Super Advicer",
        img: "https://i.ibb.co/nkfqp8J/formal.jpg"
        

    },
    {
        name: "ABDULLAH BIN ZIAD",
        position: "Super Advicer",
        img: "https://i.ibb.co/nkfqp8J/formal.jpg"
        

    },
    {
        name: "ABDULLAH BIN ZIAD",
        position: "Super Advicer",
        img: "https://i.ibb.co/nkfqp8J/formal.jpg"
        

    },
    {
        name: "ABDULLAH BIN ZIAD",
        position: "Super Advicer",
        img: "https://i.ibb.co/nkfqp8J/formal.jpg"
        

    },
    {
        name: "ABDULLAH BIN ZIAD",
        position: "Super Advicer",
        img: "https://i.ibb.co/nkfqp8J/formal.jpg"
        

    },
]

  return (
    <div className=" w-full  mt-20 py-20">
      <div className=" w-5/6 mx-auto grid grid-cols-3 gap-5">
        {
member.map((member,index)=> <MembersCard key={index} member={member}></MembersCard>)
        }
      </div>
    </div>
  );
};

export default Executives;
