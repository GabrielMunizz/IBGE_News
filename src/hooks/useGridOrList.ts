import { useState } from 'react';

const useGridOrList = () => {
  const [gridOrList, setGridOrLIst] = useState(true);

  const handleGridOrList = () => {
    setGridOrLIst((prev) => !prev);
  };

  return {
    gridOrList,
    handleGridOrList,
  };
};

export default useGridOrList;
