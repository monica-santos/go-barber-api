import Sequelize, { Model } from 'sequelize'
import env from '../../config'

export default class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${env.APP_URL}/files/${this.path}`
          },
        },
      },
      {
        sequelize,
      }
    )

    return this
  }
}
