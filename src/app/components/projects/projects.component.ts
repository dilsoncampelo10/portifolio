import { Component } from '@angular/core';
import { IProject } from 'src/app/interfaces/IProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    projects: IProject[]= [{image:'nuarte.png',title:'Palco Nuarte',link:'https://github.com/dilsoncampelo10/palco_nuarte',icons:['devicon-laravel-plain colored','devicon-bootstrap-plain colored']},{image:'domp.png',title:'Domp Shop',link:'https://github.com/dilsoncampelo10/dompshop',icons:['devicon-laravel-plain colored','devicon-mysql-plain colored']},{image:'cleanica.png',title:'Cleanica',link:'https://github.com/dilsoncampelo10/cleanica',icons:['devicon-php-plain colored','devicon-css3-plain colored']},{image:'academy.png',title:'Spring Academy',link:'https://github.com/dilsoncampelo10/academy',icons:['devicon-spring-plain colored','devicon-html5-plain colored']},{image:'customers.png',title:'Customers API',link:'https://github.com/dilsoncampelo10/customers',icons:['devicon-spring-plain colored','devicon-mysql-plain colored']},{image:'',title:'E-mail Microservice',icons:['devicon-spring-plain colored','devicon-mongodb-plain colored']}];
}
