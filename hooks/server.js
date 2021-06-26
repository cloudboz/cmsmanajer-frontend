import { API } from "utils/api";
import { useQuery, useMutation } from "react-query";

const useServer = () => {
  const getServers = () =>
    useQuery("servers", async () => {
      const { data } = await API.get("/servers");
      return data.data;
    });

  const getServerByID = (id) =>
    useQuery("server", async () => {
      const { data } = await API.get("/servers/" + id);
      return data.data;
    });

  const getAppsByServer = (id) =>
    useQuery("serverApps", async () => {
      const { data } = await API.get("/servers/" + id + "/apps");
      return data.data;
    });

  const getUsersByServer = (id) =>
    useQuery("serverUsers", async () => {
      const { data } = await API.get("/servers/" + id + "/users");
      return data.data;
    });

  const connectServer = useMutation((body) => API.post("/servers", body));

  const deleteServer = useMutation((id) => API.delete("/servers/" + id));

  return {
    getServers,
    getServerByID,
    getAppsByServer,
    getUsersByServer,
    connectServer,
    deleteServer,
  };
};

export default useServer;
