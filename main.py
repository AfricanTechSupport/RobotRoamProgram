# Main code for the sensors.
def NyoomMain():
    while mbit_Robot.Avoid_Sensor(mbit_Robot.enAvoidState.NOOBSTACLE):
        if mbit_Robot.Ultrasonic_Car() > 70:
            mbit_Robot.car_ctrl_speed(mbit_Robot.CarState.CAR_RUN, 60)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.WHITE)
        elif mbit_Robot.Ultrasonic_Car() < 50:
            mbit_Robot.car_ctrl_speed(mbit_Robot.CarState.CAR_SPINLEFT, 50)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.YELLOW)
        elif mbit_Robot.Ultrasonic_Car() < 10:
            mbit_Robot.car_ctrl_speed(mbit_Robot.CarState.CAR_BACK, 50)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.RED)
# Halts the Nyoom car.
def NyoomHalt():
    mbit_Robot.car_ctrl_speed(mbit_Robot.CarState.CAR_STOP, 50)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.CYAN)
    basic.pause(2000)
# Turns right.
def NyoomLoop_Right():
    for index in range(4):
        mbit_Robot.car_ctrl_speed(mbit_Robot.CarState.CAR_RIGHT, 255)
        basic.pause(2000)
# Turns Nyoom car left.
def NyoomLoop_Left():
    for index2 in range(4):
        mbit_Robot.car_ctrl_speed(mbit_Robot.CarState.CAR_LEFT, 255)
        basic.pause(2000)
# LED display.
basic.show_icon(IconNames.ASLEEP)
# Nyoom functions make Nyoom code.

def on_forever():
    NyoomMain()
    NyoomHalt()
    NyoomLoop_Left()
    NyoomLoop_Right()
basic.forever(on_forever)
