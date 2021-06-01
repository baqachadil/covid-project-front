import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { SymptomsComponent } from "./Components/symptoms/symptoms.component";
import { XraysComponent } from "./Components/xrays/xrays.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "xrays", component: XraysComponent },
  { path: "symp", component: SymptomsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
