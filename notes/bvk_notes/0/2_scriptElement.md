---
marp: true
---
<!-- backgroundColor: yellow -->
<!-- backgroundImage: "url(imgs/bg_light8.jpeg)" -->
<!-- _color: yellow -->
![bg cover](../imgs/Space.jpeg)
# JavaScript Notes <!-- fit -->  

---
# 1. Is javascript the default scripting lang for browsers <!-- fit -->  
	Ans: Yes  
---
# The SCRIPT element  
<!ELEMENT SCRIPT - - %Script;          -- script statements -->  

---
# The ATTLIST of SCRIPT element  
<!ATTLIST SCRIPT  <br/>
    charset %Charset; #IMPLIED --char encoding of linked resource --  
    type %ContentType; #REQUIRED --content type of script language--  
    src  %URI;  #IMPLIED  -- URI for an external script --  
    defer (defer) #IMPLIED  -- UA may defer execution of script --  
\>

---
# type = content-type [CI]
This attribute specifies the scripting language of the element's contents and overrides the default scripting language. 
The scripting language is specified as a content type (e.g., "text/javascript").  
Authors must supply a value for this attribute.  
**There is no default value for this attribute.**

---
# language = cdata [CI]
**Deprecated.**  
This attribute specifies the scripting language of the contents of this element. 
Its value is an identifier for the language, but since these identifiers are not standard, this attribute has been deprecated in favor of type.

---
# url:

---
# The default scripting language  	
Authors should specify the default scripting language for all scripts in a document by including the following META declaration in the HEAD:

**<META http-equiv="Content-Script-Type" content="type">**  

where "**type**" is a content type naming the scripting language.  
Examples of values include "**text/tcl**", "**text/javascript**", "**text/vbscript**".

---
# Content-Script-Type: type
In the absence of a META declaration, the default can be set by a "Content-Script-Type" HTTP header.
where **type** is again a content type naming the scripting language.

---
User agents should determine the default scripting language for a document according to the following steps (highest to lowest priority):
1. If any META declarations specify the "Content-Script-Type", the last one in the character stream determines the default scripting language.
2. Otherwise, if any HTTP headers specify the "Content-Script-Type", the last one in the character stream determines the default scripting language.

---
- Documents that do not specify default scripting language information and that contain elements that specify an intrinsic event script are incorrect 
- User agents may still attempt to interpret incorrectly specified scripts but are not required to 
- Authoring tools should generate default scripting language information to help authors avoid creating incorrect documents

**Note:** VBScript is no longer supported in IE11 edge mode
url:https://msdn.microsoft.com/en-us/library/dn384057(v=vs.85).aspx
