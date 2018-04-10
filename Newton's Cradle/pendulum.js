//Mack Freitag
//Pendulum class

function Pendulum(x, y) {
    this.loc = new Vector(); // location of the bob
    this.origin = new Vector(x, y); //location of the center of the pendulum
    this.radius = 200; // length of string for the pendulum
    this.theta = 0; // angle of the swing
    this.aVel = 0.0; // angluar velocity of the bob
    this.aAcel = 0.0; // angluar acceleration of the bob
    this.bobMass = 196 * PI; // mass of the bob
    this.bobDiam = ((sqrt(this.bobMass / PI)) * 2); // diameter of the bob
    this.dragging = false; // boolean for mouse interaction

    this.forces = function(f) {
        this.aAcel += f; // adding forces to the acceleration
    };
    this.move = function() {
        this.forces((-gravityConstant / this.radius) * sin(this.theta)); // function for calcuating the angular acceleration
    };
    this.update = function() {
        if (!this.dragging) {
            this.aVel += this.aAcel;
            this.aVel *= dragConstant; // movement of the bob
            this.theta += this.aVel;
            this.aAcel = 0;
        }
    };
    this.display = function() {
        this.loc.set(this.radius * sin(this.theta), this.radius * cos(this.theta)); // turning the angular location into cartician location
        this.loc.add(this.origin);
        stroke(0);
        strokeWeight(5);
        line(this.origin.x, this.origin.y, this.loc.x, this.loc.y);
        fill(150);
        stroke(150);
        strokeWeight(3);
        if (this.dragging)// color change for mouse interaction
        fill(255, 170, 0),
        stroke(255, 170, 0);
        ellipse(this.loc.x, this.loc.y, this.bobDiam, this.bobDiam);
    };

    this.intersecting = function(obj) {
        // does the collision for the objects
        var distance = this.loc.distanceTo(obj.loc); // distance between the two bobs

        if (distance <= this.bobDiam / 2 + obj.bobDiam / 2) {
            collision(this, obj);
        }
    };
    this.resetVel = function(tempVel) {
        // resets the velocity
        this.aVel = tempVel;
    };

    this.clicked = function(mx, my) {
        // test if you are touching the bob
        var d = dist(mx, my, this.loc.x, this.loc.y);
        if (d < this.bobDiam / 2) {
            this.dragging = true;
        }
    };
    this.stopDragging = function() {
        // sets the acceleration & velocity to 0 for when you let go of the ball
        if (this.dragging) {
            this.aVel = 0;
            this.aAcel = 0;
            this.dragging = false;
        }
    };
    this.drag = function() {
        // sets the angle to the ance you drag it to
        if (this.dragging) {
            var diff = Vector.sub(this.origin, new Vector(mouseX, mouseY));
            this.theta = atan2(-1 * diff.y, diff.x) - PI / 2;
            this.theta= constrain(this.theta,-PI/5,PI/5); //constrains the angle to be more accurate to reality
        }
    };

    this.go = function() {
        this.move(); // simplifies the commands
        this.update();
        this.drag();
        this.display();
    };
}

function collision(one, two) {
    // calcuates the values using conservation of momentum and conservation of enery
    var v1 = ((one.bobMass - two.bobMass) * one.aVel + 2 * two.bobMass * two.aVel) / (one.bobMass + two.bobMass);
    var v2 = ((two.bobMass - one.bobMass) * two.aVel + 2 * one.bobMass * one.aVel) / (one.bobMass + two.bobMass);

    one.resetVel(v1);
    two.resetVel(v2);
}
