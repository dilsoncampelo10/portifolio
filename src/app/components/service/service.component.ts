import { Component } from '@angular/core';
import { IService } from 'src/app/interfaces/IService';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
    services:IService[] = [{icon:'fa fa-2x fa-laptop',title:'Sistemas',description:'Desenvolvimento de aplicações web utilizando banco de dados, sistemas de gerenciamento para negócios e etc.'},{icon:'fa-solid fa-2x fa-server',title:'Web Services',description:'Desenvolvimento de API \'s para integrações, com foco nos padrões Restful.'},{icon:'fa-solid fa-2x fa-laptop-code',title:'Web Sites',description:'Desenvolvimento de websites modernos e com SEO otimizados, consumo de Api\'s e mais!'},{icon:'fa-solid fa-2x fa-gears',title:'Manutenção',description:'Manter sistemas, microserviços, sites e demais softwares que se fazem necessários para o cliente'}]
}


