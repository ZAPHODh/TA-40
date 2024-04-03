// import cron from 'node-cron'
// import { TALoop } from './robotjsTALoop'

// cron.schedule('*/40 * * * *', () => {
//     TALoop(10)
// })
import robot from 'robotjs'
console.log('morte', robot.getMousePos())
console.log(
    'pixel',
    robot.getPixelColor(robot.getMousePos().x, robot.getMousePos().y)
)
