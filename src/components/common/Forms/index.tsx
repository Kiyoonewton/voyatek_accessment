"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogTrigger } from "@radix-ui/react-dialog";
import Image from "next/image";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { CiCirclePlus } from "react-icons/ci";

const Userform: FC<{ type: "edit" | "create" }> = (props) => {
  const form = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = () => {
    console.log("log");
  };
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {props?.type === "create" ? (
          <Button className="bg-blue-700 flex gap-1">
            <CiCirclePlus size={20} />
            New User
          </Button>
        ) : (
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 text-md text-custom-blue"
          >
            Edit
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] ">
        <DialogHeader>
          <div className="flex justify-center w-[64px] h-[64px] m-auto">
            <Image
              src="/user2.svg"
              alt="create user"
              fill
              className="unset-position"
            />
          </div>
          <DialogDescription className="text-custom-dark m-auto font-bold text-base">
            {props?.type ? "Edit User" : "New User"}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {[
                {
                  label: "Email Address",
                  name: "email",
                  placeholder: "New User’s Email Address",
                  type: "email",
                },
                {
                  label: "Full Name",
                  name: "name",
                  placeholder: "New User’s Full Name",
                  type: "text",
                },
                {
                  label: "Role",
                  name: "role",
                  placeholder: "Select Role",
                  type: "select",
                  selections: [
                    { value: "admin", name: "Admin" },
                    { value: "sales manager", name: "Sales Manager" },
                    {
                      value: "sales representative",
                      name: "Sales Representative",
                    },
                  ],
                },
                {
                  label:
                    props?.type === "edit"
                      ? "Create Password"
                      : "Change Password",
                  name: "password",
                  placeholder:
                    props?.type === "edit"
                      ? "Create a Password for New User"
                      : "Change a Password for New User",
                  type: !showPassword ? "password" : "text",
                },
              ].map((item, index) => (
                <FormField
                  key={index}
                  control={form.control}
                  name={item.name}
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel>{item.label}</FormLabel>
                      {item.type !== "select" ? (
                        <div className="relative">
                          <FormControl style={{ outline: 0 }}>
                            <Input
                              className="focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-custom-blue"
                              style={{ outline: 0 }}
                              placeholder={item.placeholder}
                              {...field}
                              type={item.type}
                            />
                          </FormControl>
                          {item.name === "password" && (
                            <div
                              className="absolute w-[16px] h-[8px] top-4 right-5 cursor-pointer"
                              onClick={handleShowPassword}
                            >
                              <Image
                                src="/eyelid.svg"
                                alt="Security"
                                fill
                                className="unset-position"
                              />
                            </div>
                          )}
                        </div>
                      ) : (
                        <Select>
                          <SelectTrigger className="w-full focus:ring-1 focus:ring-offset-0 focus:ring-custom-blue">
                            <SelectValue placeholder={item.placeholder} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {item?.selections?.map((select, index) => (
                                <SelectItem
                                  key={"select" + index}
                                  value={select?.value}
                                >
                                  {select?.name}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button type="submit" className="w-full bg-custom-blue">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Userform;
