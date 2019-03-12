import { Component } from "@angular/core";
import { City } from "./city";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-cities-project";

  public cities: Array<City> = [];
  public addCity(city):void {
    this.cities.push ({
      name: city,
      temperature : {
        valor: Math.round(Math.random() * (20 - 1) + 1),
        tipo: 'ºC'
      },
      
  });
  console.log(this.cities);
}
}
