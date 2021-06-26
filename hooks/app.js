import { API } from "utils/api";
import { useQuery, useMutation } from "react-query";

const useApp = () => {
  const getApps = () =>
    useQuery("apps", async () => {
      const { data } = await API.get("/apps");
      return data.data;
    });

  const getAppByID = (id) =>
    useQuery("app", async () => {
      const { data } = await API.get("/apps/" + id);
      return data.data;
    });

  const getDatabasesByApp = (id) =>
    useQuery("appUsers", async () => {
      const { data } = await API.get("/apps/" + id + "/databases");
      return data.data;
    });

  const createApp = useMutation((body) => API.post("/apps", body));

  const deleteApp = useMutation((id) => API.delete("/apps/" + id));

  return {
    getApps,
    getAppByID,
    getDatabasesByApp,
    createApp,
    deleteApp,
  };
};

export default useApp;
