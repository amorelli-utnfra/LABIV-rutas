import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rutas';

  constructor(private router: Router) {

  }

  goTo(path: string) {
    this.router.navigate([path]);
    // this.router.navigateByUrl(path)
  }
}
