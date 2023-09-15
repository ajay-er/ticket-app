import express from 'express';

const router = express.Router();

router.get('/api/user/currentUser', (req, res) => {
    res.send('hey...how do you do?');
  });

export { router as currentUserRouter };
