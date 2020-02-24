import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  newUser: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router) { }

  getUserState() {
    return this.afAuth.authState;
  }

  login( email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['/privado']);
        }
      })
  }

  createUser(user) {
    console.log(user);
    this.afAuth.auth.createUserWithEmailAndPassword( user.email, user.password)
      .then( userCredential => {
        this.newUser = user;
        this.insertUserData(userCredential)
          .then(() => {
            console.log(userCredential);
            this.router.navigate(['/privado']);
          });
      })
      .catch( error => {
        this.eventAuthError.next(error);
      });
  }

  insertUserData(userCredential: firebase.auth.UserCredential) {
    //recoger sexo del formulario
    var sexo;
    if($('#hombre').is(":checked")) {
      sexo = "Hombre";
    } else {
      sexo = "Mujer";
    }

    var aficiones = "";
    if($("#musica").prop("checked")) aficiones += " Música";
    if($("#deporte").prop("checked")) aficiones += " Deporte";
    if($("#musica").prop("checked")) aficiones += "  Pintar";

    return this.db.doc(`Usuarios/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      sexo: sexo,
      pais: $('#pais').val(),
      aficiones: aficiones
    })
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}