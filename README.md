# NavExRateFinder
    - Author :  Nav
    - Version : 1.0.0
This project was generated with Angular cli which is a command line interface to scaffold and build angular apps using nodejs style (commonJs) modules.

Tools/Framework
    - Angular2
    - Typescript
    - Jasmine    
    - Protractor 

#Prerequisites 
it requires npm version 3.x and the latest node  v6.x (atleast it should get than v4.x)
typings v1 or greater

#steps to setUp the environment

- go to the project foler and exec npm install in your bash terminal

NOTE :

{ 
    -Update npm and node version to match the requirements
    -install the latest version of angular-cli via npm or if you already have angular-cli then exec following commands
     >sudo npm uninstall -g angular-cli
     >npm cache clean
     >npm install -g angular-cli@latest
     - Install/Update Protractor and webdriver manager
     >sudo npm install -g protractor
     >webdriver-manger update
}

    


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

##Project structure 
    NavEXRATEFINDE
        -src
            app
                app.component.ts : main component and entry point for the app to load child components
                forEx
                    for-ex-selector.component.html : contain the calculator design
                    for-ex-selector.component.css : css for the calculator page
                    for-ex-selector.component.ts : controller 
                    for-ex-selector.componenet.spec.ts : contains the unit testing specs for all scenario menitoned in the requiremnt
                                                        >ng test will run all the unit test cases
                services :
                    for-ex.service: service layer 
                    mockdata : holds all mock data for the application
                    icurrency : interface

            
            :contains all the source files (in typescript)
            :unit testing files
        -dist 
            :contains all compiled low level javascript file (plain JS)
        -e2e 
            :contains all the e2e test case (exec >ng e2e from bash to see the output)

