import { Component, Input } from '@angular/core';
import { IProject } from 'src/app/interfaces/IProject';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() project: IProject = { image:'',title:'',description: '',link:'',icons: []};
}
