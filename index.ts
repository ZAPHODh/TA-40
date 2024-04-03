import cron from 'node-cron'
import { TALoop } from './robotjsTALoop'

cron.schedule('*/40 * * * *', () => {
    TALoop(10)
})
