import { Routes } from "@angular/router";
import { MaestroComponent } from "./maestro/maestro.component";
import path from "path";
import { CreateMaestroComponent } from "./create-maestro/create-maestro.component";
import { UpdateMaestroComponent} from "./update-maestro/update-maestro.component";
import { LayoutComponent } from "../../layout/layout.component";

export const routes:Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [

            { path: "list", component: MaestroComponent},
            { path: "create", component: CreateMaestroComponent},
            { path: "update/:id", component: UpdateMaestroComponent},
            { path: "**", redirectTo: "list", pathMatch: "full"}
           
        ]
    }
]