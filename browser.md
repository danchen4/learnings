# Rendering Web Page

1.  DOM is formed from HTML received from server
2.  CSSOM is formed
3.  Render Tree - DOM and CSSOM are combined. Invisible elements are not included (like display:none). Render tree is visual representation of DOM.
4.  Layout - browser creates layout (size and position) of each render-tree node
5.  Paint - Layers are created and rasterized (simliar to Photoshop)
6.  Compositing - Layers (bitmap images) sent to GPU and drawn on screen

- DOM gets parsed
- When it encounters script tag, it will pause and load script and then continue parsing DOM
- After DOM is parsed and scripts loaded, then browser waits for stylesheet to load and parsed (afer which DOMContentLoaded is fired)
- After all external resources (like images) are loaded, window.onload is fired.

## CSS

- <link rel="stylesheet"> is fetched asynchronously, but parsed synchronously
- CSS is a render-blocking resource, so browser will not render anything until CSS is downloaded and parsed

# Reflow

Generally, when you change the size or position of an element, all the elements after it will also need to change their position / size, which will cause a reflow

- Reflow is bad;

Avoiding reflow:

- Change layout (geometry of page)
- Change width/height of an element
- Changing font / font size

# Repaint

When changing look, without change size or position (background color, text color, visibility: hidden)

# DOM ready / Async / Defer

Normally, wihtout async/defer script tag, parser will pause parsing, script would be downloaded and exectuted. After that parsing resume.

- 'script defer' - executes when DOM is ready, but before DOMContentLoaded
- 'script async' - script is completely independent. Page doesn't wait for async scripts and script doesn't wait for page.

document.addEventListener('DOMContentLoaded', func);

document.onreadystatechange = function () {  
 if (document.readyState == "complete") {
//put your script here
}
}

# DOM

DOM is hierarchy of nodes
Element is a type of node. There are other nodes: text, comment, document

# window vs document

Window is Javascript's global object in a browser. Document is property of window object.

window.onload = when DOM is ready and all contents (images, css, scripts) are finished loading
document.onload = DOM is ready, but can be ready before other content has loaded (images, scripts, etc.)
