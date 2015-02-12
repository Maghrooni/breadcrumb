# Breadcrumb

Breadcrumb is javascript object to create **Dynamic** breadcrumbs based on url of page

### Installation
download and include `breadcrumb.js` file into header of your html

```html
<script src="breadcrumb.js" type="text/javascript"></script>
```
##usage
here are Example of how to use breadcrumb

####Simple
simple with default options, just call `build` method of `breadcrumb` it will build breadcrumbs based on URL.<br>
```javascript
breadcrumb.build();
```
Common usage is to call it on main header so each page has it's own breadcrumb !

####Overriding Configs
You can override default configs with your own !
```javascript
breadcrumb.main: [{"text": 'Home', "link": 'link/to/first/bread', 'class': 'fristClass'}];
breadcrumb.element = 'ul';
breadcrumb.build();
```
####Exclude Parts of Url being shown in Breadcrumb
```javascript
breadcrumb.exclude = ['#',''];
breadcrumb.build();
```
####Get Output String instead of Writing it
```javascript
breadcrumb.write = false;
console.log(breadcrumb.build());
```
##Configs
| Config      | Description           | default |
| ------------- |:-------------:| -----:|
| `main`      | Main Bread will be the first Bread and always will be there ! | `[{"text": 'Main', "link": '/', 'class': 'active'}]`   |
| `element`   | Breadcrumb Parent Element     |   `'ol'` |
| `class`     | Parent Element Class or Classes      |   `'breadcrumb'` |
| `lastClass` | Last Bread's Class       |   `'current-bread'` |
| `exclude` | Array containing texts to exclude from breadcrumbs       |   [`#`,``] |
| `write` | Write to Document or Not       |   `true` |

Have fun & [Visit My Website]
[Visit My Website]: http://maghrooni.ir

License
----
MIT
