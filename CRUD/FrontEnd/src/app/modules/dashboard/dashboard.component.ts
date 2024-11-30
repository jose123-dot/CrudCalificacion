import { Component } from '@angular/core';
import { ICard } from '../../Interfaces/ICard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  dashboardCards:ICard[] = [{
    name: "Estudiantes",
    icon: "ri-check-line text-4xl",
    borderColor: "border-blue-500",
    fontColor: "bg-white",
    textColor: "text-black"
  },
  {
    name: "Maestros",
    icon: "ri-user-3-line",
    borderColor: "border-blue-500",
    fontColor: "bg-white",
    textColor: "text-black"
  },
    {
      name: "Calificaciones",
      icon: "ri-user-3-line",
      borderColor: "border-blue-500",
      fontColor: "bg-white",
      textColor: "text-black"
    },



  ]

}
