import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  textoOriginal = "Desenvolvedor de Software, Desenvolvedor Back-End, Desenvolvedor PHP/Laravel, Desenvolvedor Java/Spring";
  palavras: string[] = this.textoOriginal.split(', '); // Separa as palavras pela vírgula e espaço
  palavraAtualIndex = 0;
  palavraAtual = '';
  mostrarTexto = true;

  ngOnInit() {
    this.mostrarProximaPalavra();
  }

  mostrarProximaPalavra() {
    if (this.palavraAtualIndex < this.palavras.length) {
      this.palavraAtual = this.palavras[this.palavraAtualIndex];
      this.palavraAtualIndex++;
      this.mostrarTexto = true;
      setTimeout(() => {
        this.mostrarTexto = false;
        this.mostrarProximaPalavra();
      }, 2000); // 2000 milissegundos (2 segundos) para mostrar cada palavra
    }
  }
}
