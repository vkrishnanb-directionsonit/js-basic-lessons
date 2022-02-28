DOM Functions
----
1. **document.querySelectorAll('p');** - select all "paragraph" elements from the page

1. **document.querySelector('p');** - select the first "paragraph" element from the page

1. **document.getElementById('feedback').innerHTML = 'Hello World!';**   
    \<div id="myDiv">Hello!</div>  
    \<script type="text/javascript" language="javascript">  
        console.log(myDiv.innerText);  
        myElement = document.getElementById("myDiv");  
        console.log(myElement.innerText);  
        console.log(myElement.innerHTML);  
    \</script>

1. **document.writeln('Hello World!');** - content will be added to the HTML page output

1. **document.addEventListener('DOMContentLoaded', () => alert("DOM ready after defer!"));**  
    \<script defer src="https://javascript.info/article/script-async-defer/long.js">\</script>  
    DOMContentLoaded event handler waits for the deferred script. It only triggers when the script is downloaded and executed.

1. **document.createElement('script');** - dynamic element

1. **document.body.append(script);**     - add the dynamic script element to the HTML body  
    ```
    let script = document.createElement('script');  
    script.src = "/article/script-async-defer/long.js";  
    document.body.append(script);   
    ```
1. **document.body.innerHTML**  
    const myname = \`venkat\`;  
    const hello = \`Hello my name is ${myname}. Nice to meet you. its is ${(104/1.8)-32} celsius now. And ${(40*1.8)+32} Fahrenheit\`;  
    const html = \`
      \<div>  
        \<h2>${myname}\</h2>  
        \<p>${hello}\</p>  
      \</div>  
    \`;  
    document.body.innerHTML = html;
1. ** ** 
