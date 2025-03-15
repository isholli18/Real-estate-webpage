import { data_properties, agents } from "./data";

export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  address: string;
  images: string[];
  featured: number;
}

export interface Agent {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  email: string;
  phone: string;
}

export interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
  propertyId?: number | null;
  createdAt?: Date;
}

export interface IStorage {
  getProperties(): Promise<Property[]>;
  getProperty(id: number): Promise<Property | undefined>;
  getFeaturedProperties(): Promise<Property[]>;
  getAgents(): Promise<Agent[]>;
  getAgent(id: number): Promise<Agent | undefined>;
  createInquiry(inquiry: Omit<Inquiry, "id" | "createdAt">): Promise<Inquiry>;
}

export class StaticStorage implements IStorage {
  private inquiryId = 1;

  async getProperties(): Promise<Property[]> {
    return data_properties;
  }

  async getProperty(id: number): Promise<Property | undefined> {
    return data_properties.find(p => p.id === id);
  }

  async getFeaturedProperties(): Promise<Property[]> {
    return data_properties.filter(p => p.featured === 1);
  }

  async getAgents(): Promise<Agent[]> {
    return agents;
  }

  async getAgent(id: number): Promise<Agent | undefined> {
    return agents.find(a => a.id === id);
  }

  async createInquiry(inquiry: Omit<Inquiry, "id" | "createdAt">): Promise<Inquiry> {
    return {
      id: this.inquiryId++,
      ...inquiry,
      createdAt: new Date()
    };
  }
}

export const storage = new StaticStorage();