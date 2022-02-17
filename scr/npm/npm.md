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

--save-dev installs and adds the entry to the package.json file devDependencies
--no-save installs but does not add the entry to the package.json file dependencies
--save-optional installs and adds the entry to the package.json file optionalDependencies
--no-optional will prevent optional dependencies from being installed

## Updating packages
Updating is also made easy, by running

<pre><code>npm update</code></pre>
