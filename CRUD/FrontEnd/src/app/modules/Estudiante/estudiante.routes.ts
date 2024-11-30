import { Routes } from "@angular/router";
import { EstudianteComponent } from "./estudiante/estudiante.component";
import path from "path";
import { CreateEstudianteComponent } from "./create-estudiante/create-estudiante.component";
import { UpdateEstudianteComponent} from "./update-estudiante/update-estudiante.component";
import { LayoutComponent } from "../../layout/layout.component";

export const routes:Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [

            { path: "list", component: EstudianteComponent},
            { path: "create", component: CreateEstudianteComponent},
            { path: "update/:id", component: UpdateEstudianteComponent},
            { path: "**", redirectTo: "list", pathMatch: "full"}
           
        ]
    }
]