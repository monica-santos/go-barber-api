import { parseISO, startOfDay, endOfDay } from 'date-fns'
import { Op } from 'sequelize'
import Appointment from '../models/Appointment'
import User from '../models/User'
import File from '../models/File'

class ScheduleController {
  async index(req, res) {
    const checkUserProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    })

    if (!checkUserProvider) {
      return res.status(401).json({ error: 'User is not provider' })
    }
    const { date } = req.query
    const { page = 1 } = req.query

    const parsedDate = parseISO(date)

    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      order: ['date'],
      attributes: ['id', 'date'],
      limit: 10,
      offset: (page - 1) * 10,
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
        {
          model: User,
          as: 'user',
          attributes: ['name'],
        },
      ],
    })

    return res.json(appointments)
  }
}

export default new ScheduleController()
