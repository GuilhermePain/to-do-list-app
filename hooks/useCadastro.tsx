import { useState } from "react";

const useCadastro = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsChecked((prev) => !prev);
  };

  return { isChecked, togglePasswordVisibility };
};

export default useCadastro;
