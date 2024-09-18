import { prismaClient } from "./database.js";

export const getUsers = async (req, res) => {
  const allUsers = await prismaClient.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return res.json(allUsers);
};
