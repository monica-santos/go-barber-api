import env from './index'

const {
  MAIL_HOST: host,
  MAIL_PORT: port,
  MAIL_USER: user,
  MAIL_PASS: pass,
} = env

export default {
  host,
  port,
  secure: false,
  auth: { user, pass },
  default: { from: 'Equipe GoBarber <noreply@gobarber.com>' },
}
