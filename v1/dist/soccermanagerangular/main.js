(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<main role=\"main\" class=\"container\">\n    <router-outlet></router-outlet>\n</main><!-- /.container -->\n<footer class=\"blog-footer\">\n    <p>Created By ADICOM</p>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/header/header.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/header/header.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">SMA</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n        aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div *ngIf=\"user\" class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"\" (click)=\"storage.linkClick('home')\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                    aria-expanded=\"false\">{{storage.getTeamName(user.teamId)}}</a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n                    <a class=\"dropdown-item\" routerLink=\"\" (click)=\"storage.linkClick('table')\">Table</a>\n                    <a class=\"dropdown-item\" routerLink=\"\" (click)=\"storage.linkClick('topscorer')\">Topscorer</a>\n                    <a class=\"dropdown-item\" routerLink=\"\" (click)=\"storage.linkClick('fixture')\">Fixture</a>\n                </div>\n            </li>\n            <li *ngIf=\"endSeason\" class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/home\" (click)=\"gameService.NewSeason()\">New Season</a>\n            </li>\n            <li *ngIf=\"!endSeason\" class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/tactic\">Play</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/national\">National</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/players\">Players</a>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav\">\n            <!-- <li class=\"nav-item\">\n                <a class=\"nav-link\">SEASON {{user.season}}</a>\n            </li> -->\n            <div>\n                <h6>SEASON {{user.season}}</h6>\n                <h6>WEEK {{user.week - 1}}</h6>\n            </div>\n        </ul>\n    </div>\n</nav>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/custom/custom.module": [
		"./src/app/modules/custom/custom.module.ts",
		"modules-custom-custom-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var routes = [
    {
        path: '',
        loadChildren: './modules/custom/custom.module#CustomModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'soccermanagerangular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config/firstname.ts":
/*!*************************************!*\
  !*** ./src/app/config/firstname.ts ***!
  \*************************************/
/*! exports provided: firstName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstName", function() { return firstName; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var firstName = {
    'Albania': [
        'Noel',
        'Joel',
        'Mateo',
        'Ergi',
        'Luis',
        'Aron',
        'Samuel',
        'Roan',
        'Roel',
        'Xhoel'
    ],
    'England': [
        'Vincent',
        'Kai',
        'Frankie',
        'Nico',
        'Calvin',
        'Arlo',
        'Teddie',
        'Kieran',
        'Adam',
        'Freddy',
        'Harrison',
        'Daniel',
        'Quinn',
        'Hugh',
        'Rufus',
        'Raphael',
        'Raphael',
        'Maxwell',
        'Bradley',
        'Maximilian',
    ],
    'USA': [
        'Joseph',
        'Charles',
        'Frankie',
        'Max',
        'Charlie',
        'Tyson',
        'Rogelio',
        'Darius',
        'Byron',
        'Kolby',
        'Bailey',
        'Aaron',
        'Ryan',
        'Callum',
        'Reece',
        'Jonathan',
        'Jasper',
        'Nehemiah',
        'Braeden',
        'Titus',
    ],
    'China': [
        'Xiang',
        'Wu',
        'Zhao',
        'Liu',
        'Xiong',
        'Li',
        'Feng',
        'Sun',
        'Yang',
        'Xiao',
        'Zou',
        'Lai',
        'Zeng',
        'Bai',
        'Liu',
        'Xian',
        'Geng',
        'Kong',
        'Wan',
        'Xiang',
    ],
    'Greece': [
        'Haris',
        'Iasonas',
        'Aristotelis',
        'Aristidis',
        'Panikos',
        'Serapheim',
        'Stergios',
        'Eros',
        'Iordanis',
        'Myron',
        'Vassilios',
        'Miron',
        'Periklis',
        'Aggelos',
        'Yorgos',
        'Prokopos',
        'Minos',
        'Kiriakos',
        'Spiro',
        'Lambros',
    ],
    'Russia': [
        'Fomin',
        'Konyakov',
        'Kubyshkin',
        'Grekov',
        'Ryzhanov',
        'Khodyayev',
        'Ilyushin',
        'Rabrenovich',
        'Polachev',
        'Yumashev',
        'Dernov',
        'Balakirev',
        'Annikov',
        'Chupakhin',
        'Savasin',
        'Pokrovsky',
        'Belinsky',
        'Glukhov',
        'Kirilishen',
        'Koshelev',
    ],
    'Algeria': [
        'Mohamed',
        'Abdelkader',
        'Ahmed',
        'Mohammed',
        'Ali',
        'Rachid',
        'Said',
        'Brahim',
        'Omar',
        'Djamel'
    ],
    'Argentina': [
        'Santiago',
        'Mateo',
        'Juan',
        'Matías',
        'Nicolás',
        'Benjamín',
        'Pedro',
        'Tomás',
        'Thiago',
    ],
    'Australia': [
        'Oliver',
        'William',
        'Jack',
        'Noah',
        'Thomas',
        'Lucas',
        'James',
        'Alex',
        'Alexander',
        'Ethan',
    ],
    'Austria': [
        'Lukas',
        'Maximilian',
        'Jakob',
        'David',
        'Tobias',
        'Paul',
        'Jonas',
        'Felix',
        'Alexander',
        'Elias',
    ],
    'Azerbaijan': [
        'Yusif',
        'Ali',
        'Omar',
        'Huseyn',
        'Mahammad',
        'Murad',
        'Aykhan',
        'Ughur',
        'Ibrahim',
        'Tunar',
    ],
    'Belgium': [
        'Lucas',
        'Louis',
        'Noah',
        'Nathan',
        'Adam',
        'Arthur',
        'Mohamed',
        'Victor',
        'Mathis',
        'Liam',
    ],
    'Brazil': [
        'Miguel',
        'Arthur',
        'Davi',
        'Heitor',
        'Gabriel',
        'Bernardo',
        'Lorenzo',
        'João',
        'Miguel',
        'Enzo',
        'Gabriel',
        'Pedro',
        'Henrique',
    ],
    'France': [
        'Ladislas ',
        'Constantin ',
        'Basile',
        'Émilien ',
        'Jean-Guy ',
        'Timothé ',
        'Fabien ',
        'Constantin ',
        'Maxime ',
        'Samuel ',
    ],
    'Germany': [
        'Tizian',
        'Nils',
        'Steffen',
        'Gert',
        'Oskar',
        'Cäsar',
        'Meik',
        'Gunter',
        'Maximilian',
        'Ruprecht',
    ],
    'Italy': [
        'Girardo',
        'Giovanni',
        'Ambrogio',
        'Marolo',
        'Elvezio',
        'Silvano',
        'Attilio',
        'Esuperio',
        'Bruto',
        'Vulpiano',
    ],
    'Iran': [
        'Amin',
        'Hossein',
        'Kazem',
        'Soroosh',
        'Peyman',
        'Mehran',
        'Amir Mohammad',
        'Changiz',
        'Behrouz',
        'Sirvan',
        'Homayoun',
        'Qobad',
        'Sahand',
        'Mamad',
        'Vahid',
        'Rostam',
        'Benyamin',
        'Mehdi',
        'Yashar',
        'Latif',
    ],
    'Turkey': [
        'Eraydin',
        'Alpar',
        'Tumkor',
        'Seda',
        'Ali Riza',
        'Okay',
        'Tor',
        'Apak',
        'Tozun',
        'Soylu',
        'Ergor',
        'Uzay',
        'Erdener',
        'Dinc',
        'Ayyildiz',
        'Vedat',
        'Kaner',
        'Tezal',
        'Goktug',
        'Hayri',
    ],
    'Japan': [
        'Hirota',
        'Kurosawa',
        'Kawamura',
        'Murano',
        'Hino',
        'Sakane',
        'Hori',
        'Yoshikawa',
        'Edamitsu',
        'Komuro',
        'Seto',
        'Hashi',
        'Saito',
        'Amari',
        'Sanda',
        'Fujimura',
        'Ishikura',
        'Kawada',
        'Oshita',
        'Shinsato',
    ],
    'KoreaSouth': [
        'Sa',
        'Chon',
        'Song',
        'Choe',
        'Kong',
        'Mangjol',
        'Chang',
        'In',
        'Ryuk',
        'Pu',
        'Chegal',
        'Yu',
        'Park',
        'Sonu',
        'Yang',
        'Tang',
        'Chu',
        'Kum',
        'Che',
        'Kum',
    ],
    'Iraq': ['Tareef',
        'Zuraara',
        'Jaad',
        'Bishr',
        'Mudrik',
        'Ashraf',
        'Umair',
        'Munsif',
        'Luqmaan',
        'Mahdi',
        'Ameen',
        'Naseem',
        'Muhammad',
        'Abdul Wahaab',
        'Abdul Kareem',
        'Abdul Baasid',
        'Alawi',
        'Sakeen',
        'Usaama',
        'Mushtaaq',
        'Sabaah',
        'Murshid',
        'Zayyaan',
        'Qutb',
        'Abdul Wadood',
        'Shabaan',
        'Adeeb',
        'Razeen',
        'Abdul Haleem',
        'Nassaar',],
    'Saudi Arabia': ['Tareef',
        'Zuraara',
        'Jaad',
        'Bishr',
        'Mudrik',
        'Ashraf',
        'Umair',
        'Munsif',
        'Luqmaan',
        'Mahdi',
        'Ameen',
        'Naseem',
        'Muhammad',
        'Abdul Wahaab',
        'Abdul Kareem',
        'Abdul Baasid',
        'Alawi',
        'Sakeen',
        'Usaama',
        'Mushtaaq',
        'Sabaah',
        'Murshid',
        'Zayyaan',
        'Qutb',
        'Abdul Wadood',
        'Shabaan',
        'Adeeb',
        'Razeen',
        'Abdul Haleem',
        'Nassaar',],
    'Qatar': ['Tareef',
        'Zuraara',
        'Jaad',
        'Bishr',
        'Mudrik',
        'Ashraf',
        'Umair',
        'Munsif',
        'Luqmaan',
        'Mahdi',
        'Ameen',
        'Naseem',
        'Muhammad',
        'Abdul Wahaab',
        'Abdul Kareem',
        'Abdul Baasid',
        'Alawi',
        'Sakeen',
        'Usaama',
        'Mushtaaq',
        'Sabaah',
        'Murshid',
        'Zayyaan',
        'Qutb',
        'Abdul Wadood',
        'Shabaan',
        'Adeeb',
        'Razeen',
        'Abdul Haleem',
        'Nassaar',],
    'UAE': ['Tareef',
        'Zuraara',
        'Jaad',
        'Bishr',
        'Mudrik',
        'Ashraf',
        'Umair',
        'Munsif',
        'Luqmaan',
        'Mahdi',
        'Ameen',
        'Naseem',
        'Muhammad',
        'Abdul Wahaab',
        'Abdul Kareem',
        'Abdul Baasid',
        'Alawi',
        'Sakeen',
        'Usaama',
        'Mushtaaq',
        'Sabaah',
        'Murshid',
        'Zayyaan',
        'Qutb',
        'Abdul Wadood',
        'Shabaan',
        'Adeeb',
        'Razeen',
        'Abdul Haleem',
        'Nassaar',],
    'Egypt': [
        'Ahmad',
        'Kafele',
        'Nader',
        'Abdelrahman',
        'Nassor',
        'Assem',
        'Mahmoud',
        'Barika',
        'Bebti',
        'Hassan',
        'Adham',
        'Mamdoh',
        'Marwan',
        'Hosni',
        'Karim',
        'Aymn',
        'Aly',
        'Kamuzu',
        'Ismael',
    ],
    'Spain': [
        'Gael',
        'Franco',
        'Zacarías',
        'Saúl',
        'Macos',
        'Eduard',
        'Jonathan',
        'Christian',
        'Samuel',
        'Iker',
        'Alfredo',
        'Luis',
        'Nicolás',
        'Jose',
        'Mauric',
        'Lautaro',
        'Aaron',
        'Vicent',
        'Emiliano',
        'Juan',
    ],
    'Mexico': [
        'Gael',
        'Franco',
        'Zacarías',
        'Saúl',
        'Macos',
        'Eduard',
        'Jonathan',
        'Christian',
        'Samuel',
        'Iker',
        'Alfredo',
        'Luis',
        'Nicolás',
        'Jose',
        'Mauric',
        'Lautaro',
        'Aaron',
        'Vicent',
        'Emiliano',
        'Juan',
    ],
    'Portugal': [
        'Fred',
        'Leopoldo',
        'Gustavo',
        'André',
        'Ernesto',
        'Artur',
        'Heliodoro',
        'Ismael',
        'Rogério',
        'Tadeu',
        'Feliciano',
        'Isaac',
        'Ângelo',
        'Luís',
        'Victor',
        'Cristóvão',
        'Régulo',
        'Raul',
        'Kévim',
        'Noah',
    ],
    'Nigeria': [
        'Yobachukwu',
        'Chydi',
        'Nkechi',
        'Ebele',
        'Jaja',
        'Okparra',
        'Madukaife',
        'Ugoorji',
        'Uwaezuoke',
        'Ijendu',
        'Okpara',
        'Uzochi',
        'Okeke',
        'Chydea',
        'Okparra',
        'Chimaijem',
        'Chikere',
        'Chidiebere',
        'Chidey',
        'Madu',
    ],
    'Croatia': [
        'Zvonko',
        'Siniša',
        'Josip',
        'Andrija',
        'Ljubomir',
        'Alan',
        'Denis',
        'Zoran',
        'Ivan',
        'Dalibor',
        'Gordan',
        'Dinko',
        'Mislav',
        'Teo',
        'Božo',
        'Robert',
        'Kristijan',
        'Ilija',
        'Zdenko',
        'David',
    ],
    'Czech Republic': [
        'Roland',
        'Dalimil',
        'Kristián',
        'Gabriel',
        'Teodor',
        'Mikuláš',
        'Radovan',
        'Karel',
        'Radim',
        'Herbert',
        'Štefan',
        'Vojtěch',
        'Kamil',
        'Jiří',
        'Svatoslav',
        'Jan',
        'Miloslav',
        'Věnceslav',
        'Oliver',
        'Václav',
    ],
    'Denmark': [
        'Mogens',
        'David',
        'Torsten',
        'Ebbe',
        'Lauritz',
        'Elmer',
        'Bruno',
        'Freddy',
        'Jan',
        'Jannik',
        'Nikolaj',
        'Albert',
        'Nicolai',
        'Tim',
        'Egon',
        'Tim',
        'Christian',
        'Claus',
        'Nis',
        'Laust',
        'Arnold',
        'Patrick',
        'Axel',
        'Sonny',
        'Knud',
        'Markus',
        'David',
        'Sonny',
        'Thorkild',
        'Fritz',
    ],
    'Netherlands': [
        'Aart',
        'Daan',
        'Henkjan',
        'Joep',
        'Klaas',
        'Noud',
        'Lodewijk',
        'Coen',
        'Dirk',
        'Diederick',
        'Rudie',
        'Gijsje',
        'Marthijn',
        'Maurits',
        'Govert',
        'Hermen',
        'Jan',
        'Ewoud',
        'Twan',
        'Kees',
        'Maurits',
        'Mannes',
        'Emiel',
        'Nard',
        'Arnout',
        'Elco',
        'Corneel',
        'Nelis',
    ],
    'Poland': [
        'Hanusz ',
        'Wojsław ',
        'Kanimir ',
        'Roman ',
        'Lesław ',
        'Bogusław ',
        'Szymon ',
        'Alfons ',
        'Walentyn ',
        'Florentyn ',
        'Konstantyn ',
        'Ksawery ',
        'Donat ',
        'Klemens ',
        'Apoloniusz ',
        'Jaromir ',
        'Fryderyk ',
        'Rafał ',
        'Krzysztof ',
        'Leonard ',
        'Aleksy ',
        'Przemysł ',
        'Ziemowit ',
        'Żelisław ',
        'Onufry ',
        'Jozafat ',
        'Filip ',
        'Brunon ',
        'Antonius ',
        'Ryszard ',
    ],
    'Serbia': [
        'Gojko',
        'Gabrijel',
        'Slavoljub',
        'Jezdimir',
        'Milić',
        'Živko',
        'Teodor',
        'Staniša',
        'Života',
        'Milić',
        'Jakov',
        'Dobroslav',
        'Sretomir',
        'Vidak',
        'Grigorije',
        'Branko',
        'Vitomir',
        'Adam',
        'Saša',
        'Milan',
        'Stanimir',
        'Nenad',
        'Arsenije',
        'Tihomir',
        'Mijat',
        'Bogdan',
        'Filotije',
        'Danko',
        'Lubomir',
        'Mileta',
    ],
    'Uruguay': [
        'Israel',
        'Juan',
        'Jesús',
        'Armando',
        'Anthony',
        'Felipe',
        'Mariano',
        'Felix',
        'Antonio',
        'Roberto',
        'Luis',
        'Alonso',
        'Serafín',
        'Ian',
        'Lorenzo',
        'Isidoro',
        'Álvaro',
        'Valentín',
        'Diego',
        'Saúl',
        'Nicolás',
        'Mateo',
        'Jaime',
        'Jonatán',
        'Manuel',
        'Patricio',
        'Diego',
        'Rafael',
        'Jonathan',
        'Raul',
    ],
    'Ukraine': [
        'Andrij',
        'Orest',
        'Taras',
        'Panas',
        'Illya',
        'Vadym',
        'Valerij',
        'Anatolij',
        'Kazymyr',
        'Havrylo',
        'Arkadij',
        'Stepan',
        'Josyp',
        'Svyatoslav',
        'Taras',
        'Pylyp',
        'Pavlo',
        'Henadij',
        'Vladyslav',
        'Eduard',
        'Viktor',
        'Hryhorij',
        'Myron',
        'Panas',
        'Orest',
        'Taras',
        'Artem',
        'Kuzma',
        'Anatolij',
        'Petro',
    ],
    'Bulgaria': [
        'Boris',
        'Sivo',
        'Gavril',
        'Milosh',
        'Kupen',
        'Momchil',
        'Bozhur',
        'Milan',
        'Radul',
        'Yakov',
        'Evgeni',
        'Krum',
        'Radko',
        'Stanko',
        'Yasen',
        'Damyan',
        'Enyo',
        'Vasil',
        'Lazar',
        'Slavey',
        'Sharo',
        'Zitko',
        'Sharo',
        'Trayko',
        'Mitre',
        'Yanko',
        'Chernyu',
        'Naso',
        'Rayko',
        'Teodor',
    ],
    'Colombia': [
        'Maximiliano',
        'Diego',
        'Franco',
        'Adán',
        'Edmundo',
        'Efrain',
        'Alonzo',
        'Hector',
        'Isidoro',
        'Maximiliano',
        'Jeremías',
        'David',
        'Macos',
        'Ramón',
        'Emanuel',
        'Ramón',
        'Miguel',
        'Tomás',
        'Jerónimo',
        'Nicolás',
        'Ricardo',
        'Paúl',
        'Ivan',
        'Lucho',
        'Aarón',
        'Dylan',
        'Jairo',
        'Mariano',
        'Jaime',
        'Valentino',
    ],
    'Romania': [
        'Ionus',
        'Bogdan',
        'George',
        'Eduard',
        'Anton',
        'Cristinel',
        'Ionut',
        'Costica',
        'George',
        'Anatolie',
        'Toma',
        'Alin',
        'Carol',
        'Dinu',
        'Alexandru',
        'Ivantie',
        'Claudiu',
        'Danut',
        'Vladimir',
        'Rares',
        'Emilian',
        'Emanuel',
        'Catarino',
        'Tiberiu',
        'Nic',
        'Marku',
        'Toma',
        'Iorghu',
        'Beniamin',
        'Costin',
    ],
    'Sweden': [
        'Elvin',
        'Jack',
        'Ragnar',
        'Emil',
        'Eric',
        'Melvin',
        'Jonathan',
        'Malte',
        'Mats',
        'Leo',
        'Linus',
        'Filip',
        'Benjamin',
        'Sten',
        'Maximilian',
        'Marcus',
        'Peter',
        'Michael',
        'Vincent',
        'Erik',
        'Ögge',
        'Patrick',
        'Alfred',
        'Ored',
        'Vilhelm',
        'Benjamin',
        'Eric',
        'Holvaster',
        'Joen',
        'Lukas',
    ],
    'Switzerland': [
        'Hansruedi',
        'Gioele',
        'Toni',
        'Jacopo',
        'Theo',
        'William',
        'Jocki',
        'Balz',
        'Levin',
        'Conz',
        'Oscar',
        'Lukas',
        'Urban',
        'Oskar',
        'Rätus',
        'Göpf',
        'Retho',
        'Lorenzo',
        'Niemir',
        'Thomas',
        'Samuel',
        'Hugo',
        'Lugano',
        'Luis',
        'Mark',
        'Töbe',
        'Francesco',
        'Louis',
        'Thomas',
        'Loris',
    ],
    'Tunisia': [
        'Ahmed',
        'Mohamed',
        'Aymen',
        'Mehdi',
        'Karim',
        'Skander',
        'Slim',
        'Aziz',
        'Kais',
        'Firas',
        'Ali',
        'Amine',
        'Yassine',
        'Rayen',
        'Bilel',
        'Youssef',
        'Wassim',
        'Marouen',
        'Khalil',
        'Taha',
        'Salah',
        'Hamza',
        'Helmi',
        'Yessine',
        'Motaz',
        'Med',
        'Oussama',
        'Bechir',
        'Hamdi',
        'Adam',
    ],
    'Morocco': [
        'Ayham',
        'Fayaaz',
        'Fayyad',
        'ElHouari',
        'Thawab',
        'Abdelilah',
        'Jawdah',
        'Hayyan',
        'Iyas',
        'Zaky',
        'Amaniyy',
        'Hadir',
        'Mhamed',
        'Mojiz',
        'Ruhul',
        'Boutaje',
        'Samir',
        'Ayham',
        'Abdellah',
        'Mujahid',
        'Brahim',
        'Rachid',
        'Habbab',
        'Thamir',
        'Amaniyy',
        'ElMahi',
        'Jaul',
        'Abdullah',
        'Muaz',
        'Jawdah',
    ],
    'Uzbekistan': [
        'Elyor',
        'Narzuqul',
        'Ghulam',
        'Tursun',
        'Davlat',
        'Shakir',
        'Yunis',
        'Tesha',
        'Orif',
        'Abubakir',
        'Abubakir',
        'Sodyq',
        'Sulaymon',
        'Arslon',
        'Zakir',
        'Yunis',
        'Hamra',
        'Otkir',
        'Sharif',
        'Vali',
        'Toychi',
        'Qodir',
        'Karim',
        'Vali',
        'Jora',
        'Qasim',
        'Mahkam',
        'Munavvar',
        'Ashur',
        'Otkir',
    ],
    'Venezuela': [
        'Valentino',
        'Ernesto',
        'José',
        'Abram',
        'Camilo',
        'Ian',
        'Jeremías',
        'Milagros',
        'Daniel',
        'Ivan',
        'Alfonso',
        'Mauricio',
        'Inhué',
        'Agustín',
        'Matías',
        'Julian',
        'Cristian',
        'Álvaro',
        'David',
        'Álvaro',
        'Óliver',
        'Lucas',
        'Raúl',
        'Abraham',
        'Iván',
        'Marco',
        'Bernabé',
        'Alex',
        'Alfonso',
        'Alfredo',
    ],
    'Norway': [
        'Børre',
        'Johan',
        'Audun',
        'Ivan',
        'Leiv',
        'Arnfinn',
        'Leif',
        'Steinar',
        'Snorre',
        'Nikolai',
        'Benjamin',
        'Terje',
        'Tormod',
        'Arve',
        'Jarle',
        'Sebastian',
        'Øystein',
        'Tor',
        'Alfred',
        'Johannes',
        'Sten',
        'Axel',
        'Georg',
        'Johnny',
        'Bjarne',
        'Magnar',
        'Ingvald',
        'Fred',
        'Arvid',
        'Sander',
    ],
    'Ghana': [
        'Koffi',
        'Awotwe',
        'Kwamina',
        'Afúom',
        'Pánin',
        'Kwami',
        'Bekṍe',
        'Kwamena',
        'Kwámè',
        'Berko',
        'Kow',
        'Anané',
        'Yao',
        'Kuwame',
        'Píèsíe',
        'Kojo',
        'Kwesi',
        'Awotwie',
        'Gaddo',
        'Kúmaa',
        'Koffi',
        'Nyaméky',
        'Kokou',
        'Kwasí',
        'Jojo',
        'Komlá',
        'Kwakú',
        'Kuwame',
        'Antó',
        'Dúkũ',
    ],
    'Hungary': [
        'Szilágyi',
        'Bodnár',
        'Orsós',
        'Jakab',
        'Simon',
        'Tamás',
        'Fábián',
        'Antal',
        'Veres',
        'Péter',
        'Zobor',
        'Major',
        'Deák',
        'Váradi',
        'Takács',
        'Kovács',
        'Barna',
        'Oláh',
        'Virág',
        'Szőke',
        'Egyed',
        'Vass',
        'Vincze',
        'Farkas',
        'Kovács',
        'Péter',
        'Szőke',
        'Lukács',
        'Pál',
        'Kende',
    ],
    'Finland': [
        'Elo',
        'Tarmo',
        'Ilmari',
        'Konsta',
        'Nestori',
        'Kustaa',
        'Untamo',
        'Kai',
        'Elmeri',
        'Joonas',
        'facebook',
        'Eliel',
        'Riku',
        'Aarne',
        'Salomon',
        'Mika',
        'Eevert',
        'Aarno',
        'Alvar',
        'Alfred',
        'Johannes',
        'facebook',
        'Eemeli',
        'Antero',
        'Sami',
        'Kalevi',
        'Raitis',
        'Keijo',
        'Jaakko',
        'Siimon',
        'Eero',
        'Veli',
    ],
    'Georgia': [
        'Bidzina',
        'Akim',
        'Gaioz',
        'Bagrat',
        'Aleksandre',
        'Vasil',
        'Besarion',
        'Misho',
        'Davit',
        'Gurgen',
        'Baadur',
        'Davit',
        'Reziko',
        'Petre',
        'Revaz',
        'Bidzina',
        'Otar',
        'Vaso',
        'Spartak',
        'Nikoloz',
        'Bidzina',
        'Beso',
        'Nika',
        'Otar',
        'Konstantine',
        'Daviti',
        'Temo',
        'Akaki',
        'Besarion',
        'Koba',
    ],
};


/***/ }),

/***/ "./src/app/config/lastname.ts":
/*!************************************!*\
  !*** ./src/app/config/lastname.ts ***!
  \************************************/
/*! exports provided: lastName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastName", function() { return lastName; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var lastName = {
    'Azerbaijan': [
        'Mammadov',
        'Aliyev',
        'Hasanov',
        'Huseynov',
        'Guliyev',
        'Hajiyev',
        'Rasulov',
        'Suleymanov',
        'Musayev',
        'Abbasov',
        'Babayev',
        'Valiyev',
        'Orujov',
        'Ismayilov',
        'Ibrahimov',
    ],
    'England': [
        'Powell',
        'Lawrence',
        'Fox',
        'Bradley',
        'Burton',
        'Russell',
        'Marshall',
        'Sutton',
        'Turner',
        'Davis',
        'Ball',
        'Cook',
        'Moss',
        'Thomas',
        'Cunningham',
        'West',
        'Morgan',
        'Roberts',
        'Holland',
        'Davies',
    ],
    'USA': [
        'Hamilton',
        'Taylor',
        'Price',
        'Howard',
        'Simpson',
        'Griffin',
        'Logan',
        'Terrell',
        'Schwartz',
        'Fry',
        'Grant',
        'George',
        'Bennett',
        'Campbell',
        'Nicholson',
        'Myers',
        'Montoya',
        'Jackson',
        'Cross',
        'Wilcox',
    ],
    'China': [
        'Qiang',
        'Ling',
        'Xuegang',
        'Li',
        'Yating',
        'ZhenKang',
        'Jun',
        'Shuren',
        'Bo',
        'Yu',
        'Qiang',
        'Long',
        'Delan',
        'Wei',
        'Ruogang',
        'Yang',
        'Meng',
        'Xinyue',
        'Shi',
        'Qing',
    ],
    'Greece': [
        'Constantinos',
        'Macris',
        'Maragos',
        'Sannas',
        'Andreadis',
        'Boosalis',
        'Anagnos',
        'Christodoulos',
        'Tavoularis',
        'Callis',
        'Makos',
        'Sicas',
        'Constantinides',
        'Stathopoulos',
        'Demetrios',
        'Garis',
        'Katsaros',
        'Georgopoulos',
        'Grivas',
        'Spinos',
    ],
    'Albania': [
        'Agani',
        'Ajeti',
        'Bajramovic',
        'Bardici',
        'Bejko',
        'Ciftja',
        'Culaj',
        'Dedej',
        'Dreshaj',
        'Elezi',
        'Fazliu',
        'Galica',
        'Gecaj',
        'Halili',
        'Hamza',
        'Hasani',
        'Haxhiu',
        'Meshkalla',
        'Rexhepi',
        'Rugova',
        'Salihu',
        'Shulku',
        'Simaku',
    ],
    'Algeria': [
        'Alloula',
        'Boutella',
        'Djermouni',
        'Khalef',
        'Benlabed',
        'Litim',
        'Belghoul',
        'Benyamina',
        'Partyka',
        'Mammeri',
    ],
    'Argentina': [
        'Toscano',
        'Russo',
        'Iadanza',
        'Benítez',
        'Manfrin',
        'Ávila',
        'Toledo',
        'Núñez',
        'Ferrari',
        'Lucciano',
    ],
    'Australia': [
        'Jackman',
        'Clark',
        'McKenzie',
        'Bishop',
        'Mitchell',
        'Simpson',
        'Ward',
        'Hamilton',
        'Kennedy',
        'Robinson',
    ],
    'Austria': [
        'Baumgartner',
        'Hundertwasser',
        'Fiser',
        'Weinheber',
        'Au',
        'Andris',
        'Faymann',
        'Müller',
        'Auer',
        'Rainer',
    ],
    'Belgium': [
        'Eylenbosch',
        'De Maseneer',
        'Vermeulen',
        'Debruyne',
        'Van Den Bossche',
        'De Rooms',
        'Hoste',
        'Eylenbosch',
        'Descamps',
        'Van Roy',
    ],
    'Brazil': [
        'Alvarez de Matos',
        'Lima Câmara',
        'Guimarães Bosco',
        'Sato Furtado',
        'Amorim Guimarães',
        'Vidal Alves',
        'Leal Vieira',
        'Simões Machado',
        'Luz Garcia',
        'Medina Delchiaro',
    ],
    'France': [
        'Arsenault',
        'Bazalgette',
        'De Saint-Pierre',
        'Leclair',
        'Didier',
        'Dieudonné',
        'Masson',
        'Ballesdens',
        'Deshaies',
        'Fétique',
    ],
    'Germany': [
        'Haselrieder',
        'Bechtold',
        'Stromberg',
        'Hasselhoff',
        'Pasche',
        'Theismann',
        'Engelberg',
        'Seidl',
        'Fleischman',
        'Kleinheisterkamp',
    ],
    'Italy': [
        'De Filippis',
        'Zinno',
        'Avellino',
        'Audino',
        'Pennino',
        'Micale',
        'Covino',
        'Bonomo',
        'Fata',
        'Terrano',
    ],
    'Iran': [
        'Yazdani',
        'Mehrnia',
        'Yekta',
        'Azari',
        'Khalili',
        'Nemati',
        'Eghbali',
        'Taghipour',
        'Asayesh',
        'Dehghan',
        'Sobhani',
        'Panahi',
        'Moshiri',
        'Miri',
        'Bahadori',
        'Tajik',
        'Soleymani',
        'Torabi',
        'Kashkouli',
        'Kamran',
    ],
    'Turkey': [
        'Yildizeli',
        'Bucak',
        'Sevim',
        'Altan',
        'Sezen',
        'Uslu',
        'Gursu',
        'Kubat',
        'Zaimoglu',
        'Akbulut',
        'Egemen',
        'Simsek',
        'Koz',
        'Emre',
        'Yakut',
        'Guclu',
        'Basturk',
        'Turkyilmaz',
        'Karabulut',
        'Karatay',
    ],
    'Japan': [
        'Yoshii',
        'Shizue',
        'Toshitsugu',
        'Ikku',
        'Toshikuni',
        'Nobuyori',
        'Iesada',
        'Shintaro',
        'Akihiro',
        'Hirokumi',
        'Haruhiro',
        'Aki',
        'Norihide',
        'Yoshinaka',
        'Hirotada',
        'Sojuro',
        'Kyoden',
        'Hoshi',
        'Katsumi',
        'Motoshige',
    ],
    'KoreaSouth': [
        'Hyonjun',
        'Young-Ja',
        'Jong-Yeol',
        'Yong-Chol',
        'Jun-Seo',
        'Seong-Gi',
        'Chong-Yol',
        'Min-Hyuk',
        'Tohyon',
        'Kwang',
        'Ji-Hu',
        'Dong-Sun',
        'Song-Su',
        'Kwang-Hyok',
        'Joon-Ho',
        'Seong',
        'Suk-Chul',
        'Pyong-Ho',
        'Young-Soo',
        'Do-Hyeon',
    ],
    'Iraq': ['el-Zamani',
        'al-Masood',
        'al-Qazi',
        'al-Mahfouz',
        'al-Haider',
        'el-Akbar',
        'el-Ahsan',
        'el-Sala',
        'el-Malik',
        'al-Tawil',
        'al-Shabazz',
        'al-Faraj',
        'el-Nasser',
        'el-Uddin',
        'al-Baddour',
        'el-Abdella',
        'al-Qazi',
        'el-Popal',
        'el-Akbari',
        'al-Zadeh',
        'el-Salih',
        'al-Massoud',
        'al-Soliman',
        'el-Rassi',
        'al-Zamani',
        'al-Abid',
        'el-Bahri',
        'el-Shareef',
        'el-Hatem',
        'al-Abbasi',],
    'Saudi Arabia': ['el-Zamani',
        'al-Masood',
        'al-Qazi',
        'al-Mahfouz',
        'al-Haider',
        'el-Akbar',
        'el-Ahsan',
        'el-Sala',
        'el-Malik',
        'al-Tawil',
        'al-Shabazz',
        'al-Faraj',
        'el-Nasser',
        'el-Uddin',
        'al-Baddour',
        'el-Abdella',
        'al-Qazi',
        'el-Popal',
        'el-Akbari',
        'al-Zadeh',
        'el-Salih',
        'al-Massoud',
        'al-Soliman',
        'el-Rassi',
        'al-Zamani',
        'al-Abid',
        'el-Bahri',
        'el-Shareef',
        'el-Hatem',
        'al-Abbasi',],
    'Qatar': ['el-Zamani',
        'al-Masood',
        'al-Qazi',
        'al-Mahfouz',
        'al-Haider',
        'el-Akbar',
        'el-Ahsan',
        'el-Sala',
        'el-Malik',
        'al-Tawil',
        'al-Shabazz',
        'al-Faraj',
        'el-Nasser',
        'el-Uddin',
        'al-Baddour',
        'el-Abdella',
        'al-Qazi',
        'el-Popal',
        'el-Akbari',
        'al-Zadeh',
        'el-Salih',
        'al-Massoud',
        'al-Soliman',
        'el-Rassi',
        'al-Zamani',
        'al-Abid',
        'el-Bahri',
        'el-Shareef',
        'el-Hatem',
        'al-Abbasi',],
    'UAE': ['el-Zamani',
        'al-Masood',
        'al-Qazi',
        'al-Mahfouz',
        'al-Haider',
        'el-Akbar',
        'el-Ahsan',
        'el-Sala',
        'el-Malik',
        'al-Tawil',
        'al-Shabazz',
        'al-Faraj',
        'el-Nasser',
        'el-Uddin',
        'al-Baddour',
        'el-Abdella',
        'al-Qazi',
        'el-Popal',
        'el-Akbari',
        'al-Zadeh',
        'el-Salih',
        'al-Massoud',
        'al-Soliman',
        'el-Rassi',
        'al-Zamani',
        'al-Abid',
        'el-Bahri',
        'el-Shareef',
        'el-Hatem',
        'al-Abbasi',],
    'Egypt': [
        'Ganim',
        'Bitar',
        'Sarkis',
        'Attia',
        'Asfour',
        'Daher',
        'Kattan',
        'Halabi',
        'Malouf',
        'Assaf',
        'Shadid',
        'Essa',
        'Khouri',
        'Saliba',
        'Isa',
        'Sabbagh',
        'Arian',
        'Kouri',
        'Totah',
        'Tuma',
    ],
    'Spain': [
        'Céspedes',
        'Sanz',
        'Pliego',
        'Cortés',
        'Arnal',
        'Sáez',
        'Atenas',
        'Mastache',
        'Molina',
        'Botín',
        'Indiano',
        'García',
        'Cadaval',
        'Fernán',
        'Lain',
        'Arias',
        'Rubio',
        'Moya',
        'Velázquez',
        'Juderías',
    ],
    'Mexico': [
        'Céspedes',
        'Sanz',
        'Pliego',
        'Cortés',
        'Arnal',
        'Sáez',
        'Atenas',
        'Mastache',
        'Molina',
        'Botín',
        'Indiano',
        'García',
        'Cadaval',
        'Fernán',
        'Lain',
        'Arias',
        'Rubio',
        'Moya',
        'Velázquez',
        'Juderías',
    ],
    'Portugal': [
        'Corte-Real',
        'Pascoal',
        'Castro',
        'Rodrigues',
        'Vila',
        'Furtado',
        'Andrade',
        'Agostinho',
        'Valente',
        'Fernandes',
        'Montenegro',
        'Antunes',
        'Vila',
        'Cardoso',
        'Antunes',
        'Gusmão',
        'Vieira',
        'Alcantara',
        'Tomás',
        'Albuquerque',
    ],
    'Russia': [
        'Savelievich',
        'Yermolayevich',
        'Filippovich',
        'Olegovich',
        'Maximovich',
        'Pavlovich',
        'Maximovich',
        'Vitalievich',
        'Timurovich',
        'Grigorievich',
        'Stepanovich',
        'Yevgenievich',
        'Valentinovich',
        'Maximovich',
        'Sergeyevich',
        'Yurievich',
        'Rostislavovich',
        'Zakharovich',
        'Valerianovich',
        'Kirillovich',
    ],
    'Nigeria': [
        'Chidike',
        'Zebenjo',
        'Okeke',
        'Uchey',
        'Chika',
        'Amadi',
        'Oby',
        'Orjy',
        'Chineze',
        'Chinwendu',
        'Ifeanyichukwu',
        'Tobechukwu',
        'Orjie',
        'Afamefula',
        'Chinuah',
        'Halim',
        'Akubundu',
        'Mazzi',
        'Chydi',
        'Ngozi',
    ],
    'Croatia': [
        'Zovko',
        'Dujmić',
        'Bulić',
        'Vrebac',
        'Sudar',
        'Bešić',
        'Umljenović',
        'Vlahović',
        'Gajski',
        'Marijanović',
        'Borović',
        'Levak',
        'Kljajić',
        'Divić',
        'Pačić',
        'Vinković',
        'Antunović',
        'Andreškić',
        'Barukčić',
        'Oslić',
    ],
    'Czech Republic': [
        'Čížek',
        'Blažek',
        'Vlach',
        'Jaroš',
        'Kovář',
        'Rušil',
        'Sedláček',
        'Vlach',
        'Ztratil',
        'Strnad',
        'Slavík',
        'Polák',
        'Zacpal',
        'Haušild',
        'Stehlík',
        'Kadlec',
        'Horák',
        'Tureček',
        'Klapil',
        'Horváth',
    ],
    'Denmark': [
        'Ebbesen',
        'Fisker',
        'Bentzen',
        'Albertsen',
        'Michaelsen',
        'Frank',
        'Axelsen',
        'Meldgaard',
        'Bjerg',
        'Jacobsen',
        'Mørch',
        'Thygesen',
        'Erichsen',
        'Lindberg',
        'Mathiasen',
        'Danielsen',
        'Korsgaard',
        'Brix',
        'Beck',
        'Fischer',
        'Danielsen',
        'Lorenzen',
        'Johannessen',
        'Frederiksen',
        'Kjær',
        'Knudsen',
        'Larsen',
        'Rask',
        'Johannesen',
        'Sørensen',
    ],
    'Netherlands': [
        'Voordes',
        'van den Beld',
        'Struenk',
        'Bremmer',
        'Klosschers',
        'Voeten',
        'van Loon',
        'Haarkamp',
        'Koertsen',
        'Klein Mentink',
        'Plesger',
        'Smeenk',
        'Bouhuijs',
        'Zwienenberg',
        'Wielen',
        'Twilhaar',
        'Kwant',
        'van der Voorde',
        'Tattje',
        'de Witte',
        'Haitjema',
        'Traast',
        'Kuilman',
        'Dirowie',
        'Samsen',
        'Weijling',
        'ten Veen',
        'Bosbooms',
    ],
    'Poland': [
        'Borowy',
        'Babiarz',
        'Kubinski',
        'Wilczewski',
        'Cyrankiewicz',
        'Bies',
        'Bem',
        'Kostka',
        'Kotlowski',
        'Bazan',
        'Ras',
        'Reczek',
        'Smieja',
        'Gladysz',
        'Ploski',
        'Hutnik',
        'Sokol',
        'Jagielka',
        'Geremek',
        'Krzyzanowski',
        'Glista',
        'Buczynski',
        'Burczyk',
        'Napieralski',
        'Baca',
        'Kuznicki',
        'Jablonowski',
        'Szablewski',
        'Tomanek',
        'Brodzka',
    ],
    'Serbia': [
        'Darković',
        'Hristov',
        'Stefanović',
        'Karanović',
        'Brđanin',
        'Brkić',
        'Petrović',
        'Janković',
        'Velimirović',
        'Gojković',
        'Vasiljević',
        'Vladimirović',
        'Ugljanin',
        'Mijatović',
        'Andrić',
        'Tadić',
        'Borisavljević',
        'Urošević',
        'Živanović',
        'Todorović',
        'Mandić',
        'Pajić',
        'Popadić',
        'Hristov',
        'Mijatović',
        'Golubović',
        'Trkulja',
        'Ristić',
        'Vladić',
        'Pap',
    ],
    'Uruguay': [
        'Campos',
        'Lacasa',
        'Carvallo',
        'Quesada',
        'Navarro',
        'Gaona',
        'Agramonte',
        'San Martín',
        'Carballal',
        'Seco',
        'Aguayo',
        'Maroto',
        'Botín',
        'Beldad',
        'Gaona',
        'Maroto',
        'Gallo',
        'Xirau',
        'Leoz',
        'Cicerón',
        'Tamayo',
        'Montenegro',
        'Botín',
        'Cicerón',
        'Campos',
        'Semprún',
        'Obregón',
        'Moya',
        'Villa',
        'Chicote',
    ],
    'Ukraine': [
        'Hryshchenko',
        'Kondratenko',
        'Mykhalchuk',
        'Andrijchuk',
        'Musiyenko',
        'Radchenko',
        'Hnatyuk',
        'Sokolov',
        'Kyrylyuk',
        'Semenyuk',
        'Kuzmenko',
        'Yaremenko',
        'Vakulenko',
        'Tsurkan',
        'Suprun',
        'Myroshnychenko',
        'Fesenko',
        'Hordiyenko',
        'Shulha',
        'Panchuk',
        'Ishchuk',
        'Mykhajlenko',
        'Kornijchuk',
        'Dzyuba',
        'Didyk',
        'Hnatyuk',
        'Romanenko',
        'Ostapenko',
        'Miroshnychenko',
        'Chernyak',
    ],
    'Bulgaria': [
        'Hadjiivanov',
        'Zaikov',
        'Vranchev',
        'Dimitrov',
        'Tsankov',
        'Bliznakov',
        'Petrov',
        'Pironev',
        'Pironev',
        'Deliivanov',
        'Todorov',
        'Bliznakov',
        'Alexov',
        'Kynev',
        'Zhelev',
        'Kirilov',
        'Dachev',
        'Glavchev',
        'Penchev',
        'Ilev',
        'Blagoev',
        'Avramov',
        'Filipov',
        'Kirilov',
        'Petrova',
        'Nakov',
        'Varbanov',
        'Kynev',
        'Kostov',
        'Zhivkov',
    ],
    'Colombia': [
        'Moya',
        'Garrido',
        'Maroto',
        'Escribano',
        'Alemán',
        'Mariano',
        'Alarcón',
        'San',
        'Ureña',
        'Sarmiento',
        'Alvarado',
        'Bienvenida',
        'Leoz',
        'Ureña',
        'Villacrés',
        'París',
        'Miralles',
        'Tassis',
        'Espiga',
        'Mariano',
        'Sáenz',
        'Muñoz',
        'Rasgado',
        'Barrueco',
        'Santángel',
        'Tafalla',
        'Carita',
        'Andrade',
        'Manzanares',
        'Aguinaldo',
    ],
    'Romania': [
        'Vianu',
        'Morosanu',
        'Parasca',
        'Artenie',
        'Goian',
        'Dobre',
        'Florescu',
        'Toma',
        'Arcos',
        'Manole',
        'Vulcan',
        'Pavel',
        'Tavitian',
        'Breban',
        'Izbasa',
        'Cosmescu',
        'Florescu',
        'Pirvu',
        'Izbasa',
        'Dimir',
        'Trelles',
        'Puscas',
        'Izbasa',
        'Bumbescu',
        'Cardei',
        'Hagi',
        'Olteanu',
        'Zaituc',
        'Cocis',
        'Parasca',
    ],
    'Sweden': [
        'Holmlund',
        'Dahlgren',
        'Stenström',
        'Jansson',
        'Ekbom',
        'Akerström',
        'Söderholm',
        'Blix',
        'Stenbock',
        'Holgersson',
        'Ekdahl',
        'Bergkvist',
        'Edgren',
        'Dahl',
        'Östberg',
        'Stenbeck',
        'Strömberg',
        'Grönblom',
        'Lindskog',
        'Ohly',
        'Dahlquist',
        'Nyström',
        'Tornquist',
        'Lindbergh',
        'Norberg',
        'Mattisson',
        'Eklund',
        'Eklund',
        'Malmsten',
        'Sjögren',
    ],
    'Switzerland': [
        'Neumeister',
        'Kehrer',
        'Streun',
        'Reist',
        'Badertscher',
        'Kaspar',
        'Weilenmann',
        'Siebold',
        'Merz',
        'Warth',
        'Isler',
        'Jaun',
        'Müller',
        'Bauert',
        'Affolter',
        'Blaser',
        'InAebnit',
        'Amsler',
        'Gurtner',
        'Füllemann',
        'Held',
        'Haldimann',
        'Schwarz',
        'Schall',
        'Labhart',
        'Vogler',
        'Flacher',
        'Naef',
        'Knöpfli',
        'Schallenberg',
    ],
    'Tunisia': [
        'Mathlouthi',
        'Ben Mustapha',
        'Hassen ',
        'Nagguez',
        'Bronn',
        'Bedoui',
        'Benalouane',
        'Ben Youssef',
        'Meriah',
        'Haddadi',
        'Maaloul',
        'Skhiri',
        'Ben Amor',
        'Chalali',
        'Sassi',
        'Khalil',
        'El Khaoui',
        'Ben Youssef',
        'Badri',
        'Srarfi',
        'Khazri',
        'Sliti ',
        'Khalifa',
    ],
    'Morocco': [
        'Al-Harradi',
        'Khammar',
        'Benjelloun',
        'Toulali',
        'Diouri',
        'Al-Buzidi',
        'Skali',
        'Laroui',
        'Al-Jirari',
        'Mejjati',
        'Al-Mokhtar',
        'Bennani',
        'Al-Hassan',
        'Sinaceur',
        'Hajji',
        'Idrissi',
        'Hajuji',
        'Benchemsi',
        'Ibn Qasim',
        'Al-Fassi',
        'El-Hababi',
        'Khammar',
        'Assaraf',
        'Ferhat',
        'N’Ait',
        'Al-Harradi',
        'Daoud',
        'Tazi',
        'Ksikes',
        'Mansouri',
    ],
    'Uzbekistan': [
        'Fayziyev',
        'Jamalov',
        'Fattayev',
        'Yakhshiyev',
        'Bazarov',
        'Tohtayev',
        'Ghaniyev',
        'Shodmanov',
        'Sulaymonov',
        'Toshmatov',
        'Yakhshiyev',
        'Yodgarov',
        'Khudayberdiyev',
        'Ishanov',
        'Abdulqhafurov',
        'Fattayev',
        'Jumayev',
        'Timurov',
        'Holiyev',
        'Ghafurov',
        'Tahirov',
        'Yahyayev',
        'Jorayev',
        'Yodgarov',
        'Aliyev',
        'Onarov',
        'Umidov',
        'Oalanoarov',
        'Ishanov',
        'Batirov',
    ],
    'Venezuela': [
        'Carballo',
        'Carita',
        'Fonseca',
        'Alguacil',
        'Ureña',
        'Agramonte',
        'Lain',
        'Pozo',
        'Carballo',
        'Romero',
        'Dengra',
        'Ruiz',
        'Quesada',
        'Morterero',
        'Berrocal',
        'Sarmiento',
        'Carita',
        'Aguayo',
        'Freixa',
        'Miralles',
        'Rodríguez',
        'Alguacil',
        'Martí',
        'Fraga',
        'Bienvenida',
        'Pousa',
        'Pareja',
        'Rouco',
        'Hurtado',
        'Rubio',
    ],
    'Norway': [
        'Omdahl',
        'Holten',
        'Hoffstad',
        'Hage',
        'Gulseth',
        'Fornes',
        'Folland',
        'Hoiland',
        'Aamland',
        'Pettersen',
        'Landa',
        'Sandvik',
        'Nerby',
        'Borsheim',
        'Thune',
        'Heim',
        'Stohl',
        'Madland',
        'Blom',
        'Teigen',
        'Bentzen',
        'Rygg',
        'Strom',
        'Ihle',
        'Odland',
        'Henjum',
        'Brevik',
        'Abel',
        'Lovik',
        'Steffensen',
    ],
    'Ghana': [
        'Kwaata',
        'Abeberese',
        'Oduro',
        'Gyamah',
        'Antwi',
        'Obeng',
        'Afrakoma',
        'Asare',
        'Amankona',
        'Nyantakyi',
        'Diawuo',
        'Asenso',
        'Akoto',
        'Adomah',
        'Opare',
        'Twum',
        'Akenteng',
        'Bediako',
        'Afoakwah',
        'Anokye',
        'Frempon',
        'Oduro',
        'Ayensu',
        'Ansah',
        'Kusiwaa',
        'Adiyiah',
        'Osam',
        'Ohemeng',
        'Diawuo',
        'Nyankomago',
    ],
    'Hungary': [
        'Jakab',
        'Miklós',
        'Csaba',
        'Mátyás',
        'Árpád',
        'Kálmán',
        'Márió',
        'Csongor',
        'Vilmos',
        'Botond',
        'Bertalan',
        'Márkó',
        'Kálmán',
        'Botond',
        'Milán',
        'Róbert',
        'Kornél',
        'Erik',
        'Dávid',
        'Károly',
        'Ármin',
        'Zoltán',
        'Bendegúz',
        'Endre',
        'Krisztián',
        'Balázs',
        'Pál',
        'Noel',
        'Ádám',
        'Krisztofer',
    ],
    'Finland': [
        'Palander',
        'Virtanen',
        'Jaakola',
        'Laakkonen',
        'Ketola',
        'Kokko',
        'Siltala',
        'Pukki',
        'Virtanen',
        'Vennamo',
        'share',
        'Häkämies',
        'Järveläinen',
        'Salo',
        'Toivanen',
        'Mäkitalo',
        'Mäkitalo',
        'Marttinen',
        'Karppinen',
        'Aalto',
        'Mäkilä',
        'share',
        'Heikkinen',
        'Kotka',
        'Kekkonen',
        'Pekkarinen',
        'Yrjölä',
        'Ahola',
        'Järveläinen',
        'Leinonen',
        'Rehn',
        'Niinistö',
    ],
    'Georgia': [
        'Tabagari',
        'Zamtaradze',
        'Tsintsadze',
        'Magalashvili',
        'Mzhavanadze',
        'Zumadze',
        'Chakhunashvili',
        'Kurtanidze',
        'Tsulukidze',
        'Arabidze',
        'Nakashidze',
        'Abazasdze',
        'Zakariadze',
        'Iluridze',
        'Darsalia',
        'Jorjadze',
        'Machutadze',
        'Dadeshkeliani',
        'Abakelia',
        'Bandzeladze',
        'Khomeriki',
        'Pavlenishvili',
        'Chavchavadze',
        'Bobokhidze',
        'Manvelishvili',
        'Ochiauri',
        'Revazishvili',
        'Gloveli',
        'Sikharulidze',
        'Jandieri',
    ],
};


/***/ }),

/***/ "./src/app/config/localdata.ts":
/*!*************************************!*\
  !*** ./src/app/config/localdata.ts ***!
  \*************************************/
/*! exports provided: teamNames, countries, MORALES, firstName, lastName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamNames", function() { return teamNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MORALES", function() { return MORALES; });
/* harmony import */ var _firstname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firstname */ "./src/app/config/firstname.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "firstName", function() { return _firstname__WEBPACK_IMPORTED_MODULE_0__["firstName"]; });

/* harmony import */ var _lastname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lastname */ "./src/app/config/lastname.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastName", function() { return _lastname__WEBPACK_IMPORTED_MODULE_1__["lastName"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var teamNames = [
    'ManUnited',
    'ManCity',
    'Arsenal',
    'Chelsea',
    'Tottenham',
    'Liverpool',
    'WestHam',
    'Leicester',
    'Barcelona',
    'R.Madrid',
    'Atletico',
    'Sevilla',
    'Villareal',
    'Bayern',
    'Dortmund',
    'Schalke04',
    'Leverkusen',
    'Juventus',
    'A.C.Milan',
    'Roma',
    'Inter',
    'Napoli',
    'PSG',
    'Lazio',
    'Fiorentina',
    'Lyonnais',
    'Marseille',
    'Monaco',
    'Shakhtar',
    'DinamoKiev',
    'Benfica',
    'Porto',
    'Sporting',
    'Ajax',
    'Feyenoord',
    'PSV',
    'Galatasaray',
    'Besiktas',
    'Fenerbahce',
    'Celtic',
    'Anderlecht',
    'Wolfsburg',
    'Valencia',
    'Basel',
    'Olympiacos'
];
var countries = [
    'Albania',
    'Algeria',
    'Argentina',
    'Australia',
    'Austria',
    'Azerbaijan',
    // 'Belarus',
    'Belgium',
    // 'Bolivia',
    // 'Bosnia',
    'Brazil',
    'Bulgaria',
    // 'Cameroon',
    // 'Chile',
    'China',
    'Colombia',
    // 'Costa Rica',
    // 'Cote d’Ivoire',
    'Croatia',
    // 'Cuba',
    'Czech Republic',
    'Denmark',
    // 'Ecuador',
    'England',
    'Egypt',
    'Finland',
    'France',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    // 'Guatemala',
    // 'Honduras',
    'Hungary',
    // 'Iceland',
    'Iran',
    'Iraq',
    // 'Ireland',
    // 'Israel',
    'Italy',
    // 'Jamaica',
    'Japan',
    // 'Kazakhstan',
    // 'Kenya',
    'KoreaSouth',
    // 'Kosovo',
    // 'Latvia',
    // 'Mali',
    'Mexico',
    // 'Montenegro',
    'Morocco',
    'Netherlands',
    // 'New Zealand',
    'Nigeria',
    'Norway',
    // 'Panama',
    // 'Paraguay',
    // 'Peru',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Saudi Arabia',
    // 'Senegal',
    'Serbia',
    // 'Slovakia',
    // 'Slovenia',
    // 'South Africa',
    'Spain',
    'Sweden',
    'Switzerland',
    'Tunisia',
    'Turkey',
    'Ukraine',
    'UAE',
    'USA',
    'Uruguay',
    'Uzbekistan',
    'Venezuela'
];
var MORALES = [
    'Horrible',
    'Terrible',
    'Poor',
    'Bad',
    'Normal',
    'Good',
    'Great',
    'Excellent',
    'Perfect'
];


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/game.service */ "./src/app/core/services/game.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/core/services/storage.service.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/core/layout/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_generator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/generator.service */ "./src/app/core/services/generator.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
            exports: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
            providers: [_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _services_generator_service__WEBPACK_IMPORTED_MODULE_5__["GeneratorService"]],
            declarations: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/layout/header/header.component.css":
/*!*********************************************************!*\
  !*** ./src/app/core/layout/header/header.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h6 {\n    color: white;\n    line-height: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg2IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbGluZS1oZWlnaHQ6IDc1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/core/layout/header/header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/layout/header/header.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/storage.service */ "./src/app/core/services/storage.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/core/services/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(storage, gameService) {
        var _this = this;
        this.storage = storage;
        this.gameService = gameService;
        this.endSeason = false;
        gameService.$newSeasonSubject.subscribe(function () {
            _this.init();
        });
        gameService.$endSeasonSubject.subscribe(function () {
            _this.endSeason = !_this.endSeason;
        });
        gameService.$weekSubject.subscribe(function () {
            _this.user = _this.storage.getUser();
        });
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.init = function () {
        var _this = this;
        this.user = this.storage.getUser();
        this.myTeam = this.storage.getTeams().find(function (x) { return x.id == _this.user.teamId; });
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _core_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] },
        { type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
    ]; };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/header/header.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./header.component.css */ "./src/app/core/layout/header/header.component.css")).default]
        }),
        __metadata("design:paramtypes", [_core_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"], _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/services/game.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/game.service.ts ***!
  \***********************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "./src/app/core/services/storage.service.ts");
/* harmony import */ var _shared_model_score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/model/score */ "./src/app/shared/model/score.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_model_playerHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/model/playerHistory */ "./src/app/shared/model/playerHistory.ts");
/* harmony import */ var _generator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generator.service */ "./src/app/core/services/generator.service.ts");
/* harmony import */ var _shared_model_topscorer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/model/topscorer */ "./src/app/shared/model/topscorer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var GameService = /** @class */ (function () {
    function GameService(storageService, generator) {
        this.storageService = storageService;
        this.generator = generator;
        this.newSeasonSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.$newSeasonSubject = this.newSeasonSubject.asObservable();
        this.endSeasonSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.$endSeasonSubject = this.endSeasonSubject.asObservable();
        this.weekSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.$weekSubject = this.weekSubject.asObservable();
        var user = storageService.getUser();
        this.size = user.size;
    }
    GameService.prototype.gameCycle = function () {
        var user = this.storageService.getUser();
        if (user.week == 15)
            return;
        var matches = this.storageService.getMatches();
        var otherMatches = matches.filter(function (x) { return x.week != user.week; });
        matches = matches.filter(function (x) { return x.week == user.week; });
        var players = this.storageService.getPlayers();
        var scores = this.storageService.getScores();
        if (scores == null)
            scores = [];
        var _loop_1 = function (i) {
            var match = matches[i];
            var homeTeamId = match.homeTeamId;
            var awayTeamId = match.awayTeamId;
            var homePlayers = players.filter(function (p) { return p.teamId === homeTeamId; });
            homePlayers = this_1.selectPlayers(homePlayers).filter(function (x) { return x.retired == false; });
            var awayPlayers = players.filter(function (p) { return p.teamId === awayTeamId; });
            awayPlayers = this_1.selectPlayers(awayPlayers).filter(function (x) { return x.retired == false; });
            var homeGoal = 0, awayGoal = 0;
            var homeGK = this_1.selectGoalkeeper(homePlayers);
            homeGK.playedGK++;
            if (homeGK.experience < 8) {
                homeGK.experience += 0.05;
            }
            var awayGK = this_1.selectGoalkeeper(awayPlayers);
            awayGK.playedGK++;
            if (awayGK.experience < 8) {
                awayGK.experience += 0.05;
            }
            for (var j = 0; j < 5; j++) {
                var homePlayer = homePlayers[j];
                //
                homePlayer.playedPlayer++;
                if (homePlayer.experience < 8) {
                    homePlayer.experience += 0.05;
                }
                //
                var homeScore = homePlayer.attack + homePlayer.finish + homePlayer.creativity + homeGK.attention + homePlayer.morale + homePlayer.experience;
                var awayScore = awayGK.defend + awayGK.goalkeeper + awayGK.attention + awayGK.creativity + awayGK.morale + awayGK.experience;
                homeScore = homeScore * 100 / (homeScore + awayScore);
                homeScore = Math.round(homeScore);
                var rnd = Math.floor(Math.random() * 100);
                if (rnd < homeScore) {
                    console.log('homeScoer[' + homeScore + ']' + ' awayScore[' + (Math.abs(homeScore - 100)) + ']' + ' Random[' + rnd + ']');
                    //
                    homePlayer.scored++;
                    if (homePlayer.morale > 0 && homePlayer.morale < 8) {
                        homePlayer.morale++;
                    }
                    awayGK.conceded++;
                    //
                    homeGoal++;
                    var score = new _shared_model_score__WEBPACK_IMPORTED_MODULE_2__["Score"](scores.length + 1, match.id, homePlayer.id, true);
                    this_1.updateGoalForPlayer(homePlayer.id, match.div);
                    scores.push(score);
                }
                else {
                    if (homePlayer.morale > 0 && homePlayer.morale < 8) {
                        homePlayer.morale--;
                    }
                    var score = new _shared_model_score__WEBPACK_IMPORTED_MODULE_2__["Score"](scores.length + 1, match.id, homePlayer.id);
                    scores.push(score);
                }
                var awayPlayer = awayPlayers[j];
                //
                awayPlayer.playedPlayer++;
                if (awayPlayer.experience < 8) {
                    awayPlayer.experience += 0.05;
                }
                //
                homeScore = homeGK.defend + homeGK.goalkeeper + homeGK.attention + homeGK.creativity + homeGK.morale + homeGK.experience;
                awayScore = awayPlayer.attack + awayPlayer.finish + awayPlayer.attention + awayPlayer.creativity + awayPlayer.morale + awayPlayer.experience;
                homeScore = homeScore * 100 / (homeScore + awayScore);
                homeScore = Math.round(homeScore);
                rnd = Math.floor(Math.random() * 100);
                if (rnd >= homeScore) {
                    //
                    awayPlayer.scored++;
                    if (awayPlayer.morale > 0 && awayPlayer.morale < 8) {
                        awayPlayer.morale++;
                    }
                    homeGK.conceded++;
                    //
                    awayGoal++;
                    var score = new _shared_model_score__WEBPACK_IMPORTED_MODULE_2__["Score"](scores.length + 1, match.id, awayPlayer.id, true);
                    this_1.updateGoalForPlayer(awayPlayer.id, match.div);
                    scores.push(score);
                }
                else {
                    if (awayPlayer.morale > 0 && awayPlayer.morale < 8) {
                        awayPlayer.morale--;
                    }
                    var score = new _shared_model_score__WEBPACK_IMPORTED_MODULE_2__["Score"](scores.length + 1, match.id, awayPlayer.id);
                    scores.push(score);
                }
            }
            match.homeTeamGoal = homeGoal;
            match.awayTeamGoal = awayGoal;
            this_1.updateTable(match);
        };
        var this_1 = this;
        for (var i = 0; i < matches.length; i++) {
            _loop_1(i);
        }
        this.sortTable();
        this.storageService.setPlayers(players);
        matches = matches.concat(otherMatches);
        this.storageService.setMatches(matches);
        this.storageService.setScores(scores);
        user.week++;
        this.storageService.setUser(user);
        this.weekSubject.next();
        if (user.week > 14) {
            this.endSeasonSubject.next();
        }
    };
    GameService.prototype.NewSeason = function () {
        var _this = this;
        this.teamsPrice();
        this.PromoteAndRelegate();
        var playerHistories = this.storageService.getPlayerHistories();
        var user = this.storageService.getUser();
        var teams = this.storageService.getTeams();
        user.week = 1;
        user.season++;
        this.storageService.setUser(user);
        this.newSeasonSubject.next();
        var players = this.storageService.getPlayers();
        players.map(function (p) {
            if (p.age > 30) {
                p.attack = (p.attack > 0) ? p.attack -= 1 : 0;
                p.defend = (p.defend > 0) ? p.defend -= 1 : 0;
                p.finish = (p.finish > 0) ? p.finish -= 1 : 0;
                p.goalkeeper = (p.goalkeeper > 0) ? p.goalkeeper -= 1 : 0;
                p.overall = p.attack + p.defend + p.finish + p.goalkeeper + p.creativity + p.attention;
            }
            p.age += 1;
            p.salary = _this.generator.calculateSalary(p);
            p.price = _this.generator.calculatePrice(p.overall, p.age);
            if (p.retired == false) {
                var ph = new _shared_model_playerHistory__WEBPACK_IMPORTED_MODULE_4__["PlayerHistory"]();
                ph.id = playerHistories.length + 1;
                ph.season = user.season - 1;
                ph.playerId = p.id;
                ph.playedGK = p.playedGK;
                ph.playedPlayer = p.playedPlayer;
                ph.scored = p.scored;
                ph.conceded = p.conceded;
                ph.teamId = p.teamId;
                p.playedGK = 0;
                p.playedPlayer = 0;
                p.scored = 0;
                p.conceded = 0;
                playerHistories.push(ph);
            }
        });
        this.storageService.setPlayerHistories(playerHistories);
        var retireds = players.filter(function (x) { return x.age > 36; }).filter(function (x) { return x.retired == false; });
        for (var _i = 0, retireds_1 = retireds; _i < retireds_1.length; _i++) {
            var item = retireds_1[_i];
            item.retired = true;
            item.salary = 0;
            item.price = 0;
            var numbers = teams[item.teamId - 1].shirtNumber;
            var i = numbers.indexOf(item.number);
            numbers.splice(i, 1);
            item.number = -1;
            var id = Math.max.apply(Math, players.map(function (o) { return o.id; })) + 1;
            var pl = this.generator.createPlayer(id, item.teamId, true);
            players.push(pl);
        }
        this.storageService.setPlayers(players);
        this.storageService.setTeams(teams);
        this.calculateBudget();
        this.generator.generateMatches();
        this.generator.resetTable();
        this.resetScores();
        this.storageService.setTopscorer([]);
        this.endSeasonSubject.next();
        // this.gameCycle();
    };
    GameService.prototype.teamsPrice = function () {
        var teams = this.storageService.getTeams();
        var table = this.storageService.getTable();
        var div1 = table.filter(function (x) { return x.teamDiv == 1; });
        var _loop_2 = function (i) {
            var element = div1[i];
            teams.find(function (x) { return x.id == element.teamId; }).budget += 20000000 - i * 500000;
        };
        for (var i = 0; i < div1.length; i++) {
            _loop_2(i);
        }
        var div2 = table.filter(function (x) { return x.teamDiv == 2; });
        var _loop_3 = function (i) {
            var element = div2[i];
            teams.find(function (x) { return x.id == element.teamId; }).budget += 16000000 - i * 500000;
        };
        for (var i = 0; i < div2.length; i++) {
            _loop_3(i);
        }
        var div3 = table.filter(function (x) { return x.teamDiv == 3; });
        var _loop_4 = function (i) {
            var element = div3[i];
            teams.find(function (x) { return x.id == element.teamId; }).budget += 12000000 - i * 500000;
        };
        for (var i = 0; i < div3.length; i++) {
            _loop_4(i);
        }
        var div4 = table.filter(function (x) { return x.teamDiv == 4; });
        var _loop_5 = function (i) {
            var element = div4[i];
            teams.find(function (x) { return x.id == element.teamId; }).budget += 8000000 - i * 500000;
        };
        for (var i = 0; i < div4.length; i++) {
            _loop_5(i);
        }
        var div5 = table.filter(function (x) { return x.teamDiv == 5; });
        var _loop_6 = function (i) {
            var element = div5[i];
            teams.find(function (x) { return x.id == element.teamId; }).budget += 4000000 - i * 500000;
        };
        for (var i = 0; i < div5.length; i++) {
            _loop_6(i);
        }
        this.storageService.setTeams(teams);
    };
    GameService.prototype.calculateBudget = function () {
        var teams = this.storageService.getTeams();
        var players = this.storageService.getPlayers().filter(function (x) { return x.retired == false; });
        players.forEach(function (p) {
            teams[p.teamId - 1].budget -= p.salary;
        });
        this.storageService.setTeams(teams);
    };
    GameService.prototype.resetScores = function () {
        this.storageService.setScores([]);
    };
    GameService.prototype.selectPlayers = function (customPlayers) {
        return customPlayers.sort(function (b, a) {
            return (a.attack + a.finish) - (b.attack + b.finish);
        });
    };
    GameService.prototype.selectGoalkeeper = function (customPlayers) {
        var newArray = customPlayers.map(function (a) { return Object.assign({}, a); });
        newArray = newArray.filter(function (x) { return x.retired == false; });
        var temp = newArray.sort(function (b, a) {
            return (a.goalkeeper + a.defend) - (b.goalkeeper + b.defend);
        })[0];
        return customPlayers.find(function (x) { return x.id == temp.id; });
    };
    GameService.prototype.updateTable = function (match) {
        var table = this.storageService.getTable();
        if (match.homeTeamGoal === match.awayTeamGoal) {
            var homeTeam = table.find(function (x) { return x.teamId === match.homeTeamId; });
            homeTeam.game++;
            homeTeam.draw++;
            homeTeam.gf += match.homeTeamGoal;
            homeTeam.ga += match.awayTeamGoal;
            homeTeam.gd = homeTeam.gf - homeTeam.ga;
            homeTeam.points++;
            var awayTeam = table.find(function (x) { return x.teamId === match.awayTeamId; });
            awayTeam.game++;
            awayTeam.draw++;
            awayTeam.gf += match.awayTeamGoal;
            awayTeam.ga += match.homeTeamGoal;
            awayTeam.gd = awayTeam.gf - awayTeam.ga;
            awayTeam.points++;
        }
        else if (match.homeTeamGoal > match.awayTeamGoal) {
            var homeTeam = table.find(function (x) { return x.teamId === match.homeTeamId; });
            homeTeam.game++;
            homeTeam.win++;
            homeTeam.gf += match.homeTeamGoal;
            homeTeam.ga += match.awayTeamGoal;
            homeTeam.gd = homeTeam.gf - homeTeam.ga;
            homeTeam.points += 3;
            var awayTeam = table.find(function (x) { return x.teamId === match.awayTeamId; });
            awayTeam.game++;
            awayTeam.lose++;
            awayTeam.gf += match.awayTeamGoal;
            awayTeam.ga += match.homeTeamGoal;
            awayTeam.gd = awayTeam.gf - awayTeam.ga;
        }
        else {
            var homeTeam = table.find(function (x) { return x.teamId === match.homeTeamId; });
            homeTeam.game++;
            homeTeam.lose++;
            homeTeam.gf += match.homeTeamGoal;
            homeTeam.ga += match.awayTeamGoal;
            homeTeam.gd = homeTeam.gf - homeTeam.ga;
            var awayTeam = table.find(function (x) { return x.teamId === match.awayTeamId; });
            awayTeam.game++;
            awayTeam.win++;
            awayTeam.gf += match.awayTeamGoal;
            awayTeam.ga += match.homeTeamGoal;
            awayTeam.gd = awayTeam.gf - awayTeam.ga;
            awayTeam.points += 3;
        }
        this.storageService.setTable(table);
    };
    GameService.prototype.sortTable = function () {
        var table = this.storageService.getTable();
        var size = table.length;
        // This loop for sort points
        for (var i = 0; i < size; i++) {
            for (var j = i + 1; j < size; j++) {
                if (table[j].points > table[i].points) {
                    var temp = table[j];
                    table[j] = table[i];
                    table[i] = temp;
                }
            }
        }
        // This loop for sort GD
        for (var i = 0; i < size; i++) {
            for (var j = i + 1; j < size; j++) {
                if (table[j].points === table[i].points) {
                    if (table[j].gd > table[i].gd) {
                        var temp = table[j];
                        table[j] = table[i];
                        table[i] = temp;
                    }
                }
            }
        }
        // This loop for sort GF
        for (var i = 0; i < size; i++) {
            for (var j = i + 1; j < size; j++) {
                if (table[j].points === table[i].points) {
                    if (table[j].gd === table[i].gd) {
                        if (table[j].gf > table[i].gf) {
                            var temp = table[j];
                            table[j] = table[i];
                            table[i] = temp;
                        }
                    }
                }
            }
        }
        this.storageService.setTable(table);
    };
    GameService.prototype.updateGoalForPlayer = function (playerId, div) {
        var topscorer = this.storageService.getTopscorer();
        if (topscorer == null) {
            topscorer = [];
        }
        else {
            var temp = topscorer.filter(function (x) { return x.playerId == playerId; });
            if (temp.length > 0) {
                temp[0].goal++;
            }
            else {
                var newTopscorer = new _shared_model_topscorer__WEBPACK_IMPORTED_MODULE_6__["TopScorer"](playerId, 1, div);
                topscorer.push(newTopscorer);
            }
        }
        this.storageService.setTopscorer(topscorer);
    };
    GameService.prototype.PromoteAndRelegate = function () {
        var teams = this.storageService.getTeams();
        var table = this.storageService.getTable();
        var div1 = table.filter(function (x) { return x.teamDiv == 1; });
        var div2 = table.filter(function (x) { return x.teamDiv == 2; });
        var div3 = table.filter(function (x) { return x.teamDiv == 3; });
        var div4 = table.filter(function (x) { return x.teamDiv == 4; });
        var div5 = table.filter(function (x) { return x.teamDiv == 5; });
        div2[0].teamDiv = 1;
        teams.filter(function (x) { return x.id == div2[0].teamId; }).map(function (x) { return x.div = 1; });
        div3[0].teamDiv = 2;
        teams.filter(function (x) { return x.id == div3[0].teamId; }).map(function (x) { return x.div = 2; });
        div4[0].teamDiv = 3;
        teams.filter(function (x) { return x.id == div4[0].teamId; }).map(function (x) { return x.div = 3; });
        div5[0].teamDiv = 4;
        teams.filter(function (x) { return x.id == div5[0].teamId; }).map(function (x) { return x.div = 4; });
        div1[7].teamDiv = 2;
        teams.filter(function (x) { return x.id == div1[7].teamId; }).map(function (x) { return x.div = 2; });
        div2[7].teamDiv = 3;
        teams.filter(function (x) { return x.id == div2[7].teamId; }).map(function (x) { return x.div = 3; });
        div3[7].teamDiv = 4;
        teams.filter(function (x) { return x.id == div3[7].teamId; }).map(function (x) { return x.div = 4; });
        div4[7].teamDiv = 5;
        teams.filter(function (x) { return x.id == div4[7].teamId; }).map(function (x) { return x.div = 5; });
        this.storageService.setTeams(teams);
        this.storageService.setTable(table);
    };
    GameService.prototype.getClass = function (index) {
        if (index == 0) {
            return 'table-success';
        }
        else if (index == 1) {
            // return 'table-second';
        }
        else if (index == 6) {
            // return 'table-warning';
        }
        else if (index == 7) {
            return 'table-danger';
        }
        return '';
    };
    GameService.prototype.firePlayer = function (playerId) {
        var players = this.storageService.getPlayers();
        var player = players.find(function (x) { return x.id == playerId; });
        player.teamId = -1;
        this.storageService.setPlayers(players);
    };
    GameService.ctorParameters = function () { return [
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] },
        { type: _generator_service__WEBPACK_IMPORTED_MODULE_5__["GeneratorService"] }
    ]; };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"], _generator_service__WEBPACK_IMPORTED_MODULE_5__["GeneratorService"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/core/services/generator.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/generator.service.ts ***!
  \****************************************************/
/*! exports provided: GeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorService", function() { return GeneratorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_model_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/model/player */ "./src/app/shared/model/player.ts");
/* harmony import */ var _config_localdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/localdata */ "./src/app/config/localdata.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "./src/app/core/services/storage.service.ts");
/* harmony import */ var _shared_model_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/model/table */ "./src/app/shared/model/table.ts");
/* harmony import */ var _shared_model_match__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/model/match */ "./src/app/shared/model/match.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var GeneratorService = /** @class */ (function () {
    function GeneratorService(storage) {
        this.storage = storage;
        this.divSize = 5;
    }
    GeneratorService.prototype.createPlayer = function (id, teamId, youth) {
        if (youth === void 0) { youth = false; }
        var pl = new _shared_model_player__WEBPACK_IMPORTED_MODULE_1__["Player"]();
        pl.id = id;
        pl.national = _config_localdata__WEBPACK_IMPORTED_MODULE_2__["countries"][Math.floor(Math.random() * _config_localdata__WEBPACK_IMPORTED_MODULE_2__["countries"].length)];
        var fn = Math.floor(Math.random() * _config_localdata__WEBPACK_IMPORTED_MODULE_2__["firstName"][pl.national].length);
        var ln = Math.floor(Math.random() * _config_localdata__WEBPACK_IMPORTED_MODULE_2__["lastName"][pl.national].length);
        pl.name = _config_localdata__WEBPACK_IMPORTED_MODULE_2__["firstName"][pl.national][fn] + ' ' + _config_localdata__WEBPACK_IMPORTED_MODULE_2__["lastName"][pl.national][ln];
        pl.age = (youth == true) ? 18 : Math.floor(Math.random() * 18) + 18;
        pl.attack = Math.floor(Math.random() * 20) + 1;
        pl.defend = Math.floor(Math.random() * 20) + 1;
        pl.goalkeeper = Math.floor(Math.random() * 20) + 1;
        pl.finish = Math.floor(Math.random() * 20) + 1;
        pl.creativity = Math.floor(Math.random() * 20) + 1;
        pl.attention = Math.floor(Math.random() * 20) + 1;
        pl.morale = 4;
        pl.overall = pl.attack + pl.defend + pl.goalkeeper + pl.finish + pl.attention + pl.creativity;
        pl.teamId = teamId;
        pl.number = Math.floor(Math.random() * 99) + 1;
        while (this.isValidShirtNumber(pl.number, pl.teamId)) {
            pl.number = Math.floor(Math.random() * 99) + 1;
        }
        this.addShirtNumberToTeam(pl.number, pl.teamId);
        pl.price = this.calculatePrice(pl.overall, pl.age);
        pl.salary = this.calculateSalary(pl);
        return pl;
    };
    GeneratorService.prototype.calculatePrice = function (overall, age) {
        if (age >= 29 && age <= 31)
            return Math.floor(overall * 100000 * (18 / age));
        else if (age >= 32)
            return Math.floor(overall * 100000 * (18 / age) * (18 / age));
        else
            return Math.floor(overall * 100000);
    };
    GeneratorService.prototype.calculateSalary = function (player) {
        var salary = player.attack * 14000;
        salary += player.defend * 13000;
        salary += player.goalkeeper * 11000;
        salary += player.finish * 12000;
        salary += player.creativity * 10000;
        salary += player.attention * 10000;
        return Math.floor(salary * (18 / player.age));
    };
    GeneratorService.prototype.isValidShirtNumber = function (shirt, teamId) {
        var teams = this.storage.getTeams();
        var numbers = teams[teamId - 1].shirtNumber;
        return numbers.indexOf(shirt) != -1;
    };
    GeneratorService.prototype.addShirtNumberToTeam = function (shirt, teamId) {
        var teams = this.storage.getTeams();
        var numbers = teams[teamId - 1].shirtNumber;
        numbers.push(shirt);
        teams[teamId - 1].shirtNumber = numbers;
        this.storage.setTeams(teams);
    };
    GeneratorService.prototype.generateTable = function () {
        var table = [];
        var teams = this.storage.getTeams();
        for (var i = 0; i < teams.length; i++) {
            var temp = new _shared_model_table__WEBPACK_IMPORTED_MODULE_4__["Table"]();
            temp.id = table.length + 1;
            temp.teamId = teams[i].id;
            temp.teamDiv = teams[i].div;
            table.push(temp);
        }
        this.storage.setTable(table);
    };
    GeneratorService.prototype.resetTable = function () {
        var table = this.storage.getTable();
        for (var i = 0; i < table.length; i++) {
            table[i].draw = 0;
            table[i].ga = 0;
            table[i].game = 0;
            table[i].gd = 0;
            table[i].gf = 0;
            table[i].lose = 0;
            table[i].points = 0;
            table[i].win = 0;
        }
        this.storage.setTable(table);
    };
    GeneratorService.prototype.generateMatches = function () {
        var user = this.storage.getUser();
        var size = user.size;
        var matches = [];
        var _loop_1 = function (k) {
            var temp = [];
            var teams = this_1.storage.getTeams().filter(function (x) { return x.div == k; });
            for (var i = 0; i < teams.length; i++) {
                temp.push(teams[i].id);
            }
            // Week 
            for (var i = 1; i <= (size - 1) * 2; i++) {
                // Match
                for (var j = 0; j < size / 2; j++) {
                    var matchTemp = new _shared_model_match__WEBPACK_IMPORTED_MODULE_5__["Match"](matches.length + 1, i, temp[j], temp[size - 1 - j]);
                    matchTemp.div = k;
                    matches.push(matchTemp);
                }
                this_1.swapWeek(temp);
            }
        };
        var this_1 = this;
        for (var k = 1; k <= this.divSize; k++) {
            _loop_1(k);
        }
        this.storage.setMatches(matches);
    };
    GeneratorService.prototype.swapWeek = function (temp) {
        var user = this.storage.getUser();
        var size = user.size;
        var lastTeamId = temp[size - 1];
        for (var i = size - 1; i > 0; i--) {
            temp[i] = temp[i - 1];
        }
        temp[1] = lastTeamId;
    };
    GeneratorService.ctorParameters = function () { return [
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
    ]; };
    GeneratorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], GeneratorService);
    return GeneratorService;
}());



/***/ }),

/***/ "./src/app/core/services/storage.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/storage.service.ts ***!
  \**************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/model/user */ "./src/app/shared/model/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var StorageService = /** @class */ (function () {
    function StorageService(router) {
        this.router = router;
        this.secret = '123456789';
    }
    StorageService.prototype.removeAllData = function () {
        localStorage.removeItem('matches');
        localStorage.removeItem('playerhistories');
        localStorage.removeItem('players');
        localStorage.removeItem('table');
        localStorage.removeItem('teams');
        localStorage.removeItem('topscorer');
        localStorage.removeItem('user');
        localStorage.removeItem('scores');
    };
    StorageService.prototype.encrypt = function (route, objectString) {
        var hash = crypto_js__WEBPACK_IMPORTED_MODULE_3__["AES"].encrypt(objectString, this.secret);
        localStorage.setItem(route, hash.toString());
    };
    StorageService.prototype.decrypt = function (route) {
        var hash = localStorage.getItem(route);
        if (hash == null)
            return null;
        var objectString = crypto_js__WEBPACK_IMPORTED_MODULE_3__["AES"].decrypt(hash, this.secret);
        return objectString.toString(crypto_js__WEBPACK_IMPORTED_MODULE_3__["enc"].Utf8);
    };
    StorageService.prototype.setPlayers = function (players) {
        this.encrypt('players', JSON.stringify(players));
    };
    StorageService.prototype.getPlayers = function () {
        return JSON.parse(this.decrypt('players'));
    };
    StorageService.prototype.getRetiredPlayer = function () {
        return JSON.parse(this.decrypt('players')).filter(function (x) { return x.retired == true; });
    };
    StorageService.prototype.setTeams = function (teams) {
        this.encrypt('teams', JSON.stringify(teams));
    };
    StorageService.prototype.getTeams = function () {
        return JSON.parse(this.decrypt('teams'));
    };
    StorageService.prototype.setMatches = function (matches) {
        this.encrypt('matches', JSON.stringify(matches));
    };
    StorageService.prototype.getMatches = function () {
        return JSON.parse(this.decrypt('matches'));
    };
    StorageService.prototype.setTable = function (table) {
        this.encrypt('table', JSON.stringify(table));
    };
    StorageService.prototype.getTable = function () {
        return JSON.parse(this.decrypt('table'));
    };
    StorageService.prototype.setScores = function (scores) {
        this.encrypt('scores', JSON.stringify(scores));
    };
    StorageService.prototype.getScores = function () {
        return JSON.parse(this.decrypt('scores'));
    };
    StorageService.prototype.setPlayerHistories = function (playerhistories) {
        this.encrypt('playerhistories', JSON.stringify(playerhistories));
    };
    StorageService.prototype.getPlayerHistories = function () {
        return JSON.parse(this.decrypt('playerhistories'));
    };
    StorageService.prototype.getUser = function () {
        var user = null;
        try {
            user = JSON.parse(this.decrypt('user'));
        }
        catch (error) {
        }
        if (user == null) {
            user = new _shared_model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        }
        return user;
    };
    StorageService.prototype.setUser = function (user) {
        this.encrypt('user', JSON.stringify(user));
    };
    StorageService.prototype.getTeamName = function (id) {
        var team = this.getTeams().find(function (x) { return x.id === id; });
        if (team == null || team == undefined)
            return "Free Player";
        return team.name;
    };
    StorageService.prototype.getPlayerName = function (id) {
        var player = this.getPlayers().find(function (x) { return x.id == id; });
        return player.name;
    };
    StorageService.prototype.linkClick = function (pageName, id) {
        var user;
        switch (pageName) {
            case 'team':
                user = this.getUser();
                user.selectedTeamId = id;
                this.setUser(user);
                break;
            case 'score':
                user = this.getUser();
                user.selectedMatchId = id;
                this.setUser(user);
                break;
            case 'player':
                user = this.getUser();
                user.selectedPlayerId = id;
                this.setUser(user);
                break;
            case 'playerhistory':
                user = this.getUser();
                user.selectedPlayerId = id;
                this.setUser(user);
                break;
        }
        this.router.navigate(['/' + pageName]);
    };
    StorageService.prototype.getTeamOverall = function (teamId) {
        var overall = 0;
        var count = 0;
        this.getPlayers().filter(function (x) { return x.teamId == teamId && x.retired == false; }).forEach(function (x) {
            overall += x.overall;
            count += 1;
        });
        return Math.round(overall / count);
    };
    StorageService.prototype.setTopscorer = function (topscorer) {
        this.encrypt('topscorer', JSON.stringify(topscorer));
    };
    StorageService.prototype.getTopscorer = function () {
        return JSON.parse(this.decrypt('topscorer'));
    };
    StorageService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/shared/model/match.ts":
/*!***************************************!*\
  !*** ./src/app/shared/model/match.ts ***!
  \***************************************/
/*! exports provided: Match */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return Match; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Match = /** @class */ (function () {
    function Match(id, week, homeTeamId, awayTeamId) {
        this.homeTeamGoal = -1;
        this.awayTeamGoal = -1;
        this.id = id;
        this.week = week;
        this.homeTeamId = homeTeamId;
        this.awayTeamId = awayTeamId;
    }
    return Match;
}());



/***/ }),

/***/ "./src/app/shared/model/player.ts":
/*!****************************************!*\
  !*** ./src/app/shared/model/player.ts ***!
  \****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Player = /** @class */ (function () {
    function Player() {
        this.playedPlayer = 0;
        this.playedGK = 0;
        this.scored = 0;
        this.conceded = 0;
        this.retired = false;
        this.experience = 0;
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/shared/model/playerHistory.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/model/playerHistory.ts ***!
  \***********************************************/
/*! exports provided: PlayerHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerHistory", function() { return PlayerHistory; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PlayerHistory = /** @class */ (function () {
    function PlayerHistory() {
        this.playedPlayer = 0;
        this.playedGK = 0;
        this.scored = 0;
        this.conceded = 0;
    }
    return PlayerHistory;
}());



/***/ }),

/***/ "./src/app/shared/model/score.ts":
/*!***************************************!*\
  !*** ./src/app/shared/model/score.ts ***!
  \***************************************/
/*! exports provided: Score */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Score = /** @class */ (function () {
    function Score(id, matchId, playerId, score) {
        this.score = false;
        this.id = id;
        this.matchId = matchId;
        this.playerId = playerId;
        this.score = score;
    }
    return Score;
}());



/***/ }),

/***/ "./src/app/shared/model/table.ts":
/*!***************************************!*\
  !*** ./src/app/shared/model/table.ts ***!
  \***************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Table = /** @class */ (function () {
    function Table() {
        this.game = 0;
        this.win = 0;
        this.lose = 0;
        this.draw = 0;
        this.gf = 0;
        this.ga = 0;
        this.gd = 0;
        this.points = 0;
    }
    return Table;
}());



/***/ }),

/***/ "./src/app/shared/model/topscorer.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/model/topscorer.ts ***!
  \*******************************************/
/*! exports provided: TopScorer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopScorer", function() { return TopScorer; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var TopScorer = /** @class */ (function () {
    function TopScorer(playerId, goal, div) {
        this.playerId = playerId;
        this.goal = goal;
        this.div = div;
    }
    return TopScorer;
}());



/***/ }),

/***/ "./src/app/shared/model/user.ts":
/*!**************************************!*\
  !*** ./src/app/shared/model/user.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var User = /** @class */ (function () {
    function User() {
        this.week = 1;
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/adicom/Desktop/Local Git/SoccerManagerAngular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map