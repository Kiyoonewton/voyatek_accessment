"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";

export const createUser = async (data: { [key: string]: string }) => {
  const url = `${process.env.NEXT_PUBLIC_ENDPOINT}` as string;
  let userData: any;
  axios
    .post(url, data)
    .then((response) => {
      userData = response?.data;
    })
    .catch((error) => {
      console.log(error);
    });
  revalidatePath("/settings");
  return await userData;
};

export const editUser = async (data: { [key: string]: string }, id: string) => {
  const url = `${process.env.NEXT_PUBLIC_ENDPOINT}${id}` as string;
  let userData: any;
  axios
    .put(url, data)
    .then((response) => {
      userData = response?.data;
    })
    .catch((error) => {
      console.log(error);
    });
  revalidatePath("/settings");
  return await userData;
};

export const deleteUser = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_ENDPOINT}${id}` as string;
  let userData: any;
  axios
    .delete(url)
    .then((response) => {
      userData = response?.data;
    })
    .catch((error) => {
      console.log(error);
    });
  revalidatePath("/settings");
  return await userData;
};
