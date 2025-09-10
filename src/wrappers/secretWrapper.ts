import dotenv from 'dotenv'
dotenv.config()

function requireEnv(env: string) {
	const val = process.env[env];
	if (!val) throw new Error(`Missing environment variable: ${env}`);
	return val;
}

export default {
	slack_client_id: requireEnv('SLACK_CLIENT_ID'),
	slack_client_secret: requireEnv('SLACK_CLIENT_SECRET'),
	slack_signing_secret: requireEnv('SLACK_SIGNING_SECRET'),
	slack_app_token: requireEnv('SLACK_APP_TOKEN'),
	slack_bot_token: requireEnv('SLACK_BOT_TOKEN'),
	turso_database_url: requireEnv('TURSO_DATABASE_URL'),
	turso_auth_token: requireEnv('TURSO_AUTH_TOKEN'),
	logsnag_project_name: requireEnv("LOGSNAG_PROJECT_NAME"),
	logsnag_project_token: requireEnv("LOGSNAG_PROJECT_TOKEN"),
}