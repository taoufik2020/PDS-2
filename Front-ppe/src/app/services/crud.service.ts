import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  host = "http://localhost:3001/";
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get("http://localhost:3001/api/offre/getAll");
  }
  getCandidat() {
    return this.http.get("http://localhost:5000/candidat/get");
  }
  addc(obj) {
    console.log("adding offer");
    return this.http.post("http://localhost:3001/api/offre/add", obj);
  }
  delete(obj, url) {
    return this.http.delete(this.host + url, obj);
  }
  update(id, obj) {
    return this.http.put(`http://localhost:3001/api/offre/up/${id} `, obj);
  }
  updateCandidat(id, obj) {
    return this.http.put(`http://localhost:5000/candidat/up/${id} `, obj);
  }
  ajouterCv(obj) {
    return this.http.post("http://localhost:8005/candidat/cv/add", obj);
  }
  uploadcv(file: File, num_cv): Observable<HttpEvent<{}>> {
    let formadata: FormData = new FormData();
    formadata.append("file", file);
    const req = new HttpRequest(
      "POST",
      `http://localhost:8005/candidat/cv/uploadCv/${num_cv}`,
      formadata,
      {
        reportProgress: true,
        responseType: "text",
      }
    );
    return this.http.request(req);
  }
}
