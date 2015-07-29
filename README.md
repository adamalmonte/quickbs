# quickbs
Command line tool I created for personal use, to create a Bootstrap 3 boilerplate from the command line.

### Usage
	> $ quickbs

Will create a boilerplate in the current working directory, in a folder titled "quickbs".

	> $ quickbs *[directory name]*

Will create a boilerplate in the directory specified. 

The npm package [mkdirp](https://github.com/substack/node-mkdirp) is a dependency. This allows the user-specified directory to be created even if it is nested inside one or more directories that do not exist yet.

### What gets created?
quickbs/ (or user-specified directory name)
 index.html (basic Bootstrap 3 boilerplate, directly from their site)
 css/
  styles.css (empty)
 js/
  scripts.js (empty)

index.html includes bootstrap.min.css, bootstrap.min.js, and jQuery via CDNs, to make this package as quick as possible by only creating the necessary files. 