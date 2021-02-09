import { AdapterXboxToPlaystation } from "./AdapterXboxToPlaystation.ts"
import { PlaystationSensor } from "./PlaystationSensor.ts"
import { XboxJoystick } from "./XboxJoystick.ts"


const adaptee: PlaystationSensor = new PlaystationSensor()
const adapter: AdapterXboxToPlaystation = new AdapterXboxToPlaystation(adaptee)
const target: XboxJoystick = new XboxJoystick(adapter)

target.connect()
target.yPressed()
target.bPressed()
target.aPressed()
target.xPressed()