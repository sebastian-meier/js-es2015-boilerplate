# js-es2015-boilerplate
**A very minimalistic boilerplate for creating javascript projects using eslint, babel (es2015, es6), rollup and uglifyjs**

Many boilerplates are made for big projects. And most require you knowing a lot about the individual components used in those frameworks. Especially if you are just working on small JS components this is total overkill.

In my case for example, i am mostly working on small D3 components, i just something to check my syntax, if i write in es6/2015 compile to current standards and then bundle and minify everything.

Back in the days when things were not that complicated i just used the awesome codekit app to do those things. 

This boilerplate is build upon Mike Bostocks great D3 boilerplate (https://bost.ocks.org/mike/d3-plugin/).
Mike's boilerplate did not contain a linter nor compatibility to transpile ES6 code.

So i slightly modified Mike's version and added eslint and babel to the mix. 

And i removed the testing and publishing bits (, but feel free to add them again).

##Setup

```
package.json
rollup.config.js
.babelrc

index.js

--+ src
  |  module.js

--+ build
```

You will find the most important bits in package.json.
First run:

```
npm install
```

After installing all the dev-dependencies you can test the system by compiling the default code bits:

```
npm run compile
```

That's all the magic there is. Behind the scenes there is a sequence of tools handing down code bits

```
eslint src/*.js || exit 0 && rm -rf build && mkdir build && rollup -c rollup.config.js && uglifyjs build/bundle.js -c -m -o build/bundle.min.js
```

### ESLINT
**babel-eslint,eslint**
```
eslint src/*.js || exit 0
```

ESLINT is checking all ".js" files in the src folder you can add more folders or file types (comma separated)

### Cleaning and Creating build folder
```
rm -rf build && mkdir build
```

After checking everything is good, we remove the old build folder and create an new empty folder.

### ROLLUP & BABEL
**babel-cli,babel-eslint,babel-preset-es2015-rollup,eslint,rollup,rollup-plugin-babel**
```
rollup -c rollup.config.js
```

We are using rollup to bundle all our js files. The additional config is stored in rollup.config.js.
Most importantly the entry point of where to start (index.js) and where to send stuff (build/bundle.js)
Rollup is combined with Babel for transpiling ES6 code. Config for this can be found in .babelrc.
Right now its simply using es2015 preset, but you can of course easily add others.

*For me personally, the most important bit.* We are using the rollup format **umd**. This means everything is bundled in one object that you can define, right now it is called 'bundle' (rollup.config.js). This means, when you use you code in the browser (see example/index.html) you can access your functions and modules through bunde.xyz().

### UGLYFYJS
**uglify-js**
```
uglifyjs build/bundle.js -c -m -o build/bundle.min.js
```

Last but not least our bundle is minified using uglify-js.

## Compile on file change
I also added a small function that compiles the code when a file in the src folder is change, simply run this from the command line:
```
npm run watch
```

## Conclusion

There are a lot more options to setup your compiler and of course a lot more advanced tools than using an npm run script, like for instance webpack or gulp or whatever. But i find this to be a good minimalist starting point.

## Problems

I think this depends on file system problems of my own, but sometimes my compile script was not able to modify the build folder, so i had to run the compile script under sudo.