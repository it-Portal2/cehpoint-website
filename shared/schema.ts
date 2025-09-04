import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const quotationRequests = pgTable("quotation_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  projectSummary: text("project_summary").notNull(),
  industry: text("industry").notNull(),
  expectedUsers: text("expected_users").notNull(),
  timeline: text("timeline").notNull(),
  budgetRange: text("budget_range").notNull(),
  features: jsonb("features").notNull().$type<string[]>(),
  techPreferences: text("tech_preferences"),
  complianceNeeds: text("compliance_needs"),
  contactEmail: text("contact_email").notNull(),
  contactName: text("contact_name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const quotationResponses = pgTable("quotation_responses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  requestId: varchar("request_id").references(() => quotationRequests.id).notNull(),
  estimatedCost: integer("estimated_cost").notNull(),
  timeline: text("timeline").notNull(),
  teamSize: integer("team_size").notNull(),
  suggestedStack: jsonb("suggested_stack").notNull().$type<string[]>(),
  dependencies: jsonb("dependencies").notNull().$type<string[]>(),
  risks: jsonb("risks").notNull().$type<string[]>(),
  mvpPlan: jsonb("mvp_plan").notNull().$type<{ 
    milestone: string; 
    duration: string; 
    deliverables: string[]; 
  }[]>(),
  aiAnalysis: text("ai_analysis").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertQuotationRequestSchema = createInsertSchema(quotationRequests).omit({
  id: true,
  createdAt: true,
});

export const insertQuotationResponseSchema = createInsertSchema(quotationResponses).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type QuotationRequest = typeof quotationRequests.$inferSelect;
export type InsertQuotationRequest = z.infer<typeof insertQuotationRequestSchema>;
export type QuotationResponse = typeof quotationResponses.$inferSelect;
export type InsertQuotationResponse = z.infer<typeof insertQuotationResponseSchema>;
