import { Routes } from "@angular/router";
import { AsistenciaComponent } from "./asistencia/asistencia.component";

import { CreateAsistenciaComponent } from "./create-asistencia/create-asistencia.component";
import { UpdateAsistenciaComponent} from "./update-asistencia/update-asistencia.component";
import { LayoutComponent } from "../../layout/layout.component";

export const routes:Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [

            { path: "list", component: AsistenciaComponent},
            { path: "create", component: CreateAsistenciaComponent},
            { path: "update/:id", component: UpdateAsistenciaComponent},
            { path: "**", redirectTo: "list", pathMatch: "full"}
           
        ]
    }
]