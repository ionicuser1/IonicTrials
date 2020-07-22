import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interface/breadcrumb';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { param } from 'jquery';
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
    let clickable = route.routeConfig && route.routeConfig.data && route.routeConfig.data.clickable;
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
    
    
    const latestPath = path.split('/').pop();
    const dynamicRoute = latestPath.startsWith(':');
    if(dynamicRoute && route.snapshot){
      const paramName = latestPath.split(':')[1];
      const storedPath = paramName;
      path = path.replace(latestPath, route.snapshot.params[paramName]);
      label = route.snapshot.params[paramName];
    }

    const nextUrl = path ? `${url}/${path}` : url;
    const breadcrumb: Breadcrumb ={
      label: label,
      url: nextUrl,
    };

    const newBreadCrumbs = breadcrumb.label ? [ ...breadcrumbs, breadcrumb] : [ ...breadcrumbs];
    if(route.firstChild){
      return this.constructBreadCrumb(route.firstChild, nextUrl, newBreadCrumbs);
    }
    return newBreadCrumbs;
  }

  breadCrumbPath(i: number){
    let newUrl = this.breadcrumbs[i].url;
    this.router.navigate([newUrl]);
  }

}
