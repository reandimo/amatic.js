# amatic.js
Simple and beautiful ajax notifications/loaders 

Amatic.js 
Ajax notification/loader made easy <br>
<a href="https://reandimo.github.io/amatic.js/">https://reandimo.github.io/amatic.js/</a>
amatic.js is a cool and customizable notification for an ajax event.

# Basic Usage
1.	Include the script and stylesheet on your document's <head> , Font-Awesome and jQuery are required for this plugin:

<pre>
  &#60;link rel="stylesheet" href="amatic.css"&#62;
  &#60;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"&#62;
  
  &#60;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">&#60;/script&#62;
  &#60;script type="text/javascript" src="jquery.amatic.js">&#60;/script&#62;</pre>
<br>

2.	To initialize the plugin:

<pre>$(document).ready(function(){
        $.amatic();
      });</pre>
<br>

3.	Syntax:

  <pre>$.amatic( [CSS RULES], [OPTIONS] );</pre>
<br>

4.	You can define new CSS Rules for the notification/loader like this:

  <pre>var css = { backgroundColor: "black", color: "white" };</pre>

  <pre>$.amatic(css);</pre>
<br>

Or:

  <pre>$.amatic({backgroundColor: "black", color: "white" });</pre>
<br>

5.	And modify the options avaiables:

<pre>
$.amatic(css, {
	newClass: "super-class",										
	fadeIn: false
});
</pre>

<br>

6.	Animations:

<pre> 
$.amatic(css, {
	animateIn: "bounceInUp", 
	animateOut: "bounceOutDown"
});
</pre>
<br>

# Options

<table class="tg">
<tbody>
<tr>
<td >
	<p><b>Name</b></p>
</td>
<td >
	<p><b>Type</b></p>
</td>
<td >
	<p><b>Default</b></p>
</td>
<td >
	<p><b>Description</b></p>
</td>
</tr>
<tr>
<td >
<p>newClass</p>
</td>
<td >
<p>string</p>
</td>
<td >
<p>null</p>
</td>
<td >
<p>Define a new class for notification/loader</p>
</td>
</tr>
<tr>
<td >
<p>loader</p>
</td>
<td >
<p>string</p>
</td>
<td >
<p>fa fa-circle-o-notch</p>
</td>
<td >
<p>Define the class of the icon to display (Font Awesome is Default)</p>
</td>
</tr>
<tr>
<td >
<p>completeIcon</p>
</td>
<td >
<p>string</p>
</td>
<td >
<p>fa fa-check</p>
</td>
<td >
<p>Define the class of the icon to display (Font Awesome is Default)</p>
</td>
</tr>
<tr>
<td >
<p>fadeIn</p>
</td>
<td >
<p>boolean</p>
</td>
<td >
<p>true</p>
</td>
<td >
<p>Activate/Desactivate fade in at the start of notification/loader</p>
</td>
</tr>
<tr>
<td >
<p>fadeOut</p>
</td>
<td >
<p>boolean</p>
</td>
<td >
<p>true</p>
</td>
<td >
<p>Activate/Desactivate fade out at the start of notification/loader</p>
</td>
</tr>
<tr>
<td >
<p>animateIn</p>
</td>
<td >
<p>string</p>
</td>
<td >
<p>null</p>
</td>
<td >
<p>The class of the animation to display &nbsp;(animate.css required)</p>
</td>
</tr>
<tr>
<td >
<p>animateOut</p>
</td>
<td >
<p>string</p>
</td>
<td >
<p>null</p>
</td>
<td >
<p>The class of the animation to hide (animate.css required)</p>
</td>
</tr>
<tr>
<td >
<p>timeOut</p>
</td>
<td >
<p>time</p>
</td>
<td >
<p>2000 (2 seconds)</p>
</td>
<td >
<p>The time of the notification/loader to be displayed</p>
</td>
</tr>

<tr>
<td >
<p>beforeLoader</p>
</td>
<td >
<p>callback</p>
</td>
<td >
<p>null</p>
</td>
<td >
<p>Callback before the loader is displayed</p>
</td>
</tr>

<tr>
<td >
<p>afterLoader</p>
</td>
<td >
<p>callback</p>
</td>
<td >
<p>null</p>
</td>
<td >
<p>Callback after the loader is displayed</p>
</td>
</tr>

</tbody>
</table>

# License

Amatic.js is licensed under the MIT license. (http://opensource.org/licenses/MIT)
