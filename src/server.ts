import express from 'express';
import cors from 'cors';
import path from 'path';
import Database from 'better-sqlite3';
import multer from 'multer';

const app = express();
const PORT = 3000;

const db = new Database(path.join(__dirname, '..', 'index.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS cvs (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    name      TEXT NOT NULL,
    role      TEXT,
    specialty TEXT,
    city      TEXT,
    email     TEXT,
    phone     TEXT,
    bio       TEXT,
    skills    TEXT,
    parcours  TEXT,
    photo     TEXT,
    video     TEXT,
    audio     TEXT,
    color     TEXT,
    initials  TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  )
`);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + file.originalname;
    cb(null, unique);
  }
});
const upload = multer({ storage });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.get('/api/cvs', (req, res) => {
  const cvs = db.prepare('SELECT * FROM cvs ORDER BY created_at DESC').all();
  res.json(cvs);
});

app.get('/api/cvs/:id', (req, res) => {
  const cv = db.prepare('SELECT * FROM cvs WHERE id = ?').get(req.params.id);
  if (!cv) return res.status(404).json({ error: 'CV non trouvé' });
  res.json(cv);
});

app.post('/api/cvs', upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'video', maxCount: 1 },
  { name: 'audio', maxCount: 1 },
]), (req, res) => {
  const files = req.files as Record<string, Express.Multer.File[]>;
  const body  = req.body;

  const stmt = db.prepare(`
    INSERT INTO cvs (name, role, specialty, city, email, phone, bio, skills, parcours, photo, video, audio, color, initials)
    VALUES (@name, @role, @specialty, @city, @email, @phone, @bio, @skills, @parcours, @photo, @video, @audio, @color, @initials)
  `);

  const result = stmt.run({
    name:      body.name      || '',
    role:      body.role      || '',
    specialty: body.specialty || '',
    city:      body.city      || '',
    email:     body.email     || '',
    phone:     body.phone     || '',
    bio:       body.bio       || '',
    skills:    body.skills    || '',
    parcours:  body.parcours  || '',
    photo:     files.photo?.[0]?.filename || '',
    video:     files.video?.[0]?.filename || '',
    audio:     files.audio?.[0]?.filename || '',
    color:     body.color     || '#6205f8',
    initials:  body.initials  || '',
  });

  res.json({ success: true, id: result.lastInsertRowid });
});

app.put('/api/cvs/:id', upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'video', maxCount: 1 },
  { name: 'audio', maxCount: 1 },
]), (req, res) => {
  const files = req.files as Record<string, Express.Multer.File[]>;
  const body  = req.body;
  const id    = req.params.id;

  const existing = db.prepare('SELECT * FROM cvs WHERE id = ?').get(id) as any;
  if (!existing) return res.status(404).json({ error: 'CV non trouvé' });

  const stmt = db.prepare(`
    UPDATE cvs SET
      name=@name, role=@role, specialty=@specialty, city=@city,
      email=@email, phone=@phone, bio=@bio, skills=@skills,
      parcours=@parcours, photo=@photo, video=@video, audio=@audio,
      color=@color, initials=@initials
    WHERE id=@id
  `);

  stmt.run({
    id,
    name:      body.name      || existing.name,
    role:      body.role      || existing.role,
    specialty: body.specialty || existing.specialty,
    city:      body.city      || existing.city,
    email:     body.email     || existing.email,
    phone:     body.phone     || existing.phone,
    bio:       body.bio       || existing.bio,
    skills:    body.skills    || existing.skills,
    parcours:  body.parcours  || existing.parcours,
    photo:     files.photo?.[0]?.filename || existing.photo,
    video:     files.video?.[0]?.filename || existing.video,
    audio:     files.audio?.[0]?.filename || existing.audio,
    color:     body.color     || existing.color,
    initials:  body.initials  || existing.initials,
  });

  res.json({ success: true });
});

app.delete('/api/cvs/:id', (req, res) => {
  db.prepare('DELETE FROM cvs WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
