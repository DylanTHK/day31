# Day31Angular

## Installation guides
```
sudo npm install -g typescript
sudo npm install -g @angular/cli
```
## Commands to start Angular Project
1. create new angular project
    - ng new <app_name>
2. add libraries (if necessary)
    - npm install --save <module_name>
3. Generate new component (inside components folder)
    - ng generate component <components/component_name> --flat --skip-tests
4. start angular server (add -o to open browser to localhost:4200)
    - ng serve
<br>

## Angular vs Spring
```
package.json -> pom.xml
tsconfig: to control how ts is transpiled to javascript code

main working directory: src
assets: static directory in SpringBoot
main.ts: avoid (for now)
```

global files
1. index.html
2. styles.css (global css)
3. main.ts

creating component
ng generate component components/hello --flat --skip-tests OR ng g c components/hello --flat --skip-tests
- creates a folder: components
- add hello.component.css
- add hello.component.html
- add hello.component.ts


## Pass data from Child's Perspective
## @Input() 
- allows parent -> child (pass / overwrite data)

## @Output() 
- pass data from child -> parent through events (event binding)
- eg updated number value



** eventnames should be meaningful to your app's functions

```
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
```


