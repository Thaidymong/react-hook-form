import { z } from "zod";

export const formSchema = z
    .object({
        first_name: z.string().nonempty({ message: "Firstname is required*" }),
        last_name: z.string().nonempty({ message: "Lastname is required*" }),
        email: z
            .string()
            .email({ message: "Invalid email address*" })
            .nonempty({ message: "Email is required*" })
            .refine((email) => email.endsWith("@gmail.com"), {
                message: "Email must be a '@gmail.com'*",
            }),
        password: z.string().nonempty({ message: "Password is required*" }),
        confirmPassword: z
            .string()
            .nonempty({ message: "Confirm Password is required*" }),
    })
    .superRefine((data, ctx) => {
        if (data.password !== data.confirmPassword) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["confirmPassword"],
                message: "Passwords do not match*",
            });
        }
    });

export type FormSchema = z.infer<typeof formSchema>
