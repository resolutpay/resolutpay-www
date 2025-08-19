import { z } from "zod";

export const getInTouchFormSchema = z
  .object({
    fullname: z
      .string()
      .trim()
      .min(6, { message: "Full name must be at least 6 characters long." })
      .max(50, { message: "Full name must be at most 50 characters long." }),

    companyname: z
      .string()
      .trim()
      .min(2, { message: "Company name must be at least 2 characters long." }),

    email: z
      .email({ message: "Please enter a valid email address." })
      .toLowerCase()
      .trim(),

    message: z
      .string()
      .trim()
      .min(5, { message: "Message must be at least 5 characters long." })
      .max(500, { message: "Message must not exceed 500 characters." }),
  })
  .required();

export const createAccountSchema = z
  .object({
    country: z.string().trim().min(2, "Country is required"),

    businessName: z
      .string()
      .trim()
      .min(2, "Business name must be at least 2 characters")
      .max(100, "Business name is too long"),

    firstName: z
      .string()
      .trim()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name is too long"),

    lastName: z
      .string()
      .trim()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name is too long"),

    email: z.email("Invalid email address").trim().toLowerCase(),

    phone: z.object({
      countryCode: z.string().regex(/^\+\d{1,4}$/, "Invalid country code"),
      number: z.string().regex(/^\d{6,15}$/, "Phone number must be 6–15 digits"),
    }),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password is too long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[@$!%*?&#]/, "Password must contain at least one special character"),

    businessType: z.enum(["starter", "registered"], {
      error: "Select a business type",
    }),

    isDeveloper: z.enum(["yes", "no"], {
      error: "Please indicate if you are a software developer",
    }),
  })
  .required();

export const OTPFormSchema = z
  .object({
    pin: z.string().min(6, {
      message: "Your one-time password must be 6 characters.",
    }),
  })
  .required();

export const emailFormSchema = z
  .object({
    email: z.email("Please enter a valid email").trim().toLowerCase(),
  })
  .required();
