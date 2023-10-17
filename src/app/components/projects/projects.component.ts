import { Component } from '@angular/core';
import { IProject } from 'src/app/interfaces/IProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    projects: IProject[]= [{image:'nuarte.png',title:'Palco Nuarte'},{image:'domp.png',title:'Domp Shop'},{image:'cleanica.png',title:'Cleanica'},{image:'academy.png',title:'Spring Academy'},{image:'',title:'MyStore API'},{image:'',title:'Task API'}];
}
