var colorRect;

class Ground {
    constructor(x, y, width, height, color) {
       var options = {
        isStatic:true
        
        
       }
       this.x = x
       this.y = y
       this.width = width
       this.height = height
       this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options)
       
       World.add(world, this.body)
    }
     
    display() {
        
        rect(this.body.position.x, this.body.position.y, this.width, this.height, this.fill)
        
        
    }


    
}