# amatic.js
Simple and beautiful ajax notifications/loaders 

Amatic.js 
Ajax notification/loader made easy <br>
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
	newclass: "super-class",										
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
<td width="189">
	<p><b>Name</b></p>
</td>
<td width="115">
	<p><b>Type</b></p>
</td>
<td width="115">
	<p><b>Default</b></p>
</td>
<td width="115">
	<p><b>Description</b></p>
</td>
</tr>
<tr>
<td width="189">
<p>newclass</p>
</td>
<td width="115">
<p>string</p>
</td>
<td width="115">
<p>null</p>
</td>
<td width="115">
<p>Define a new class for notification/loader</p>
</td>
</tr>
<tr>
<td width="189">
<p>loader</p>
</td>
<td width="115">
<p>string</p>
</td>
<td width="115">
<p>fa fa-circle-o-notch</p>
</td>
<td width="115">
<p>Define the class of the icon to display (Font Awesome is Default)</p>
</td>
</tr>
<tr>
<td width="189">
<p>completeIcon</p>
</td>
<td width="115">
<p>string</p>
</td>
<td width="115">
<p>fa fa-check</p>
</td>
<td width="115">
<p>Define the class of the icon to display (Font Awesome is Default)</p>
</td>
</tr>
<tr>
<td width="189">
<p>fadeIn</p>
</td>
<td width="115">
<p>boolean</p>
</td>
<td width="115">
<p>true</p>
</td>
<td width="115">
<p>Activate/Desactivate fade in at the start of notification/loader</p>
</td>
</tr>
<tr>
<td width="189">
<p>fadeOut</p>
</td>
<td width="115">
<p>boolean</p>
</td>
<td width="115">
<p>true</p>
</td>
<td width="115">
<p>Activate/Desactivate fade out at the start of notification/loader</p>
</td>
</tr>
<tr>
<td width="189">
<p>animateIn</p>
</td>
<td width="115">
<p>string</p>
</td>
<td width="115">
<p>null</p>
</td>
<td width="115">
<p>The class of the animation to display &nbsp;(animate.css required)</p>
</td>
</tr>
<tr>
<td width="189">
<p>animateOut</p>
</td>
<td width="115">
<p>string</p>
</td>
<td width="115">
<p>null</p>
</td>
<td width="115">
<p>The class of the animation to hide (animate.css required)</p>
</td>
</tr>
<tr>
<td width="189">
<p>timeOut</p>
</td>
<td width="115">
<p>time</p>
</td>
<td width="115">
<p>2000 (2 seconds)</p>
</td>
<td width="115">
<p>The time of the notification/loader to be displayed</p>
</td>
</tr>
</tbody>
</table>

# License

Amatic.js is licensed under the MIT license. (http://opensource.org/licenses/MIT)

