import { Routes } from "@angular/router";
import { LayoutComponent } from "../../layout/layout.component";
import { DashboardComponent } from "./dashboard.component";

export const routes: Routes = [
    {path: "", component: LayoutComponent, children: [
        {path: "home", component: DashboardComponent},
        {path: "", redirectTo: "home", pathMatch: "full"}
    ]}
]