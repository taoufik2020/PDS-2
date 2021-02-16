import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CrudService } from "../services/crud.service";
import { AuthServiceService } from "../services/auth-service.service";
import { RegisterService } from "../services/register.service";
import { Route } from "@angular/compiler/src/core";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent implements OnInit {
  constructor(
    private activ: ActivatedRoute,
    private http: CrudService,
    private auth: AuthServiceService,
    private ht: RegisterService,
    private route: Router,
    private toas: ToastrService
  ) {}
  id;
  offres;
  offre = {
    //_id: "",
    name: "",
    description: null,
    domaine: "",
    dateExpiration: null,
    capacite: null,
    recruteur: "",
    // ListCandidat: [],
  };
  candi;
  cand;
  count;
  list: [];
  _id = localStorage.getItem("token").split("/")[1];
  ngOnInit() {
    this.id = this.activ.snapshot.paramMap.get("id");
    console.log("idddddddd", this.id);
    this.getOffre();
    this.getcandidat();

    //console.log("xxx",this.x);
  }
  getOffre() {
    this.http.getAll().subscribe((data) => {
      this.offres = data["data"].find((x) => x._id == this.id);
      console.log("offresggg", (this.list = this.offres.domaine.split(" ")));
      //console.log("xxxx",this.x)
    });
    // = this.offres.domaine;
  }
  postuler() {
    // console.log("ggg", this.offres);
    // console.log("hetha candidat", this.cand);
    // let x = this.cand;
    // console.log(this.cand);
    //this.offres.candidat[0] = this.cand;
    // console.log("offers : ", this.offres);
    // let offers_to_push = JSON.parse(JSON.stringify(this.offres));
    // delete offers_to_push.candidat;
    // this.cand.offres.push(offers_to_push);
    // console.log("cand ", this.cand);
    // let cand_to_push = JSON.parse(JSON.stringify(this.cand));
    // delete cand_to_push.offres;
    // this.offres.candidat.push(cand_to_push);
    // go
    // this.ht.addC(this.cand).subscribe(
    //   (data) => {
    //     console.log("nouveau cand.", data);
    //   },
    //   (error) => {
    //     console.log("first add error");
    //     console.log(error);
    //   }
    // );
    // let candidat = {
    //   name: this.cand.name,
    //   prenom: this.cand.prenom,
    //   email: this.cand.email,
    // };
    //console.log("ca", candidat);
    //this.offre._id = this.id;
    // this.offre.name = this.offres.name;
    // this.offre.description = this.offres.description;
    // this.offre.dateExpiration = this.offres.dateExpiration;
    // this.offre.capacite = this.offres.capacite;
    // this.offre.domaine = this.offres.domaine;
    // this.offre.recruteur = this.offres.recruteur;
    // //this.offre.domaine = this.offres.domaine;
    let candidat = ["taoufik", "ffff", "ffff"];

    // console.log("object1,", this.offre);
    let off;
    off = this.offres.name;
    this.offres.ListCandidat.push(this.cand);

    console.log("object2,", this.offres);
    this.http.update(this.offres._id, this.offres).subscribe(
      (data) => {
        console.log("ddddddddddddd", data);
      },
      (error) => {
        console.log("second add error", error);
        console.log("off", off);
        this.cand.ListOffre.push(off);
        console.log("list", this.cand);
        this.http.updateCandidat(this._id, this.cand).subscribe((upd) => {
          console.log("new", upd);
        });
      }
    );
    this.route.navigate(["/compteRecruteur"]);
    this.toas.success("Candidature envoyé", "Succes", {
      positionClass: "toast-top-right",
    });
  }
  getcandidat() {
    this.http.getCandidat().subscribe((data) => {
      //console.log("datacandidat",);
      //this.candi = data;
      this.cand = data["candidat"].find((x) => x._id == this._id);
      console.log("candidathhhh", this.cand);

      // this.count = this.cand.id;
      //console.log("iddddddd",this.id)
    });
  }
}
