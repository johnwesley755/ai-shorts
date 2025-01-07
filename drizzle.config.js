/** @type {import('drizzle-kit').Config} */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:86eupXfCyiNE@ep-flat-wildflower-a5fi98wm.us-east-2.aws.neon.tech/ai-short-video-generator?sslmode=require",
  },
};