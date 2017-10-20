import { Appetizers } from './appetizers';
import { Menu } from './menu';
import { MenuService } from './menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {
items: Menu[] = [];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    // console.log(this.menuService.getAll().subscribe(m => this.items = m));
    this.menuService.getAll().subscribe(m => {
      console.log(m);
      this.items = m;
    });
}
}

