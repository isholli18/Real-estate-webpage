import { mockProperties, mockAgents } from "../client/src/lib/propertyData";
import { storage } from "./storage";

async function seed() {
  try {
    console.log("Starting database seeding...");
    
    // Seed properties
    console.log("Seeding properties...");
    for (const property of mockProperties) {
      await storage.createProperty(property);
    }
    console.log("Properties seeded successfully!");

    // Seed agents
    console.log("Seeding agents...");
    for (const agent of mockAgents) {
      await storage.createAgent(agent);
    }
    console.log("Agents seeded successfully!");

    console.log("Database seeding completed!");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seed();
