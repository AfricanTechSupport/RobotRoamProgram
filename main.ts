// Main code for the sensors.
function NyoomMain () {
    while (mbit_Robot.Avoid_Sensor(mbit_Robot.enAvoidState.NOOBSTACLE)) {
        if (mbit_Robot.Ultrasonic_Car() > 70) {
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 255)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
        } else if (mbit_Robot.Ultrasonic_Car() < 50) {
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, 255)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 255)
        }
    }
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Cyan)
    basic.pause(2000)
}
// LED display.
basic.showIcon(IconNames.Silly)
// Nyoom functions make Nyoom code.
basic.forever(function () {
    NyoomMain()
})
