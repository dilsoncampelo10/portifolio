import { Component } from '@angular/core';
import { IProject } from 'src/app/interfaces/IProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    projects: IProject[]= [{image:'nuarte.png',title:'Palco Nuarte',link:'https://github.com/dilsoncampelo10/palco_nuarte'},{image:'domp.png',title:'Domp Shop',link:'https://github.com/dilsoncampelo10/dompshop'},{image:'cleanica.png',title:'Cleanica',link:'https://github.com/dilsoncampelo10/cleanica'},{image:'academy.png',title:'Spring Academy',link:'https://github.com/dilsoncampelo10/academy'},{image:'customers.png',title:'Customers API',link:'https://github.com/dilsoncampelo10/customers'},{image:'',title:'E-mail Microsservice'}];
}
