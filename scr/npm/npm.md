#  NPM
## Installing all dependencies

If a project has a package.json file, by running
<pre><code>npm install</code></pre>
it will install everything the project needs, in the node_modules folder, creating it if it's not existing already.

## Installing a single package
You can also install a specific package by running
<pre><code>npm install package-name</code></pre>
Furthermore, since npm 5, this command adds <package-name> to the package.json file dependencies. Before version 5, you needed to add the flag --save.

Often you'll see more flags added to this command:

+ --save-dev installs and adds the entry to the package.json file devDependencies
+ --no-save installs but does not add the entry to the package.json file dependencies
+ --save-optional installs and adds the entry to the package.json file optionalDependencies
+ --no-optional will prevent optional dependencies from being installed
Shorthands of the flags can also be used:

+ S: --save
+ D: --save-dev
+ O: --save-optional
## Updating packages
Updating is also made easy, by running

<pre><code>npm update</code></pre>
npm will check all packages for a newer version that satisfies your versioning constraints.

You can specify a single package to update as well:
<pre><code>npm update package-name</code></pre>

## Running Tasks
The package.json file supports a format for specifying command line tasks that can be run by using
Console:
<pre><code>npm run task-name</code></pre>
Json file:
<pre><code>{
  "scripts": {
    "start-dev": "node lib/server-development",
    "start": "node lib/server-production"
  }
}
</code></pre>
Json file:
<pre><code>{
  "scripts": {
    "watch": "webpack --watch --progress --colors --config webpack.conf.js",
    "dev": "webpack --progress --colors --config webpack.conf.js",
    "prod": "NODE_ENV=production webpack -p --config webpack.conf.js",
  }
}
</code></pre>
Console:
<pre><code>$ npm run watch
$ npm run dev
$ npm run prod
</code></pre>


