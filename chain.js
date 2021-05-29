class Chain{

    constructor(bodyA, bodyB){

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 1,
            length: 50,
            
          }
        
          this.chain = Constraint.create(options);
          World.add(world, this.chain);

         

    }

    display(){
        text("new text", 50,50)
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        strokeWeight(2);
        line(posA.x, posA.y, posB.x, posB.y);

    }
}