import { getUser, type UserResponseType } from "@/modules/User/logic/userMethods.js";
import { RESPONSE_SUCCESS } from "@/constants/index.js";
import { useState } from "react";

export const useGetUser = () => {
  const [user, setUser] = useState<UserResponseType["data"] | null>(null);

  const onGetUser = async () => {
    console.log(1);

    const response = await getUser();

    if (response && response.status === RESPONSE_SUCCESS) setUser(response.data);

    console.log(response);
    console.log(user);
  };

  return { onGetUser, user };
};
