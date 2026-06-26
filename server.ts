import express from 'express';
import path from 'path';

const PORT = 3000;
const app = express();
app.use(express.json());

// --- HEALTH/API ENDPOINT ---
app.get('/api/health', (req, res) => {
  res.json({ status: "ok", message: "Dev server is running perfectly with Firebase integration" });
});

// --- VITE DEV SERVER OR STATIC SERVING ---
async function initializeServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  if (process.env.VERCEL !== "1") {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
}

initializeServer();

export default app;
