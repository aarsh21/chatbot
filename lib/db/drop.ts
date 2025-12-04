import "dotenv/config";
import postgres from "postgres";

async function main() {
  const client = postgres(process.env.POSTGRES_URL!);
  await client.unsafe(
    "DROP SCHEMA public CASCADE; CREATE SCHEMA public; DROP SCHEMA IF EXISTS drizzle CASCADE;"
  );
  await client.end();
  console.log("Database dropped successfully");
}

main();
