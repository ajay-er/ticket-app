import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
    res.send('hey...how do you do?');
  });

export { router as signoutRouter };
