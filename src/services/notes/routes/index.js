import express from 'express';
import {
  createNote,
  getNotes,
  getNoteById,
  editNote,
  deleteNote,
} from '../controller/controller-note.js';
import validate from '../../../middlewares/validate.js';
import { notePayloadSchema } from '../../../services/notes/validator/schema.js';
import { noteQuerySchema } from '../../../services/notes/validator/schema.js';
import validateQuery from '../../../middlewares/validateQuery.js';
import authenticateToken from '../../../middlewares/auth.js';
const router = express.Router();

router.post(
  '/notes',
  authenticateToken,
  validate(notePayloadSchema),
  createNote,
);
router.get('/notes/:id', authenticateToken, getNoteById);
router.put(
  '/notes/:id',
  authenticateToken,
  validate(notePayloadSchema),
  editNote,
);
router.delete('/notes/:id', authenticateToken, deleteNote);
router.get(
  '/notes',
  authenticateToken,
  validateQuery(noteQuerySchema),
  getNotes,
);
export default router;
