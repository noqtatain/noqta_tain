import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, 'dist');
const dataPath = path.resolve(__dirname, 'data', 'portal.json');

const app = express();
const port = process.env.PORT || 4173;

app.use(express.json({ limit: '2mb' }));
app.use(express.static(distPath, {
  extensions: ['html']
}));

const ensureDataFile = async () => {
  await fs.mkdir(path.dirname(dataPath), { recursive: true });
  try {
    await fs.access(dataPath);
  } catch {
    await fs.writeFile(dataPath, JSON.stringify({ pages: [], blogPosts: [] }, null, 2));
  }
};

const readData = async () => {
  await ensureDataFile();
  const raw = await fs.readFile(dataPath, 'utf-8');
  return JSON.parse(raw);
};

const writeData = async (data) => {
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
};

app.get('/api/portal/pages', async (_req, res) => {
  const data = await readData();
  res.json(data.pages || []);
});

app.post('/api/portal/pages', async (req, res) => {
  const data = await readData();
  const item = {
    id: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    created_at: new Date().toISOString(),
    ...req.body,
  };
  data.pages = [item, ...(data.pages || [])];
  await writeData(data);
  res.status(201).json(item);
});

app.put('/api/portal/pages/:id', async (req, res) => {
  const data = await readData();
  const index = (data.pages || []).findIndex((item) => item.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ message: 'Not found' });
    return;
  }
  data.pages[index] = {
    ...data.pages[index],
    ...req.body,
    updated_at: new Date().toISOString(),
  };
  await writeData(data);
  res.json(data.pages[index]);
});

app.delete('/api/portal/pages/:id', async (req, res) => {
  const data = await readData();
  data.pages = (data.pages || []).filter((item) => item.id !== req.params.id);
  await writeData(data);
  res.status(204).end();
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`SPA server running on port ${port}`);
});
