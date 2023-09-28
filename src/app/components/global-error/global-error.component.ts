import { Component } from '@angular/core';
import {ErrorService} from "../../services/error.service";

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
})
export class GlobalErrorComponent {
  constructor(public errorServise: ErrorService) { }

  ngOnInit(): void {
  }
}
