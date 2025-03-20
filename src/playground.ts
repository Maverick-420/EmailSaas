import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "test@example.com",
    firstName: "John",
    lastName: "Doe",
    imageUrl: "idk",
  },
});

console.log("done");
