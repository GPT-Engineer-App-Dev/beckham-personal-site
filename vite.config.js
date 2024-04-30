import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dotenv from 'dotenv';

import fs from 'fs';
import toml from 'toml';

dotenv.config();

// Read and parse the TOML file
const configFile = fs.readFileSync('gpt-engineer.toml', 'utf-8');
const config = toml.parse(configFile);

// Extract project_id from the TOML configuration
const projectId = config['gptengineer-app'].project_id;

if (!process.env.PROJECT_ID) {
    process.env.PROJECT_ID = `"${projectId}"`
}

if (!process.env.SUPABASE_URL) {
    process.env.SUPABASE_URL = 'https://adlzdmxeyzrvgygumdlq.supabase.co'
}

if (!process.env.SUPABASE_API_KEY) {
    process.env.SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkbHpkbXhleXpydmd5Z3VtZGxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyNDQ5NzgsImV4cCI6MjAyOTgyMDk3OH0.0vS3BzSD8sQ3mCp2EKGEI24uaNnn4S6b7FzFmranq_Y'
}

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: "8080",
  },
  plugins: [react()],
  base: "",
  resolve: {
    alias: {
      'lib': resolve(__dirname, 'lib'),
    },
  },
  define: {
    'process.env': process.env
  },
});
