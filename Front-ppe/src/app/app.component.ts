import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "./services/auth-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "front-ppe";
  role;
  constructor(private auth: AuthServiceService) {}
  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.role = localStorage.getItem("token").split("/")[2];
      console.log("roooooooooooool", this.role);
    }
  }
}
