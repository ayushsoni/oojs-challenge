/*
    shapes.js
    This is where your code goes

    Write the code to create rectangle and circle classes that extend the
    Shape class defined in shape.js. Then create a couple of other subclasses that
    render different sorts of shapes using the HTML <canvas> functions.
    http://www.w3schools.com/tags/ref_canvas.asp

    You can use either the classical or the prototypal style to create your subclasses

    After you've written the code for the sublcasses, call either registerPrototypalShape()
    or registerClassicalShape() to register your new shapes with the application. See the
    app.js file for info on these functions.
 */

function Rectangle(left, top, width, height, stylesMap) {
   
    //shape's constructor
    Shape.call(this, left, top, width, height, stylesMap);

    //adjust Rectangle()'s functionality
    this.renderShape = function(canvasCtx) {
        canvasCtx.fillRect(this.left, this.top, this.width, this.height);
    }
}//creating my Rectangle() class and function

//implementing rectangle's prototypal class
Rectangle.prototype = new Shape();


function Circle(left, top, width, height, stylesMap) {
    //draws my circle
    Shape.call(this, left, top, width, height, stylesMap);

    //adjusts Circle()
    this.renderShape = function(canvasCtx) {
        canvasCtx.beginPath();

        //my variables for the circle
        var x = this.left + (width / 2);
        var y = this.top + (height / 2);
        var radius = this.width / 2;
        //draws the circle's properties
        canvasCtx.arc(x, y, radius, 0, 2*Math.PI);
        //fill in the circle
        canvasCtx.fill();
    }
}// Circle() class extends shape and overrides the renderShape()

//implementing circle's prototypal class
Circle.prototype = new Shape();

function Triangle(left, top, width, height, stylesMap) {

    Shape.call(this, left, top, 50, 50, {
        fillStyle: "green",
        stroke: stylesMap.stroke
    });

    this.renderShape = function(canvasCtx) {
        canvasCtx.beginPath();
        canvasCtx.moveTo(this.left, this.top);
        canvasCtx.lineTo(this.left - 25, this.top + 25);
        canvasCtx.lineTo(this.left + 25, this.top + 25);
        canvasCtx.lineTo(this.left, this.top);
        canvasCtx.fill();
    }
}//function Triangle()

//implementing triangle's prototypal class
Triangle.prototype = new Shape();

function Pentagon(left, top, width, height, stylesMap) {

    Shape.call(this, left, top, 50, 50, {
        fillStyle: "blue",
        stroke: stylesMap.stroke
    });

    this.renderShape = function(canvasCtx) {
        canvasCtx.beginPath();
        canvasCtx.moveTo(this.left, this.top);
        canvasCtx.lineTo(this.left - 25, this.top - 25);
        canvasCtx.lineTo(this.left - 25, this.top - 50);
        canvasCtx.lineTo(this.left + 25, this.top - 50);
        canvasCtx.lineTo(this.left + 25, this.top - 25);
        canvasCtx.fill();
    }
}//function Pentagon()

//implementing pentagon's prototypal class
Pentagon.prototype = new Shape();

//register all these shapes for user to play with
registerClassicalShape('Circle', Circle);
registerClassicalShape('Rectangle', Rectangle);
registerClassicalShape('Triangle', Triangle);
registerClassicalShape('Pentagon', Pentagon);
