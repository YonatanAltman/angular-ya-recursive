import { Component } from "@angular/core";
const main = {
  id: 0, arr: [
    {
      id: 1,
      arr: [ { id: 7, arr: [] }, { id: 8, arr: [] }]
    },
    {
      id: 2,
      arr: [{ id: 4, arr: [] }, { id: 5, arr: 
      [{ id: 51, arr: [] }, { id: 52, arr: [] }] },{ id: 6, arr: [] }]
    },
    {
      id: 3,
      arr: [{ id: 9, arr: [] }, { id: 10, arr: [{ id: 4, arr: [] }, { id: 105, arr: [] }] }, { id: 111, arr: [] }]
    },

  ]
};
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  constructor() {
    this.recursiveTest(main, 52);
  }
  recursiveTest(host: { id: number; arr: any[] }, x: number) {
    console.log("searching in ", host.id);

    if (host.id === x) {
      console.log("Found!");
      return true;
    } else {
      if (host.arr) {
        for (const item of host.arr) {
          if (this.recursiveTest(item, x)) {
            return true;
          }
        }
      }
    }
  }
}
