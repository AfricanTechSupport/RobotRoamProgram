basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    while (mbit_Robot.Avoid_Sensor(mbit_Robot.enAvoidState.NOOBSTACLE)) {
        if (mbit_Robot.Ultrasonic_Car() > 70) {
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 60)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
        } else if (mbit_Robot.Ultrasonic_Car() < 50) {
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, 50)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
        } else if (mbit_Robot.Ultrasonic_Car() < 10) {
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 50)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
        }
    }
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, 50)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Cyan)
    basic.pause(2000)
    for (let index = 0; index < 1e+116; index++) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 255)
        basic.pause(2000)
    }
})
