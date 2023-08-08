# The contents of this folder follow the course "A Beginner-Level Guide to Node.js" from Educative.io

## Helpful tsc commands
- **tsc --init:** initializes a ts project by creating a tsconfig.json file with some default settings
- **tsc --watch:** continuously monitor changes to ts files
- **tsc [index.ts]:** transpile the ts file into the corresponding index.js file with some default tsc compiler settings
- **tsc:** when a tsconfig.json file is present, running tsc will transpile the ts files in the project into the corresponding js files using the compiler options specified in the tsconfig.json file

## Helpful npm commands
- **npm init --yes/-y:** set up a new or existing npm package by skipping questionaire
- **npm install --save-dev/-D:** install an npm package and save it to devDependencies (for use when developing)
    - **npm install -D typescript:** install typescript for this node project
    - **npm install -D @tsconfig/recommended:** install tsconfig.json recommended default settings for starting a ts project
        - Have to add the following to your tsconfig.json file:  
            ```
            {  
                "extends": "@tsconfig/recommended/tsconfig.json",  
                "compilerOptions": {...}  
            }
            ```
- **npm install --save-prod/-P:** install an npm package and save it to dependencies (actual dependencies of the project); this is the default
- **npm run [command]:** run a command under scripts in the package.json file
    - Have to add the following to your package.json file under scripts:
        ```
        "scripts": {
            "tsc": "tsc",
            "other commands"
        }
        ```
    - **npm run tsc:** run the version of tsc installed for the npm package through node
    - **npm run tsc -- --[arg(s)]:** run the version of tsc installed for the npm package through node and pass it some args; the first "--" is to allow npm to pass options to the underlying script (tsc in this case); the second "--[args(s)]" are the options that actually get passed to tsc
        - **npm run tsc -- --init:** initialize a ts project in current directory through the ts version installed for this node project