import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productId$: Observable<string>;
  constructor(activatedRoute: ActivatedRoute) {
    this.productId$ = activatedRoute.paramMap.pipe(map((p) => p.get('id')));
  }

  ngOnInit(): void {}
}
