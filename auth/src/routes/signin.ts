import express from 'express';

const router = express.Router();

router.get('/api/users/signin', (req, res) => {
    res.send('hey...how do you do?');
  });

export { router as signinRouter };
