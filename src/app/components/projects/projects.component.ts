import { Component } from '@angular/core';
import { IProject } from 'src/app/interfaces/IProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    selectedProjectIndex:number = 0;

    projects: IProject[]= [{image:'nuarte.png',title:'Palco Nuarte',description:'Palco Nuarte é um sistema desenvolvido para o Núcleo de Artes do IFRN, durante o projeto de TCC. Trata-se de um site que expõe todo o projeto realizado pelo Campus Ipanguaçu, artistas do vale e seus projetos. Alunos cadastrados poderiam enviar seus projetos, que seriam validados pelo administrador do sistema (responsáveis pelo Nuarte), eles também poderiam adicionar conteúdo ao site, excluir, atualizar, enviar notícias e etc. Alunos interessados também tinham a possibilidade de enviar um e-mail de contato.',link:'https://github.com/dilsoncampelo10/palco_nuarte',icons:['devicon-laravel-plain colored','devicon-bootstrap-plain colored']},{image:'blogTunes.png',title:'Blog Tunes',description:'Blog Tunes é um sistema de postagens dos mais diversos desenhos animados, feito utilizando o conceito de Single Page Application, no qual os vistitantes conseguem publicar desenhos de sua infância. Foi utilizado Angular, Angular Route, Angular Material e o conceito de Modules; Seu back-end foi feito com Spring Boot.',link:'https://github.com/dilsoncampelo10/blog-tunes',icons:['devicon-angularjs-plain colored','devicon-spring-plain colored']},{image:'cleanica.png',title:'Cleanica',description:'Clínica virtual, criada com PHP puro, o intuito era criar um sistema para marcar consultas, ver prontuários, cadastrar clientes, médicos e etc. Foi utilizado o padrão DAO, para separar a lógica da aplicação das views e do acesso aos dados.',link:'https://github.com/dilsoncampelo10/cleanica',icons:['devicon-php-plain colored','devicon-css3-plain colored']},{image:'bibliotech.jpeg',title:'BiblioTech',description:'Essa é a BiblioTech, um sistema para bibliotecas, no qual, é possível fazer cadastramento de livros, empréstimos, reservas e etc. Esses são alguns dos requisitos. A ideia é criar um espaço virtual para que leitores encontrem, façam emprésimo de livros e compartilhem suas opinições sobre determinado livro. Bem como, os bibliotecários tenham um sistema intuitivo e prático para gerenciar sua biblioteca, atrasos, novas editoras e mais!',link:'https://github.com/dilsoncampelo10/bibliotech',icons:['devicon-spring-plain colored','devicon-html5-plain colored']},{image:'heroquiz.png',title:'Hero Quiz',description:'Projeto front-end para realização de quiz, no qual, por meio das respostas será calculado um resultado indicando qual herói ou vilão da cultura pop combina com o visitante.',link:'https://heroquiz10.netlify.app/',icons:['devicon-angularjs-plain colored','devicon-sass-plain colored']},{image:'emailapi.png',title:'MicroMail', description:'Microserviço para envio de e-mails, utilizado para fazer o contato desse portfólio. Realizado em Spring, utilizando o serviço de SMTP do G-mail e o banco PostgresSQL junto do JPA e Hibernate, o destaque é a utilização do DTO, para validação de dados. Também se fez da utilização do Docker, para hospedar o microserviço. Basicamente, ao enviar para a rota, é enviado um e-mail para minha caixa de entrada e salvo no banco de dados.',link:'https://github.com/dilsoncampelo10/micromail',icons:['devicon-spring-plain colored','devicon-docker-plain colored']}];

    openModal(index: number) {
      this.selectedProjectIndex = index;
  }
}

