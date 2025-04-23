CREATE TABLE IF NOT EXISTS "voting_board" (
	"vote_id" integer NOT NULL,
	"message" text,
	"votes" integer DEFAULT 0
); 