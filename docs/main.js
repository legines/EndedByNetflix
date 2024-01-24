(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bug0ut/Documents/Code/EndedByNetflix/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CJ1o":
/*!****************************************!*\
  !*** ./src/app/show/show.component.ts ***!
  \****************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ShowComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.show.artwork, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ShowComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Premiere: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Finale: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Seasons: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Runtime: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Canceled: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.show.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.show.premiere);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.show.finale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.show.seasons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.show.runtime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.show.canceled);
} }
const _c0 = function (a0, a1) { return { inCarousel: a0, isPopup: a1 }; };
class ShowComponent {
    constructor() {
        this.sendHovered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    setHovered() {
        if (!this.inCarousel) {
            return;
        }
        this.sendHovered.emit(this.show);
    }
    showID() {
        return this.inCarousel ? this.show.title : 'is-popup';
    }
    clearHover() {
        if (!this.inCarousel) {
            return;
        }
        this.sendHovered.emit(null);
    }
}
ShowComponent.ɵfac = function ShowComponent_Factory(t) { return new (t || ShowComponent)(); };
ShowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowComponent, selectors: [["show-component"]], inputs: { inCarousel: "inCarousel", isExtra: "isExtra", isPopup: "isPopup", show: "show" }, outputs: { sendHovered: "sendHovered" }, decls: 3, vars: 7, consts: [[1, "show-card", 3, "id", "ngClass", "mouseover", "mouseleave"], [3, "src", 4, "ngIf"], ["class", "show-content", 4, "ngIf"], [3, "src"], [1, "show-content"], [1, "description"], [1, "p-label"], [1, "p-label", "canceled"]], template: function ShowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function ShowComponent_Template_div_mouseover_0_listener() { return ctx.setHovered(); })("mouseleave", function ShowComponent_Template_div_mouseleave_0_listener() { return ctx.clearHover(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowComponent_img_1_Template, 1, 1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShowComponent_div_2_Template, 23, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.showID())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx.inCarousel, ctx.isPopup));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isExtra);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isExtra);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".show-card[_ngcontent-%COMP%] {\n  width: 304.6px;\n  transform: scale(1);\n  transition: transform 0.2s;\n  margin: 0px 2px;\n  min-width: 304.6px;\n  z-index: 1;\n  position: relative;\n  background-color: #151a30;\n}\n.show-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 171.338px;\n  border-radius: 5px;\n  width: inherit;\n}\n.show-card[_ngcontent-%COMP%]   .show-content[_ngcontent-%COMP%] {\n  display: none;\n}\n.show-card[_ngcontent-%COMP%]   .show-content[_ngcontent-%COMP%]   .p-label[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #81a2be;\n}\n.show-card[_ngcontent-%COMP%]   .show-content[_ngcontent-%COMP%]   .p-label[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #c5c8c6;\n}\n.show-card[_ngcontent-%COMP%]   .show-content[_ngcontent-%COMP%]   .p-label.canceled[_ngcontent-%COMP%] {\n  margin-bottom: revert;\n}\n.show-card[_ngcontent-%COMP%]:hover, .show-card.isPopup[_ngcontent-%COMP%] {\n  transform: scale(1.3);\n  transition: transform 0.5s;\n  z-index: 10;\n  box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 4px;\n}\n.show-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], .show-card.isPopup[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.show-card[_ngcontent-%COMP%]:hover   .show-content[_ngcontent-%COMP%], .show-card.isPopup[_ngcontent-%COMP%]   .show-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  background-color: #1d1f21;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  padding: 0 1em;\n  font-size: 0.8em;\n  box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 4px;\n  font-family: \"Netflix Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n.show-card.inCarousel[_ngcontent-%COMP%]:hover {\n  transform: unset;\n  transition: transform 0.5s;\n  z-index: 1;\n  box-shadow: none;\n}\n.show-card.inCarousel[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.show-card.inCarousel[_ngcontent-%COMP%]:hover   .show-content[_ngcontent-%COMP%] {\n  display: none;\n}\n.show-card.isPopup[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Nob3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFBSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7QUFFUjtBQURRO0VBQ0ksU0FBQTtFQUNBLGNBQUE7QUFHWjtBQUZZO0VBQ0ksY0FBQTtBQUloQjtBQUZZO0VBQ0kscUJBQUE7QUFJaEI7QUFBSTtFQUNJLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7QUFFUjtBQURRO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFHWjtBQURRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLDJFQUFBO0FBR1o7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDWjtBQUFZO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUFFaEI7QUFBWTtFQUNJLGFBQUE7QUFFaEI7QUFFSTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtBQURSIiwiZmlsZSI6InNob3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvdy1jYXJkIHtcbiAgICB3aWR0aDogMzA0LjZweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgIG1hcmdpbjogMHB4IDJweDtcbiAgICBtaW4td2lkdGg6IDMwNC42cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MWEzMDtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDE3MS4zMzhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICB9XG4gICAgLnNob3ctY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIC5wLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGNvbG9yOiAjODFhMmJlO1xuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYzVjOGM2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5jYW5jZWxlZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogcmV2ZXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICY6aG92ZXIsICYuaXNQb3B1cCB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIC43NSkgMHB4IDNweCA0cHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5zaG93LWNvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZjIxO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMWVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjc1KSAwcHggM3B4IDRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTmV0ZmxpeCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmluQ2Fyb3VzZWwge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdW5zZXQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaG93LWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5pc1BvcHVwIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLy8gcmlnaHQ6IDJlbTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIC8vIGxlZnQ6IDUwJTtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "EfPX":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../show/show.component */ "CJ1o");



const _c0 = ["widgetsContent"];
function CarouselComponent_show_component_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "show-component", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendHovered", function CarouselComponent_show_component_3_Template_show_component_sendHovered_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.passHovered($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", show_r2)("inCarousel", true);
} }
function CarouselComponent_show_component_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "show-component", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx_r1.hovered)("isPopup", true);
} }
class CarouselComponent {
    constructor() { }
    ngOnInit() { }
    goToSection(section, oldSection) {
        var _a, _b;
        (_a = document.getElementById(`${section}-${this.genre}`)) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden-sections');
        (_b = document.getElementById(`${oldSection}-${this.genre}`)) === null || _b === void 0 ? void 0 : _b.classList.add('hidden-sections');
    }
    scrollLeft() {
        document.getElementById(`${this.genre}-content`).scrollLeft -= 500;
    }
    scrollRight() {
        document.getElementById(`${this.genre}-content`).scrollLeft += 500;
    }
    passHovered(event) {
        if (event) {
            const positions = document.getElementById(`${event.title}`).getBoundingClientRect();
            setTimeout(() => {
                if (document.getElementById('is-popup')) {
                    document.getElementById('is-popup').style.left = `${positions.left - 100}px`;
                    document.getElementById('is-popup').style.opacity = '1';
                    const popupPosition = document.getElementById('is-popup').getBoundingClientRect();
                    if (popupPosition.x < 0) {
                        document.getElementById('is-popup').style.left = `${positions.left}px`;
                    }
                    if ((popupPosition.x + popupPosition.width) > window.innerWidth) {
                        document.getElementById('is-popup').style.left = `${positions.left - 350}px`;
                    }
                }
            });
        }
        this.hovered = event;
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.widgetsContent = _t.first);
    } }, inputs: { genre: "genre", genreSection: "genreSection" }, decls: 7, vars: 3, consts: [[1, "shows-container", "wrapper", 3, "id"], [1, "arrow__btn", "left-arrow", 3, "click"], [3, "show", "inCarousel", "sendHovered", 4, "ngFor", "ngForOf"], [1, "arrow__btn", "right-arrow", 3, "click"], [3, "show", "isPopup", 4, "ngIf"], [3, "show", "inCarousel", "sendHovered"], [3, "show", "isPopup"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_a_click_1_listener() { return ctx.scrollLeft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2039");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_show_component_3_Template, 1, 2, "show-component", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_a_click_4_listener() { return ctx.scrollRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u203A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarouselComponent_show_component_6_Template, 1, 2, "show-component", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.genre, "-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genreSection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hovered);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _show_show_component__WEBPACK_IMPORTED_MODULE_2__["ShowComponent"]], styles: [".shows-container.wrapper[_ngcontent-%COMP%]   .arrow__btn[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #fff;\n  text-decoration: none;\n  font-size: 3em;\n  width: 0;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  cursor: pointer;\n  box-shadow: 0 0 33px 0px black;\n  background: rgba(20, 20, 20, 0.5);\n  height: 132px;\n}\n.shows-container.wrapper[_ngcontent-%COMP%]   .arrow__btn[_ngcontent-%COMP%]:hover {\n  background: rgba(20, 20, 20, 0.7);\n}\n.shows-container.wrapper[_ngcontent-%COMP%]   .left-arrow[_ngcontent-%COMP%] {\n  left: 0;\n}\n.shows-container.wrapper[_ngcontent-%COMP%]   .right-arrow[_ngcontent-%COMP%] {\n  right: 0;\n}\n.shows-container.wrapper.hidden-sections[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7QUFBUjtBQUNRO0VBQ0ksaUNBQUE7QUFDWjtBQUVJO0VBQ0ksT0FBQTtBQUFSO0FBRUk7RUFDSSxRQUFBO0FBQVI7QUFFSTtFQUNJLGFBQUE7QUFBUiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93cy1jb250YWluZXIud3JhcHBlciB7XG4gICAgLmFycm93X19idG4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDMzcHggMHB4IHJnYigwLCAwLCAwKTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMCwyMCwyMCwuNSk7XG4gICAgICAgIGhlaWdodDogMTMycHg7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMCwyMCwyMCwuNyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxlZnQtYXJyb3cge1xuICAgICAgICBsZWZ0OjA7XG4gICAgfVxuICAgIC5yaWdodC1hcnJvdyB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICAmLmhpZGRlbi1zZWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show/show.component */ "CJ1o");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousel/carousel.component */ "EfPX");








function AppComponent_div_6_show_component_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "show-component", 13);
} if (rf & 2) {
    const show_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", show_r5);
} }
function AppComponent_div_6_show_component_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "show-component", 14);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isExtra", true);
} }
function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_6_Template_label_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.clearGenre(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_6_show_component_6_Template, 1, 1, "show-component", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_6_show_component_7_Template, 1, 1, "show-component", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Viewing all in '", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx_r0.genreChosen.split("_").join(" ")), "'");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.shows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.extras);
} }
function AppComponent_div_7_show_component_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "show-component", 13);
} if (rf & 2) {
    const show_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", show_r11);
} }
function AppComponent_div_7_show_component_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "show-component", 14);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isExtra", true);
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_Template_label_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.clearGenre(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_7_show_component_5_Template, 1, 1, "show-component", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_7_show_component_6_Template, 1, 1, "show-component", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.foundShows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.extras);
} }
function AppComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_8_div_1_Template_label_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const genreSection_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.chooseGenre(genreSection_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View All >");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-carousel", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genreSection_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, genreSection_r16.split("_").join(" ")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("genreSection", ctx_r15.organizedShows[genreSection_r16])("genre", genreSection_r16);
} }
function AppComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_8_div_1_Template, 8, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.genreSections);
} }
const _c0 = function (a0) { return { list: a0 }; };
class AppComponent {
    constructor(http) {
        this.http = http;
        this.extras = [1, 2, 3, 4, 5, 6, 7];
    }
    ngOnInit() {
        this.http.get('https://ended-by-netflix-backend.herokuapp.com/shows.json')
            .subscribe(res => {
            this.genreSections = ['drama', 'comedy', 'miniseries', 'adult_animation', 'anime', 'kids_and_family', 'docuseries', 'reality', 'variety'];
            this.organizedShows = res;
            this.getAll();
        });
    }
    chooseGenre(genre) {
        this.genreChosen = genre.split('_').join(' ');
        this.http.get(`https://ended-by-netflix-backend.herokuapp.com/genre_shows/${this.genreChosen}.json`)
            .subscribe(res => this.shows = res);
    }
    clearGenre() {
        if (this.searchTerm) {
            this.searchTerm = null;
        }
        else {
            this.genreChosen = null;
        }
    }
    getAll() {
        this.http.get(`https://ended-by-netflix-backend.herokuapp.com/all_shows.json`)
            .subscribe(res => {
            this.allShows = res;
        });
    }
    search(value) {
        const filter = this.allShows.filter((show) => show.toLowerCase().includes(value));
        this.http.get(`https://ended-by-netflix-backend.herokuapp.com/search_shows.json?string=${filter}`)
            .subscribe(res => this.foundShows = res);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 7, consts: [[1, "parent"], [1, "header"], [1, "search"], ["type", "text", "name", "searchTerm", "placeholder", "Search all shows", 1, "searchTerm", 3, "ngModel", "ngModelChange"], [1, "shows-parent", 3, "ngClass"], ["class", "child", 4, "ngIf"], [1, "footer"], [1, "child"], [1, "label-section"], [1, "section-label", 3, "click"], [1, "shows-container"], [3, "show", 4, "ngFor", "ngForOf"], [3, "isExtra", 4, "ngFor", "ngForOf"], [3, "show"], [3, "isExtra"], [1, "section-label", "search", 3, "click"], ["class", "carousel", 4, "ngFor", "ngForOf"], [1, "carousel"], [3, "genreSection", "genre"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchTerm = $event; })("ngModelChange", function AppComponent_Template_input_ngModelChange_3_listener() { return ctx.search(ctx.searchTerm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_6_Template, 8, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 7, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A9 2022 LG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last updated: 5-1-22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, !ctx.genreChosen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.genreChosen && !ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.genreChosen && !ctx.searchTerm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _show_show_component__WEBPACK_IMPORTED_MODULE_6__["ShowComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show/show.component */ "CJ1o");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousel/carousel.component */ "EfPX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _show_show_component__WEBPACK_IMPORTED_MODULE_4__["ShowComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 23, vars: 0, consts: [[1, "main-header"], [1, "floating"], [1, "vignette"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ended By Netflix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: 4fr 1fr 1fr;\n  place-items: center;\n  grid-auto-flow: column dense;\n  height: 35vh;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: flex;\n  flex-flow: column wrap;\n  height: 100%;\n  width: 100%;\n  filter: brightness(0.95);\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(-n+6) {\n  grid-row: 1;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1) {\n  background-color: #f5f045;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2) {\n  background-color: #27eff4;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3) {\n  background-color: #23e93b;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(4) {\n  background-color: #f050f1;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(5) {\n  background-color: #eb2920;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(6) {\n  background-color: #0e43f0;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(n+7) {\n  grid-row: 2;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(7) {\n  background-color: #0e43f0;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(8) {\n  background-color: #f050f1;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(9) {\n  background-color: black;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(10) {\n  background-color: #27eff4;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(11) {\n  background-color: black;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(12) {\n  background-color: white;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(n+13) {\n  grid-row: 3;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(13) {\n  background-color: #0e4f6b;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(14) {\n  background-color: white;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(15) {\n  background-color: #4a1f87;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(16) {\n  background-color: black;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(17) {\n  background-color: #343434;\n}\n.main-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(18) {\n  background-color: black;\n}\n.main-header[_ngcontent-%COMP%]   .floating[_ngcontent-%COMP%] {\n  animation: moveX 3.05s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate;\n  display: inline-grid;\n  place-items: center;\n  left: 0;\n  z-index: 2;\n  position: absolute;\n  width: 100%;\n  max-width: 433px;\n  background: rgba(19, 20, 23, 0.35);\n  box-shadow: 0 8px 32px 0 rgba(19, 20, 23, 0.35);\n  -webkit-backdrop-filter: blur(35px);\n          backdrop-filter: blur(35px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n}\n.main-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Netflix Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  padding: 36px 0;\n  font-size: 40px;\n  text-transform: uppercase;\n  color: white;\n  filter: drop-shadow(8px 8px 10px black);\n  animation: letters 3.3s infinite alternate;\n}\n.vignette[_ngcontent-%COMP%] {\n  background-image: -moz- oldlinear-gradient(top, rgba(20, 20, 20, 0) 0, rgba(20, 20, 20, 0.15) 15%, rgba(20, 20, 20, 0.35) 29%, rgba(20, 20, 20, 0.58) 44%, #1d1f21 68%, #1d1f21 100%);\n  background-image: linear-gradient(to bottom, rgba(20, 20, 20, 0) 0, rgba(20, 20, 20, 0.15) 15%, rgba(20, 20, 20, 0.35) 29%, rgba(20, 20, 20, 0.58) 44%, #1d1f21 68%, #1d1f21 100%);\n  background-size: 100% 100%;\n  background-position: 0 top;\n  background-repeat: repeat-x;\n  background-color: transparent;\n  width: 100%;\n  height: 7.7vw;\n  top: auto;\n  bottom: -1px;\n  opacity: 1;\n  z-index: 8;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n@keyframes moveX {\n  from {\n    left: 0;\n  }\n  to {\n    left: calc(92% - 320px);\n  }\n}\n@keyframes moveY {\n  from {\n    top: 0;\n  }\n  to {\n    top: calc(26vh - 120px);\n  }\n}\n@media only screen and (min-width: 768px) {\n  .main-header[_ngcontent-%COMP%]   .floating[_ngcontent-%COMP%] {\n    animation: moveX 7.05s linear 0s infinite alternate, moveY 7.4s linear 0s infinite alternate;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFFQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFESjtBQUVJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUFBTjtBQUNNO0VBQ0UsV0FBQTtBQUNSO0FBQ007RUFDRSx5QkFBQTtBQUNSO0FBQ007RUFDRSx5QkFBQTtBQUNSO0FBQ007RUFDRSx5QkFBQTtBQUNSO0FBQ007RUFDRSx5QkFBQTtBQUNSO0FBQ007RUFDRSx5QkFBQTtBQUNSO0FBQ007RUFDRSx5QkFBQTtBQUNSO0FBQ007RUFDRSxXQUFBO0FBQ1I7QUFDTTtFQUNFLHlCQUFBO0FBQ1I7QUFDTTtFQUNFLHlCQUFBO0FBQ1I7QUFDTTtFQUNFLHVCQUFBO0FBQ1I7QUFDTTtFQUNFLHlCQUFBO0FBQ1I7QUFDTTtFQUNFLHVCQUFBO0FBQ1I7QUFDTTtFQUNFLHVCQUFBO0FBQ1I7QUFDTTtFQUNFLFdBQUE7QUFDUjtBQUNNO0VBQ0UseUJBQUE7QUFDUjtBQUNNO0VBQ0UsdUJBQUE7QUFDUjtBQUNNO0VBQ0UseUJBQUE7QUFDUjtBQUNNO0VBQ0UsdUJBQUE7QUFDUjtBQUNNO0VBQ0UseUJBQUE7QUFDUjtBQUNNO0VBQ0UsdUJBQUE7QUFDUjtBQUVJO0VBQ0ksNEZBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQUFSO0FBRUk7RUFDSSwyRUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtBQUFSO0FBSUE7RUFHRSxxTEFBQTtFQUVBLGtMQUFBO0VBR0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBREY7QUFJQTtFQUNJO0lBQ0UsT0FBQTtFQURKO0VBR0U7SUFDRSx1QkFBQTtFQURKO0FBQ0Y7QUFJQTtFQUNJO0lBQ0UsTUFBQTtFQUZKO0VBSUU7SUFDRSx1QkFBQTtFQUZKO0FBQ0Y7QUFLQTtFQUVRO0lBQ0ksNEZBQUE7RUFKVjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1haW4taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0ZnIgMWZyIDFmcjtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW4gZGVuc2U7XG4gICAgaGVpZ2h0OiAzNXZoO1xuICAgIC8vIHdpZHRoOiA3My41JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAwO1xuICAgIHNwYW4ge1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG4gICAgICAmOm50aC1jaGlsZCgtbiArIDYpIHtcbiAgICAgICAgZ3JpZC1yb3c6IDE7XG4gICAgICB9XG4gICAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUgMjQwIDY5IC8gMTAwKTtcbiAgICAgIH1cbiAgICAgICY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5IDIzOSAyNDQgLyAxMDApO1xuICAgICAgfVxuICAgICAgJjpudGgtb2YtdHlwZSgzKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzUgMjMzIDU5IC8gMTAwKTtcbiAgICAgIH1cbiAgICAgICY6bnRoLW9mLXR5cGUoNCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCA4MCAyNDEgLyAxMDApO1xuICAgICAgfVxuICAgICAgJjpudGgtb2YtdHlwZSg1KSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1IDQxIDMyIC8gMTAwKTtcbiAgICAgIH1cbiAgICAgICY6bnRoLW9mLXR5cGUoNikge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0IDY3IDI0MCAvIDEwMCk7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZChuICsgNykge1xuICAgICAgICBncmlkLXJvdzogMjtcbiAgICAgIH1cbiAgICAgICY6bnRoLW9mLXR5cGUoNykge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0IDY3IDI0MCAvIDEwMCk7XG4gICAgICB9XG4gICAgICAmOm50aC1vZi10eXBlKDgpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAgODAgMjQxIC8gMTAwKTtcbiAgICAgIH1cbiAgICAgICY6bnRoLW9mLXR5cGUoOSkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAgMCAwIC8gMTAwKTtcbiAgICAgIH1cbiAgICAgICY6bnRoLW9mLXR5cGUoMTApIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSAyMzkgMjQ0IC8gMTAwKTtcbiAgICAgIH1cbiAgICAgICY6bnRoLW9mLXR5cGUoMTEpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwIDAgMCAvIDEwMCk7XG4gICAgICB9XG4gICAgICAmOm50aC1vZi10eXBlKDEyKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1IDI1NSAyNTUvIDEwMCk7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZChuICsgMTMpIHtcbiAgICAgICAgZ3JpZC1yb3c6IDM7XG4gICAgICB9XG4gICAgICAmOm50aC1vZi10eXBlKDEzKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQgNzkgMTA3IC8gMTAwKTtcbiAgICAgIH1cbiAgICAgICY6bnRoLW9mLXR5cGUoMTQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUgMjU1IDI1NS8gMTAwKTtcbiAgICAgIH1cbiAgICAgICY6bnRoLW9mLXR5cGUoMTUpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCAzMSAxMzUgLyAxMDApO1xuICAgICAgfVxuICAgICAgJjpudGgtb2YtdHlwZSgxNikge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAgMCAwIC8gMTAwKTtcbiAgICAgIH1cbiAgICAgICY6bnRoLW9mLXR5cGUoMTcpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MiA1MiA1MiAvIDEwMCk7XG4gICAgICB9XG4gICAgICAmOm50aC1vZi10eXBlKDE4KSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCAwIDAgLyAxMDApO1xuICAgICAgfVxuICAgIH1cbiAgICAuZmxvYXRpbmcge1xuICAgICAgICBhbmltYXRpb246IG1vdmVYIDMuMDVzIGxpbmVhciAwcyBpbmZpbml0ZSBhbHRlcm5hdGUsIG1vdmVZIDMuNHMgbGluZWFyIDBzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogNDMzcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTksIDIwLCAyMywgMC4zNSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDE5LCAyMCwgMjMsIDAuMzUpO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzVweCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCk7XG4gICAgfVxuICAgIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOZXRmbGl4IFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBwYWRkaW5nOiAzNnB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1IDI1NSAyNTUvIDEwMCk7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coOHB4IDhweCAxMHB4IHJnYmEoMCAwIDAgLyAxMDApKTtcbiAgICAgICAgYW5pbWF0aW9uOiBsZXR0ZXJzIDMuM3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIH1cbn1cblxuLnZpZ25ldHRlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AsbGVmdCBib3R0b20sZnJvbShyZ2JhKDIwLDIwLDIwLDApKSxjb2xvci1zdG9wKDE1JSxyZ2JhKDIwLDIwLDIwLC4xNSkpLGNvbG9yLXN0b3AoMjklLHJnYmEoMjAsMjAsMjAsLjM1KSksY29sb3Itc3RvcCg0NCUscmdiYSgyMCwyMCwyMCwuNTgpKSxjb2xvci1zdG9wKDY4JSwjMWQxZjIxKSx0bygjMWQxZjIxKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCxyZ2JhKDIwLDIwLDIwLDApIDAscmdiYSgyMCwyMCwyMCwuMTUpIDE1JSxyZ2JhKDIwLDIwLDIwLC4zNSkgMjklLHJnYmEoMjAsMjAsMjAsLjU4KSA0NCUsIzFkMWYyMSA2OCUsIzFkMWYyMSAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei0gb2xkbGluZWFyLWdyYWRpZW50KHRvcCxyZ2JhKDIwLDIwLDIwLDApIDAscmdiYSgyMCwyMCwyMCwuMTUpIDE1JSxyZ2JhKDIwLDIwLDIwLC4zNSkgMjklLHJnYmEoMjAsMjAsMjAsLjU4KSA0NCUsIzFkMWYyMSA2OCUsIzFkMWYyMSAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCxyZ2JhKDIwLDIwLDIwLDApIDAscmdiYSgyMCwyMCwyMCwuMTUpIDE1JSxyZ2JhKDIwLDIwLDIwLC4zNSkgMjklLHJnYmEoMjAsMjAsMjAsLjU4KSA0NCUsIzFkMWYyMSA2OCUsIzFkMWYyMSAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDIwLDIwLDIwLDApIDAscmdiYSgyMCwyMCwyMCwuMTUpIDE1JSxyZ2JhKDIwLDIwLDIwLC4zNSkgMjklLHJnYmEoMjAsMjAsMjAsLjU4KSA0NCUsIzFkMWYyMSA2OCUsIzFkMWYyMSAxMDAlKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3Ljd2dztcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IC0xcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4gIFxuQGtleWZyYW1lcyBtb3ZlWCB7XG4gICAgZnJvbSB7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBsZWZ0OiBjYWxjKDkyJSAtIDMyMHB4KTtcbiAgICB9XG59XG4gIFxuQGtleWZyYW1lcyBtb3ZlWSB7XG4gICAgZnJvbSB7XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIHRvcDogY2FsYygyNnZoIC0gMTIwcHgpO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5tYWluLWhlYWRlciB7XG4gICAgICAgIC5mbG9hdGluZyB7XG4gICAgICAgICAgICBhbmltYXRpb246IG1vdmVYIDcuMDVzIGxpbmVhciAwcyBpbmZpbml0ZSBhbHRlcm5hdGUsIG1vdmVZIDcuNHMgbGluZWFyIDBzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICAgICAgICB9XG4gICAgfVxufVxuICAiXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map