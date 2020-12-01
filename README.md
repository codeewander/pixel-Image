# Images and Pixels

![](https://i.imgur.com/2OVv3Jb.gif)

This art project is dedicated to using images pixels as the building blocks of interactive graphics.

Source Code : [Openprocessing](https://www.openprocessing.org/sketch/1021741)

## Notes

1. Using `preload()` funtion and `loadImage()` to load images before setup

```javascript
function preload() {
  natureImg = loadImage("sunrise.jpg");
  noiseImg = loadImage("rain.jpg");
}
```

Reference: [preload()](https://p5js.org/reference/#/p5/preload)

2. Draw image on canvas

```javascript
image(noiseImg, 0, 0, width, height);
```

Reference: [image()](https://p5js.org/reference/#/p5/image)

3. Set image mode

```javascript
imageMode(CENTER); //CORNER, CORNERS, or CENTER
```

Reference: [imageMode()](https://p5js.org/reference/#/p5/imageMode)

4. Get a region of pixels from an image

```javascript
let natureImg = loadImage("nature.jpg");
let clr = natureImg.get(mouseX, mouseY);
fill(clr);
```

Reference: [get()](https://p5js.org/reference/#/p5.Image/get)

5. Using noise texture as filter

```javascript
push();
blendMode(MULTIPY);
image(noiseImg, 0, 0, width, height);
pop();
```

Reference: [blendMode(mode)](https://p5js.org/reference/#/p5/blendMode)

## Image sources

Base Image
![](https://i.imgur.com/h2WBIRn.jpg)

Image(as filter)
![](https://i.imgur.com/TSZLGjY.jpg)

## Reference

[p5.js](https://p5js.org/)
