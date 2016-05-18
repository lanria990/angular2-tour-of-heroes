import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";
import {DashboardComponent} from "./dashboard.component";
import {HeroesComponent} from  './heroes.component'


@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
     	<a [routerLink]="['Dashbord']">Dashboard</a>
     	<a [routerLink]="['Heroes']">Heroes</a>
  </nav>
   	<router-outlet></router-outlet>
    <!--<my-hero-detail [hero]="selectedHero"></my-hero-detail>-->
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroService, ROUTER_PROVIDERS]
})

@RouteConfig([{
  path: '/heroes',
  name: 'Heroes',
  component: HeroesComponent
}, {
  path: '/dashbord',
  name: 'Dashbord',
  component: DashboardComponent,
  useAsDefault: true
},{
  path: '/detail/:id',
  name: 'HeroDetail',
  component: HeroDetailComponent
}])


export class AppComponent {
  title = 'Tor of Heroes';
}





