// week14.3 Advance Api
// Pick
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    address: string;
}
type UserProfile = Pick<User, 'id' | 'name' | 'email'>;
const userProfile: UserProfile = {
    id: 1,
    name: 'John Doe',
    email: "sk@",
}

// Partial
type PartialUser = Partial<User>;
const partialUser: PartialUser = {
    name: 'Jane Doe',
    // other properties can be omitted
}

// Readonly
type ReadonlyUser = Readonly<User>;
const readonlyUser: ReadonlyUser = {
    id: 2,
    name: 'Alice',
    email: "sk",
    age: 30,
    address: '123 Main St',
};
// readonlyUser.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.

// Record
interface Product {
    id: number;
    name: string;
    price: number;
}   
type ProductMap = Record<string, Product>;
const products: ProductMap = {
    "prod1": { id: 1, name: 'Laptop', price: 999.99 },
    "prod2": { id: 2, name: 'Phone', price: 499.99 },
}

// Map
// already User type created on top of it
const UserMap =new Map<string, User>();
UserMap.set("user1", { id: 1, name: 'John Doe', email: "sk@", age: 25, address: "123 St" });
UserMap.set("user2", { id: 2, name: 'Jane Doe', email: "sk@", age: 28, address: "456 St" });
console.log(UserMap.get("user1"));
UserMap.forEach((user, key) => {
    console.log(`${key}: ${user.name}`);
});


// Exclude
type Status = "active" | "inactive" | "pending";
type NonPendingStatus = Exclude<Status, "pending">;
const status1: NonPendingStatus = "active";
// const status2: NonPendingStatus = "pending"; // Error: Type '"pending"' is not assignable to type 'NonPendingStatus'.

// type inference in Zod
import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

export type UserProfileUpdate = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody:UserProfileUpdate = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);