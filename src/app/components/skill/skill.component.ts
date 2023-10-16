import { Component } from '@angular/core';
import { ISkill } from 'src/app/interfaces/ISkill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})

export class SkillComponent {
     backendSkills:ISkill[] = [{name:'PHP',xp:100},{name:'Laravel',xp:95},{name:'Java',xp:85},{name:'Spring Boot',xp:74}];
     frontendSkills:ISkill[] = [{name:'Angular',xp:75},{name:'React',xp:80},{name:'BootStrap',xp:100},{name:'TypeScript',xp:100}];
     complementSkills:ISkill[] = [{name:'SQL',xp:90},{name:'Linux',xp:90},{name:'AWS',xp:70},{name:'Docker',xp:70}];

     activeTab:string = 'principal';

     onTabClick(tab:string){
        this.activeTab = tab;
     }
}
