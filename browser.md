# Rendering Web Page

1.  DOM is formed from HTML received from server
2.  CSSOM is formed
3.  Render Tree - DOM and CSSOM are combined. Invisible elements are not included (like display:none). Render tree is visual representation of DOM.
4.  Layout - browser creates layout (size and position) of each render-tree node
5.  Paint - Layers are created and rasterized (simliar to Photoshop
6.  Compositing - Layers (bitmap images) sent to GPU and drawn on screen

- DOM gets parsed
- When it encounters script tag, it will pause and load script and then continue parsing DOM
- After DOM is parsed and scripts loaded, then browser waits for styleshee to load and parsed (afer which DOMContentLoaded is fired)
- After all external resources (like images) are loaded, window.onload is fired.

## CSS

- <link rel="stylesheet"> is fetched asynchronously, but parsed synchronously
- CSS is a render-blocking resource, so browser will not render anything until CSS is downloaded and parsed
