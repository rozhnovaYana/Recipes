import db from "../../prisma/seed";

export const getUserById = (id: string) => {
  return db.user.findFirst({
    where: {
      id,
    },
  });
};
