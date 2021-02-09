import { PlaystationSensor } from "./PlaystationSensor.ts"

export class AdapterXboxToPlaystation {

  private readonly playstationSensor: PlaystationSensor

  constructor(playstationSesnsor: PlaystationSensor){
    this.playstationSensor = playstationSesnsor
  }

  connect(): void { 
    this.playstationSensor.connect()
  }

  receiveButton(button: string) {
    button = this.convertButton(button)
    this.playstationSensor.receiveButton(button)
  }

  private convertButton(xboxButton: string): string {
    switch (xboxButton) {
      case 'Y':
        return 'Triangle'
      case 'B':
        return 'Circle'
      case 'A':
        return 'Cross'
      case 'X':
        return 'Square'
      default:
        throw new Error("Invalid Button");
    }
  }

}