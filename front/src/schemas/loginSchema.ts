import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

export type LoginFormData = z.infer<typeof loginSchema>;