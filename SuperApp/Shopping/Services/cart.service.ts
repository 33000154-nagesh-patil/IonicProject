import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class CartService{
    constructor() {}
    cartItems = new BehaviorSubject([])
}