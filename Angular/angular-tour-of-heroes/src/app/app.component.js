"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    { id: 11, name: 'Mr.Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'Rubberman' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr.IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \t<h1>{{title}}</h1>\n  \t<h2>My Heroes</h2>\n  \t<ul class=\"heroes\">\n\t\t<li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\">\n\t\t\t<span class=\"badge\">{{hero.id}}</span>{{hero.name}}\n\t\t</li>\n  \t</ul>\n  \t<div *ngIf=\"selectedHero\">\n\t\t<h2>{{selectedHero.name}} details!</h2>\n\t\t<div><label>id: </label>{{selectedHero.id}}</div>\n\t\t<div>\n\t\t\t<label>name: </label>\n\t\t\t<input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\">\n\t\t</div>\n  \t</div>\n  ",
        styles: ["\n\t.selected {\n\t\tbackground-color: #CFD8DC !important;\n\t\tcolor: white;\n\t}\n\t.heroes {\n\t\tmargin: 0 0 2em 0;\n\t\tlist-style-type: none;\n\t\tpadding: 0;\n\t\twidth: 15em;\n\t}\n\t.heroes li {\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\tleft: 0;\n\t\tbackground-color: #EEE;\n\t\tmargin: .5em;\n\t\tpadding: .3em 0;\n\t\theight: 1.6em;\n\t\tborder-radius: 4px;\n\t}\n\t.heroes li.selected:hover {\n\t\tbackground-color: #BBD8DC !important;\n\t\tcolor: white;\n\t}\n\t.heroes li:hover {\n\t\tcolor: #607D8B;\n\t\tbackground-color: #DDD;\n\t\tleft: .1em;\n\t}\n\t.heroes .text {\n\t\tposition: relative;\n\t\ttop: -3px;\n\t}\n\t.heroes .badge {\n\t\tdisplay: inline-block;\n\t\tfont-size: small;\n\t\tcolor: white;\n\t\tpadding: 0.8em 0.7em 0 0.7em;\n\t\tbackground-color: #607D8B;\n\t\tline-height: 1em;\n\t\tposition: relative;\n\t\tleft: -1px;\n\t\ttop: -4px;\n\t\theight: 1.8em;\n\t\tmargin-right: .8em;\n\t\tborder-radius 4px 0 0 4px;\n\t}\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map