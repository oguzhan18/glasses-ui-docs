# Let's Add to Our Project

There are 2 different methods when using Glasses UI. The first method is to install it as a package and take advantage
of the internal files. The second method is to use the library codes from CDN in html.

## CDN Usage and Project creation.

```html

<html>
<head>
    <link rel="stylesheet" crossorigin="anonymous" href="
           https://glasses-ui.vercel.app/styles.88fede6400456408.css">
</head>
<body>

</body>
</html>
```

You are now ready to create your first app with `CDN`. Create a `(HTML)` project and add the following code


> If you paste the upload code into a (`.html`) file
> '`<body></body>`, you can use it any way you want. If you have a (HTML) file and you want to add it, you can use it by
> pasting directly (`<link rel="stylesheet" crossorigin="anonymous"`
> `href="https://glasses-ui.vercel.app/styles.88fede6400456408.css">`) .

### Installing and using NPM.

```bash
 npm i glasses-ui
```

* NodeJS and NPM - install latest LTS
* Yarn - run `[sudo] npm i -g yarn` if it is not already installed
* Run the `npm` command above in the `NodeJS` based framework project you want to use.

## Running the application


Below I will explain how you can install and use Glasses UI in a newly created Angular project.

* The first step, is to install Angular CLI `npm install -g @angular/cli`
* The second step, is to create a new angular project. `ng new glasses-ui-user-guide`
> `[glasses-ui-user-guid]` you can give any project name you want to the field.
* The third step is in the `styles.scss` or styles.css file in the src folder in your created angular project.
  `@import 'glasses-ui/style';`
  If you add the code, you can use `Glasses UI` library in the whole project.
<br>
<br>
I showed you how to download the library in Angular framework and import it into the project. However, you can use it easily by importing it into your (html) or (css) file in the framework you want.
<br>
<br>
 
