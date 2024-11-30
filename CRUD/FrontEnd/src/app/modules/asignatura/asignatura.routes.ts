import { Routes } from "@angular/router";
import { AsignaturaComponent } from "./asignatura/asignatura.component";
import path from "path";
import { CreateAsisnaturaComponent } from "./create-asignatura/create-asignatura.component";
import { UpdateAsignaturaComponent} from "./update-asignatura/update-asignatura.component";
import { LayoutComponent } from "../../layout/layout.component";

export const routes:Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [

            { path: "list", component: AsignaturaComponent},
            { path: "create", component: CreateAsisnaturaComponent},
            { path: "update/:id", component: UpdateAsignaturaComponent},
            { path: "**", redirectTo: "list", pathMatch: "full"}
           
        ]
    }
]