function DoublePendulum(x, y) {
    this.origin = new Vector(x, y);
    this.loc1 = new Vector();
    this.loc2 = new Vector();
    this.r1 = 200;
    this.r2 = 200;
    this.m1 = 40;
    this.m2 = 40;
    this.t1 = PI / 2;
    this.t2 = PI / 3;
    this.o1 = 0;
    this.o2 = 0;
    this.a1 = 0;
    this.a2 = 0;
    this.g = 1;

    this.move = function() {
        let one = -this.g * (2 * this.m1 + this.m2) * sin(this.t1);
        let two = -this.m2 * this.g * sin(this.t1 - 2 * this.t2);
        let three = -2 * sin(this.t1 - this.t2) * this.m2;
        let four = this.o2 * this.o2 + this.o1 * this.o1 * this.r1 * cos(this.t1 - this.t2);
        let five = this.r1 * (2 * this.m1 + this.m2 - this.m2 * cos(2 * this.t1 - 2 * this.t2));
        this.a1 = (one + two + three * four) / five;

        let six = 2 * sin(this.t1 - this.t2);
        let seven = (this.o1 * this.o2 * this.r1 * (this.m1 + this.m2));
        let eight = this.g * (this.m1 + this.m2) * cos(this.t1);
        let nine = this.o2 * this.o2 * this.r2 * this.m2 * cos(this.t1 - this.t2);
        let ten = this.r2 * (2 * this.m1 + this.m2 - this.m2 * cos(2 * this.t1 - 2 * this.t2));
        this.a2 = (six * (seven + eight + nine)) / ten;
        print(this.a2);
    };

    this.update = function() {
        this.o1 += this.a1;
        this.o2 += this.a2;
        this.t1 += this.o1;
        this.t2 += this.o2;
        this.loc1.set(this.r1 * sin(this.t1), this.r1 * cos(this.t1));
        this.loc1.add(this.origin);
        this.loc2.set(this.r2 * sin(this.t2), this.r2 * cos(this.t2));
        this.loc2.add(this.loc1);
    };

    this.display = function() {
        stroke(0);
        strokeWeight(5);
        fill(255);
        line(this.origin.x, this.origin.y, this.loc1.x, this.loc1.y);
        line(this.loc2.x, this.loc2.y, this.loc1.x, this.loc1.y);
        ellipse(this.loc1.x, this.loc1.y, this.m1, this.m1);
        ellipse(this.loc2.x, this.loc2.y, this.m2, this.m2);
    };
    this.go = function() {
        this.move();
        this.update();
        this.display();
    };
}
