import { Box, Button } from "@mui/material";
import { Header } from "../../components/Header";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const Dashboard = () => {
  const data = useQuery(api.getItem.getTaskList);
  const createTask = useMutation(api.createItem.createTask);

  const persistData = async () => {
    try {
      const id = await createTask({ text: "new testy input1" });
      console.log("Yay data persisted with id: " + id);
    } catch (error) {
      console.error("Error persisting data: ", error);
    }
  };

  return (
    <Box m="20px">
      <Header
        title={"DASHBOARD"}
        subtitle={data ? JSON.stringify(data) : "Loading..."}
      />
      <Button variant="contained" color="secondary" onClick={persistData}>
        Click Me!
      </Button>
    </Box>
  );
};
