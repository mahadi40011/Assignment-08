const getFromLS = () => {
  const storedIdSTR = localStorage.getItem("appsId");
  return storedIdSTR ? JSON.parse(storedIdSTR) : [];
};

const setToLS = (id) => {
  const storedData = getFromLS();
  if(storedData.includes(id)){
    return
  }

  storedData.push(id);
  const data = JSON.stringify(storedData);

  localStorage.setItem("appsId", data);
};

const removeFromLS = (id) => {
  const storedData = getFromLS();
  const filterData = storedData.filter((data) => data !== id);


  const data = JSON.stringify(filterData);

  localStorage.setItem("appsId", data);
};

export { getFromLS, setToLS, removeFromLS };
