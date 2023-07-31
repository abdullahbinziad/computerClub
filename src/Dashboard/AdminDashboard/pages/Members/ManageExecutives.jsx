import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  PlusCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const ManageExecutives = () => {
  const {
    isLoading,
    error,
    data = [],
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios.get("http://localhost:3000/executives").then((res) => res.data),
  });
  console.log(data);

  //handle Delete
  const handleDelete = (id) => {
    console.log("It will be dleted", id);
    axios
      .delete(`http://localhost:3000/deleteExecutive/${id}`, {})
      .then((res) => {
        
        console.log(res) ;
        toast.success("Successfully Deleted", {
            theme: "colored"
          })
        refetch()
    })
      .catch((err) => console.log(err));
  };

  //the head title of the table
  const TABLE_HEAD = ["Person", "Position", "Batch", "Department", "Action"];
  return (
    <div className="container">
      <Card className="">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                All Executive Members
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                These are details about the last transactions
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            <Link to="/dashboard/add-executive">
            <Button
                className="flex items-center gap-3"
                color="blue"
                size="sm"
              >
                <PlusCircleIcon strokeWidth={2} className="h-4 w-4" />{" "}
                Add Executive
              </Button>
            </Link>
            </div>
          </div>
        </CardHeader>
        <CardBody className=" overflow-y-auto ">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head,index) => (
                  <th
                    key={index}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  {
                    _id,
                    image,
                    name,
                    position,
                    batch,
                    department,
                    email,
                    conatct,
                  },
                  index
                ) => {
                  const isLast = index === data.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={_id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={image}
                            alt={name}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {position}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {batch}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {department}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content=" Details">
                          <IconButton variant="text" color="blue-gray">
                            <EyeIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Edit ">
                       <Link to={`/dashboard/update-executive/${_id}`}>  <IconButton variant="text" color="blue-gray">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                          </Link>
                        </Tooltip>
                        <Tooltip content="Delete">
                          <IconButton
                            onClick={() => handleDelete(_id)}
                            variant="text"
                            color="blue-gray"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
         
        </CardFooter> */}
      </Card>
      <ToastContainer />

    </div>
  );
};

export default ManageExecutives;
