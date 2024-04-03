import robot from 'robotjs'
import { Mouse } from './utils/Mouse'
import { wait } from './utils/await'

export const TALoop = async (numberOfPots: number) => {
    try {
        console.log('running')
        robot.setKeyboardDelay(2)
        robot.setMouseDelay(1)

        robot.keyTap('m')

        robot.moveMouseSmooth(Mouse.home.x, Mouse.home.y)
        robot.mouseClick()

        robot.moveMouseSmooth(Mouse.moveHome.x, Mouse.moveHome.y)
        robot.mouseClick()
        await wait(1000)
        robot.keyTap('y')

        robot.moveMouseSmooth(Mouse.moveBuyPot.x, Mouse.moveBuyPot.y)
        robot.mouseClick()
        await wait(10000)
        robot.mouseClick()

        robot.moveMouseSmooth(Mouse.addHundred.x, Mouse.addHundred.y)
        for (let i = 0; i < numberOfPots; i++) {
            await wait(500)
            robot.mouseClick()
        }

        // Confirm purchase
        await wait(1000)
        robot.keyTap('y')

        // Close menu
        robot.keyTap('escape')
        robot.keyTap('m')
        await wait(500)
        // Return to previous location
        robot.moveMouseSmooth(
            Mouse.moveBackLocation.x,
            Mouse.moveBackLocation.y
        )
        await wait(500)
        robot.mouseClick()
        await wait(500)
        robot.moveMouseSmooth(Mouse.moveBack.x, Mouse.moveBack.y)
        robot.mouseClick()

        await wait(30000)

        robot.keyTap('q')
    } catch (error) {
        console.error('An error occurred:', error)
    }
}
