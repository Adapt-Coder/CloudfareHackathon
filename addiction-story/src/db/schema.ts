import { jsonb, pgTable, text, timestamp, uuid, integer } from "drizzle-orm/pg-core";

export type NewUser = typeof users.$inferInsert;

export const users = pgTable("users", {
  // NOTE - We use a random UUID here, instead of a `serial`, because at the time of writing,
  //        drizzle-seed messes with the auto-incrementing ID in Neon. not sure why yet.
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  settings: jsonb("settings"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Export type for the voting_board table
export type NewVotingBoard = typeof votingBoard.$inferInsert;

// Create the voting_board table
export const votingBoard = pgTable("voting_board", {
  vote_id: integer("vote_id").notNull(), // integer field for vote_id
  message: text("message"), // text field for message
  votes: integer("votes").default(0), // integer field for votes with default of 0
});
