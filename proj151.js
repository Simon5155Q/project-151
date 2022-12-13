AFRAME.registerComponent("carrotation",{
    schema:{
        rotationY: {type:"number", default:0}
    },
    init: function(){
        window.addEventListener("keydown", (item)=>{
            if(item.key === "j"){
                this.data.rotationY += 0.5;
            }
            if(item.key === "l"){
                this.data.rotationY -= 0.5;
            }
        })
    },
    tick: function(){
        var rotation = this.el.getAttribute("rotation");
        rotation.y = this.data.rotationY;
        this.el.setAttribute("rotation",{x:rotation.x, y:rotation.y, z:rotation.z});
    }
})

AFRAME.registerComponent("cam",{
    schema:{
        posY: {type:"number", default:0}
    },
    init: function(){
        window.addEventListener("keydown", (item)=>{
            if(item.key === "i"){
                this.data.posY += 0.08;
            }
            if(item.key === "k"){
                this.data.posY -= 0.08;
            }
        })
    },
    tick: function(){
        var pos = this.el.getAttribute("position");
        pos.y = this.data.posY;
        this.el.setAttribute("position",{x:pos.x, y:pos.y, z:pos.z});
    }
})