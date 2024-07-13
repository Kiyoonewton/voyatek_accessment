import { deleteUser } from "@/app/actions";
import { UserProps } from "@/app/settings/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { FC } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteDialog: FC<{ userId: string }> = (props) => {
  const handleDeleteUser = () => {
    deleteUser(props.userId);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 w-8 p-0 text-md text-custom-gray-300"
        >
          Remove
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] ">
        <DialogHeader className="m-auto font-bold text-2xl">
          Delete this user
        </DialogHeader>
        <DialogDescription className="text-custom-dark m-auto text-base text-center w-[358px]">
          This user and all associated data will be permanently removed. Do you
          wish to continue
        </DialogDescription>
        <span className="flex gap-5 justify-center">
          <DialogClose asChild>
            <Button type="submit" className=" bg-custom-gray-400 text-dark">
              Cancel action
            </Button>
          </DialogClose>
          <Button
            onClick={handleDeleteUser}
            className=" bg-custom-pl-red text-custom-red flex gap-2"
          >
            <RiDeleteBin6Line color={"#D42620"} />
            Yes, Delete
          </Button>
        </span>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
