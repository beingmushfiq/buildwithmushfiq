import { Router } from 'express';
import { analyzeWebsite, generateProjectPlan, chatWithAssistant } from '../controllers/aiController.js';
import { handleContactForm } from '../controllers/contactController.js';

const router = Router();

// AI Routes
router.post('/ai/analyze', analyzeWebsite);
router.post('/ai/plan', generateProjectPlan);
router.post('/ai/chat', chatWithAssistant);

// Contact Route
router.post('/contact', handleContactForm);

export default router;
