import { Component, OnInit } from "@angular/core";
import { RegisterService } from "../services/register.service";
import { CandidatElastic } from "../models/candidat-elactic";
import { Candidat } from "../models/candidat";
import { CrudService } from "../services/crud.service";
import { Recruteur } from "../models/recruteur";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  getcandidat;
  x = true;
  getrecruteur;
  candidatE = {
    name: "",
    email: "",
    password: "",
    role: null,
  };
  candidat = {
    _id: null,
    name: "",
    prenom: "",
    email: "",
    role: null,
  };
  recruteur = {
    _id: null,
    name: "",
    prenom: "",
    email: "",
    Nom_Entreprise: "",
  };

  constructor(
    private http: RegisterService,
    private crudsevice: CrudService,
    private route: Router,
    private toas: ToastrService
  ) {}
  add(value) {
    console.log(value);
    console.log(this.candidatE);
    this.candidatE.name = this.candidat.name;
    this.candidatE.email = this.candidat.email;
    this.candidatE.role = 0;
    this.http.addCandidatR(this.candidatE).subscribe(
      (data) => {
        console.log("resolve1", data);
        this.candidat._id = data["_id"];
        this.http.addCandidat(this.candidat).subscribe(
          (data) => console.log("daresolve2", data),
          (error) => console.log(error)
        );
        this.route.navigate(["/login"]);
        this.toas.warning("user ajouter", "Succes", {
          positionClass: "toast-bottom-right",
        });
      },
      (error) => console.log(error)
    );
    //add to the second database
    //this.candidat.id = this.getcandidat.length + 1;
  }
  addR(value) {
    // console.log(value);
    // console.log(this.candidatE);
    this.candidatE.role = 1;
    this.candidatE.email = this.recruteur.email;
    //this.candidatE._id = "2";
    console.log("express", this.candidatE);
    this.http.addCandidatR(this.candidatE).subscribe(
      (data) => {
        console.log("data", data["_id"]);
        this.recruteur._id = data["_id"];
        this.recruteur.name = this.candidatE.name;
        this.recruteur.email = this.candidatE.email;
        console.log("recruteur", this.recruteur);
        this.http.addRecruteurToElastic(this.recruteur).subscribe(
          (data) => console.log("data", data),
          (error) => console.log(error)
        );
        this.route.navigate(["/login"]);
        this.toas.warning("user ajouter", "Succes", {
          positionClass: "toast-bottom-right",
        });
      },
      (error) => console.log(error)
    );
    //add to the second database taw
    //this.recruteur.id = this.getcandidat.length + 1;
  }
  get() {
    this.http.getAll().subscribe((data) => (this.getcandidat = data));
  }

  /* addCandidatToElastic(value) {
    this.candidatE = new CandidatElastic(
      value.nom,
      value.password,
      value.repassword
    );
    this.http.addCandidatToElastic(this.candidatE).subscribe();
  }*/
  ngOnInit() {
    this.get();
  }
  rec() {
    this.x = false;
  }
}
