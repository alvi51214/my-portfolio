import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const url = "https://api.github.com/users/alvi51214/repos";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const myRepos = async () => {
    setLoading(true);
    const reponse = await axios(url).catch((err) => console.log(err));
    const data = reponse.data;

    setRepos(data);
    setLoading(false);
  };

  useEffect(() => {
    myRepos();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <AppContext.Provider value={{ repos, loading, isModalOpen, toggleModal }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
