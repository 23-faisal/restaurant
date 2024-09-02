import { z } from "zod";

// signup schema
export const userSignUpSchema = z.object({
  fullName: z.string().min(3, "Full name is required!"),
  email: z.string().email("Invalid email address!"),
  password: z.string().min(8, "Password must be at least 8 characters!"),
  contact: z.string().min(11, "Contact Number must be 11 digit"),
});

export type SignUpInputState = z.infer<typeof userSignUpSchema>;

// login schema

export const userLoginSchema = z.object({
  email: z.string().email("Invalid email address!"),
  password: z.string().min(8, "Password must be at least 8 characters!"),
});

export type userLoginInputState = z.infer<typeof userLoginSchema>;
