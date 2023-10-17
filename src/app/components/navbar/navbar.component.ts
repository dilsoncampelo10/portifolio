import { Component, HostListener } from '@angular/core';
import { IMenuItem } from 'src/app/interfaces/IMenuItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isScrolled = false;

  menuItems: IMenuItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre' },
    { id: 'experience', label: 'Experiência' },
    { id: 'skill', label: 'Habilidades' },
    { id: 'service', label: 'Serviços' },
    { id: 'project', label: 'Projetos' }
  ];

  activeMenuItem: string | null = null;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10 ? true : false;
    this.onScroll();
  }

  onScroll(): void {
    const scrollPosition = window.scrollY +5;

    for (const item of this.menuItems) {
      const element = document.getElementById(item.id);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.activeMenuItem = item.id;
          break;
        }
      }
    }
  }

}
