---
marp: true
---

# HTML Elements <!-- fit -->
1. \<html>
2. \<head>
1. \<body>
1. \<p>
1. \<div> \<div align="center">
1. \<span>
1. \<table>
1. 

****
# Questions 

1. Difference between \<div> and \<p>

They have semantic difference :
- \<div> element is designed to describe a container of data. 
- \<p> element is designed to describe a paragraph of content
---
HTML is a markup language which means that it is designed to “mark up” content in a way that is meaningful to the consumer of the markup.   
The elements that you choose to mark up your content should describe the content.  
Don’t mark up your document based on how it should look – **mark it up based on what it is**.
- For a generic container purely for layout purposes use a \<div>
- For an element to describe a paragraph of content then use a \<p>

---
# Note: 
It is important to understand that both \<div> and \<p> are block-level elements which means that most browsers will treat them in a similar fashion.  
Major web browsers will render  
  A \<p> tag with margin above and below the paragraph.   
  A \<div> tag will be rendered without any margin at all.

---
Anything that can go in a **\<p>** can go in a **\<div>**  
but the reverse is not true.  
\<div> tags can have block-level elements as children.  
\<p> elements cannot.

```HTML DTD:```  
\<!ENTITY % inline "#PCDATA | %fontstyle; | %phrase; | %special; | %formctrl;">  
\<!ENTITY % block
     "P | %heading; | %list; | %preformatted; | DL | DIV | NOSCRIPT |
      BLOCKQUOTE | FORM | HR | TABLE | FIELDSET | ADDRESS">  
\<!ENTITY % flow "%block; | %inline;">  
\<!ELEMENT DIV - - (%flow;)*            -- generic language/style container -->  
\<!ELEMENT P - O (%inline;)*            -- paragraph -->

***
# Marp slide deck
<!-- _class: invert -->
## The big slogan <!-- fit -->
---
# new slide
![bg right](https://picsum.photos/720?image=29)
![bg](https://picsum.photos/720?image=20)
- one
- two
- three
