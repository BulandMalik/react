### React Basics
1. HTML boiler plate code in VS COde
    1. Create index.html
    2. write `doc` and press `tab`
    3. VS Code will add boiltyer plate code as following.
    ```
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>    
    ```
2. Adding html elements in vs code
    1. write [elementName]#[divId] and press `tab`
        1. `div#hello` press `tab`
        ```
            <div id="hello"></div>
        ```
    2. write [elementName].[className] and press `tab`
        1. `h3.hello` press `tab`
        ```
            <h3 class="hello"></h3>
        ```
3. Load React to the website via CDN
    1. https://reactjs.org/docs/cdn-links.html
4. Add babel library
    1. its a compiler to support extra feature in the our javascript that browsers does not support.
    2. it compiles those extra features into the code that browser does understand at runtime
    3. https://babeljs.io/setup#installation --> 

5. React Components
    1. Build bloacks in react
    ```
        <!-- Your custom script here -->
        <script type="text/babel">
            const Banner = () => {
                return (
                    <div>
                        <p>Banner</p>
                    </div>
                );
            };
            //const getMessage = () => "Hello World";
            //document.getElementById('output').innerHTML = getMessage();

            ReactDOM.render( 
                <Banner />,
                document.getElementById('banner')
            )
        </script>    
    ```
6. JSX & Templates
    1. JSX
        1. Javascript XML
        2. JSX syntax is like xml or close to HTML
        3. During rendring, JSX gets converted into HTML
        4. HTML gets injected into the DOM
        5. JSX Key differences.
            1. one key different for JSX is to use `className` and not `class` as `class` is a reserved keyworkd in javascript.
            2. another key difference is to have only one top level root element that gest returned
            3. js style comments `//` or `/**/`
    2. Templates
        1. Its nothing but JSX codebase
        2. at renders time babels compiles it into HTML
        ```
            const Banner = () => {
                return (
                    <div>
                        <p>Banner</p>
                    </div>
                );
            };
        ```
7. Template Expression & Variables
```
        const title = "Welcome to my Website!!!"
        const subtitile = "React awesome course."
        const address = "https://www.netninja.dev";

        const Banner = () => {
            return (
                <div>
                    <h2>{title}</h2>
                    <p>{subtitile}</p>
                    <p>Today date is : {new Date().toDateString()}</p>
                    <p>Random number: {Math.random() * 100}</p>
                    <a href={address}>More Courses</a>
                </div>
            );
        };
```

8. Click Events & Event Handlers
```
    const title = "Welcome to my Website!!!"
    const subtitle = "React awesome course."
    const address = "https://www.netninja.dev";

    const handleClick = () => {
        console.log("You disturbed me, I am sleeping !!!!!!");
        console.log("Course Title is:", subtitle);
    };

    const handleClickWithEventCapturedObj = (e) => {
        console.log("DO you know whom you clicked, its a ", e.target.type);
    };

    const Banner = () => {
        return (
            <div>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <p>Today date is : {new Date().toDateString()}</p>
                <p>Random number: {Math.random() * 100}</p>
                <a href={address}>More Courses</a>
                <button type="button" onClick={handleClick}>Click Me!</button>
                <button type="button" onClick={handleClickWithEventCapturedObj}>Captue Me!!!</button>
                <button type="button" onClick={() => console.log('Inline Function.....')}>Inline Function !!!</button>
            </div>
        );
    };    
```

9. 

