import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import AppointmentController from './app/controllers/AppointmentController'
import AvailableController from './app/controllers/AvailableController'
import FileController from './app/controllers/FileController'
import NotificationController from './app/controllers/NotificationController'
import ProviderController from './app/controllers/ProviderController'
import ScheduleController from './app/controllers/ScheduleController'
import SessionController from './app/controllers/SessionController'
import UserController from './app/controllers/UserController'

import authMiddleware from './app/middlewares/auth'

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/user', UserController.store)
routes.post('/session', SessionController.store)

routes.use(authMiddleware)

routes.post('/files', upload.single('file'), FileController.store)

routes.get('/appointments', AppointmentController.index)
routes.post('/appointment', AppointmentController.store)
routes.delete('/appointment/:id', AppointmentController.delete)

routes.get('/notifications', NotificationController.index)
routes.put('/notification/:id', NotificationController.update)

routes.get('/providers', ProviderController.index)
routes.get('/providers/:providerId/available', AvailableController.index)

routes.get('/schedule', ScheduleController.index)

routes.put('/user', UserController.update)

export default routes
