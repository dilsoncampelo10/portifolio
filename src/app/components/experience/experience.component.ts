import { Component } from '@angular/core';
import { IExperience } from 'src/app/interfaces/IExperience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
    experiences: IExperience[] = [{title:'Desenvolvedor de Sistemas',locale:'Conted.Tech',date:'Fevereiro de 2023 - Atual',description:'Conted.Tech é uma Edtech especialista em soluções para Instituição de Ensino. Desenvolvo e dou manutenção em seus principais software, incluindo a Plataforma S!'},{title:'Tutor de Programação',locale:'Instituo Federal de Ciência e Tecnologia do Rio Grande do Norte',date:'Julho de 2022 - Fevereiro de 2023',description:'Me tornei Tutor no IFRN, dando uma força para alunos do meu curso, nas displinas técnicas correlatas a programação. Fiz acompanhamento de atividades e TCC.'},{title:'Desenvolvedor Web',locale:'Autônomo',date:'Junho de 2022 - Fevereiro de 2023',description:'Desenvolvimento de sites, como o site para o laboratório Maker e o site com sistema de gerenciamento do Nuarte, ambos para o IFRN.'},{title:'Curso Teńcico de Informática',locale:'Instituo Federal de Ciência e Tecnologia do Rio Grande do Norte',date:'Março de 2019 - Fevereiro de 2023',description:'Foi no IFRN que descobri a programação, aprendi sobre desenlvolvimento, redes de computadores, banco de dados e etc.'}]
}
