AS220 Drupal Theme Read Me
==========================

Drupal console
--------------

Follow instructions at [drupalconsole.com](https://drupalconsole.com) to install.

To enable dev mode on your local instance run:

	sudo drupal site:mode dev
	
This will correctly disable template caching and turn on Twig debugging.


Drush
-----

Follow instractions at [github.com/drush-ops](https://github.com/drush-ops/drush) to install. Note: if you are using [Acquia Dev Desktop](https://www.acquia.com/products-services/dev-desktop) Drush comes pre-installed.

You'll find a helpful reference of Drush commands here: [drushcommands.com](http://drushcommands.com)

Some useful Drush commands:

	drush cache-rebuild # cr
	drush pm-update # up
	drush core-cron # cron
	drush updatedb # updb
	drush pm-download [module_name] # dl
	drush pm-enable [module_name] # en


Grunt task runner
-----------------

You can use Grunt to compile SASS and launch a LiveReload server.

First make sure you have [Node.js](https://nodejs.org/en/) installed.

To initialize the project (and install required modules):

	npm install

To run the default task which will compile SASS and launch a LiveReload server, run:

	grunt


LiveReload
----------

Install the [LiveReload](http://livereload.com) browser extension.

Once the grunt task is running, activate the browser extension. When properly connectd to the LiveReload server, you will be able to preview SASS/CSS changes without having to manually reload the page.


Useful Posts
------------

[Using attributes in templates](https://www.drupal.org/node/2513632)


