
import { z } from "zod";

export const propertySchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().nullable(),
  price: z.string().nullable(),
  bedrooms: z.number().nullable(),
  bathrooms: z.number().nullable(),
  m2: z.number().nullable(),
  address: z.string().nullable(),
  images: z.array(z.string()),
  featured: z.boolean()
});

export const insertPropertySchema = propertySchema.omit({ id: true });

export const agentSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string()
});

export const insertAgentSchema = agentSchema.omit({ id: true });

export const inquirySchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
  propertyId: z.number(),
  createdAt: z.date()
});

export const insertInquirySchema = inquirySchema.omit({ id: true, createdAt: true });

export type Property = z.infer<typeof propertySchema>;
export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Agent = z.infer<typeof agentSchema>;
export type InsertAgent = z.infer<typeof insertAgentSchema>;
export type Inquiry = z.infer<typeof inquirySchema>;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
