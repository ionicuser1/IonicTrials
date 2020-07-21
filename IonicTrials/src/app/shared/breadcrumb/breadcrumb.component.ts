import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interface/breadcrumb';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  

  public breadcrumbs: Breadcrumb[];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.breadcrumbs = this.constructBreadCrumb(this.activatedRoute.root);
   }

  ngOnInit() {
    this.router.events.pipe(
      filter(() => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.breadcrumbs = this.constructBreadCrumb(this.activatedRoute.root);
    })
  }

  constructBreadCrumb(route: ActivatedRoute, url:string = '', breadcrumbs: Breadcrumb[]=[]): Breadcrumb[] {
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
    
    const nextUrl = path ? `${url}/${path}` : url;
    const breadcrumb: Breadcrumb ={
      label: label,
      url: nextUrl
    };
    return ;
  }

}
