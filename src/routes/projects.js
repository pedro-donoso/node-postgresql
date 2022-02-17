import {Router} from 'express';
const router = Router();

import { createProject, getProjects, getOneProject, deleteProject, updateProject} from '../controllers/project.controller';

// cada vez que se visite este endpoint, se llamara a la función
// /api/projects
router.post('/', createProject);
router.get('/', getProjects);

// /api/projects/:projectID
router.get('/:id', getOneProject);
router.delete('/:id', deleteProject);

router.put('/:id', updateProject);

export default router;