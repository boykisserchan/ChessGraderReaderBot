import { defineConfig } from 'drizzle-kit';
import secrets from "./src/wrappers/secretWrapper.ts";

export default defineConfig({
	out: './drizzle',
	schema: './src/db/schema.ts',
	dialect: 'turso',
	dbCredentials: {
		url: secrets.turso_database_url,
		authToken: secrets.turso_auth_token
	},
});