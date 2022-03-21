// Main code for the sensors.
function NyoomMain () {
    while (mbit_Robot.Avoid_Sensor(mbit_Robot.enAvoidState.NOOBSTACLE)) {
        if (mbit_Robot.Ultrasonic_Car() > 70) {
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 60)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
        } else if (mbit_Robot.Ultrasonic_Car() < 50) {
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 50)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
        } else if (mbit_Robot.Ultrasonic_Car() < 10) {
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 50)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
        }
    }
}
// Halts the Nyoom car.
function NyoomHalt () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, 50)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Cyan)
    basic.pause(2000)
}
// Turns right.
function NyoomLoop_Right () {
    for (let index = 0; index < 4; index++) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 255)
        basic.pause(2000)
    }
}
// Turns Nyoom car left.
function NyoomLoop_Left () {
    for (let index = 0; index < 4; index++) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 255)
        basic.pause(2000)
    }
}
// LED display.
basic.showIcon(IconNames.Silly)
// Nyoom functions make Nyoom code.
basic.forever(function () {
    NyoomMain()
    NyoomHalt()
    NyoomLoop_Left()
    NyoomLoop_Right()
})
