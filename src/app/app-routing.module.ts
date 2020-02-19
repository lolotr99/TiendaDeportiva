import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { PrivadoComponent } from './componentes/privado/privado.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { RegisterComponent } from './componentes/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { DetalleArticuloComponent } from './componentes/detalle-articulo/detalle-articulo.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  { path: 'articulo/:id', component: DetalleArticuloComponent , canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'privado', component: PrivadoComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
