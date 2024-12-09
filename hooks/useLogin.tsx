import { useState } from "react";

const useLogin = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsChecked((prev) => !prev);
  };

  return { isChecked, togglePasswordVisibility };
};

export default useLogin;
