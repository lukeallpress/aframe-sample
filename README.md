# Build your dream apartment!

For this lab, use your imagination and your new AFrame skills to build out your dream apartment. 

You'll need to use planes and positioning to build the walls, floor, and ceiling. Here are some example walls but feel free to make your apartment bigger, smaller, or have multiple rooms.

```js
<!--walls-->
<a-plane id="front" color="#bbc3cc" height="40" width="70" position="-2.168 0 -23.538"></a-plane>
<a-plane id="left" color="#bbc3cc" height="40" width="80" position="-37.005 0 15.942" rotation="0 90 0"></a-plane>
<a-plane id="right" color="#bbc3cc" height="40" width="100" position="32.159 0 24" rotation="0 -90 0"></a-plane>
<a-plane id="back" color="#bbc3cc" height="40" width="70" position="-2.150 0 44.604" rotation="0.458 180.000 -180.000"></a-plane>
```

You'll also want to add models to your apartment to make it look more realistic. You can download models from [Clara.io](https://clara.io/library) and use them in your project by including them as assets. 

```js
<!--Couch-->
<a-assets>
	<a-asset-item id="couchobj" src="models/couch.obj"></a-asset-item>
	<a-asset-item id="couchmtl" src="models/couch.mtl"></a-asset-item>
</a-assets>
```
 
And then using the asset ```id``` and as your ```a-obj-model ``` ```src``` and ```mtl```. Use scale, positioning and rotation to place your models in your apartment.

```js
<!--Couch-->
<a-obj-model src="#couchobj" mtl="#couchmtl" position="-23 -10 -8" scale="7 7 7"></a-obj-model>
```

This lab is open ended so feel free to get as imaginative a you want. Pinterest has some great [apartment inspo](https://www.pinterest.com/saraseven/tiny-apartment-inspiration/?lp=true). Example code for a dream apartment can be found [here](https://github.com/melaniep518/aframe-dream-apt).