import jwt from 'jsonwebtoken';
import User from '../models/User';
import config from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'User do not exists' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Passwor does not match' });
    }

    const { id, name } = user;

    return res.json({
      user: { id, name, email },
      token: jwt.sign({ id }, config.tokenKey, { expiresIn: config.expiresIn }),
    });
  }
}

export default new SessionController();
