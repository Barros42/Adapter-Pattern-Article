export class PlaystationSensor {
  
  connect(): void{
    console.log(`A New Joystick was connected to Playstation`);
  }

  receiveButton(button: string) {
    console.log(`${button} was pressed!`)
  }

}
