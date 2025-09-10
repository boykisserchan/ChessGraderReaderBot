import {int, real, sqliteTable, text} from 'drizzle-orm/sqlite-core'

export const reactionsTable = sqliteTable("reactions_table", {
	ts: real().primaryKey(),
	reactorID: text(),
	targetID: text(),
	reaction: text()
});

export const userTable = sqliteTable("users_table", {
	userID: text().primaryKey(),
	elo: int(),
	recentUpdates: text(),
})