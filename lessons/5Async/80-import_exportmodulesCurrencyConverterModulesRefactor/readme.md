## List of module files

1. init.js
1. elements.js (uses DOM selecters and creates ref for elements)
1. utils.js (creates list of option elements with currencies for select elements )
1. currencies.js (list of currencies with country code)
1. handlers.js

---

## Site map

index.html ==> init.js
init.js  
    ==> import  './elements.js';
        import './utils.js';
        import './currencies.js';
        import './handlers.js';
    function: init() adds list of currencies to the select element in the HTML
                      also adds eventListner to the input element
---

## Challenge

Create an on-line registration application for RT-PCR Test.
1. Person Name
2. Aadhar Card no
3. Data Birth
4. City
5. Date of Test
6. Time of Test
7. Result ( Positive / Negative)
8. Lab name
9. Report no
10. Gender
-------------------------------
Features:
	1. Add new registration
	2. Show all registration in a table in the same page
	3. Provide a search by aadhar no option and show the result 