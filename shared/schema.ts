
import { z } from "zod";

export const propertySchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  bedrooms: z.number(),
  bathrooms: z.number(),
  sqft: z.number(),
  address: z.string(),
  images: z.array(z.string()),
  featured: z.number()
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
  propertyId: z.number().nullable(),
  createdAt: z.date()
});

export const insertInquirySchema = inquirySchema.omit({ id: true, createdAt: true });

export type Property = z.infer<typeof propertySchema>;
export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Agent = z.infer<typeof agentSchema>;
export type InsertAgent = z.infer<typeof insertAgentSchema>;
export type Inquiry = z.infer<typeof inquirySchema>;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
