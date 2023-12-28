import React from "react";
import { getDataContextValue } from "../context/dataContext";

const Navbar = () => {
  const { updateViewStatus } = getDataContextValue();

  return (
    <>
      <nav>
        <button onClick={() => updateViewStatus([true, false, false])}>
          ALL
        </button>
        <button onClick={() => updateViewStatus([false, true, false])}>
          ACTIVE
        </button>
        <button onClick={() => updateViewStatus([false, false, true])}>
          DONE
        </button>
      </nav>
    </>
  );
};

export default Navbar;
