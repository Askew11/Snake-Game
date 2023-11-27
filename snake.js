
class Snake {
    constructor() { 
        this.len = 1;
        this.body = [];
        this.body[0] = createVector(floor(w/2),floor(h/2));
        this.xspeed = 1;
        this.yspeed = 0;

    }
    returnXSpeed(){
        return this.xspeed;
    }
    returnYSpeed(){
        return this.yspeed;
    }
    update() {
        let head = this.body[this.body.length-1].copy();
        this.body.shift();
        head.x += this.xspeed;
        head.y += this.yspeed;
        this.body.push(head);
    }

    show(){
        fill(0,0,255);
        for(let i = 0; i < this.body.length; i++){
            rect(this.body[i].x,this.body[i].y,1,1);
        }
    }

    dir(x,y) {
        this.xspeed = x;
        this.yspeed = y;
    }
    
    eat(food){
        let x = this.body[this.body.length-1].x;
        let y = this.body[this.body.length-1].y;

        if(x == food.x && y == food.y){
            this.grow();
            return true;
        }
        return false;
    }

    grow(){
        this.len++;
        let head = this.body[this.body.length-1].copy();
        this.body.push(head)
    }

    foodAtCurrentLocation(x,y){
        for(let i = 0; i < this.body.length; i++){
            if(x == this.body[i].x && y == this.body[i].y){
                return true;
            }
        }
        return false;
    }

    death(){
        let head = this.body[this.body.length-1];

        if(head.x > w-1 || head.x < 0 || head.y > h-1 || head.y < 0 || this.selfCollision(head.x,head.y)){
            return true;
        }

        return false;
    }

    selfCollision(x,y){
        for(let i = 0; i < this.body.length-1; i++){
            let part = this.body[i];
            if(x == part.x && y == part.y){
                return true;
            }
        }
        return false;
    }
}