<template>
    <div class="head">
        <h3 class="t">ONLINE CALCULATOR</h3>
    </div>
    <div class="full" id="vue-div">
    <div class="calc">
        <button class="but" v-on:click="n1(1)">1</button>
        <button class="but" v-on:click="n1(2)">2</button>
        <button class="but" v-on:click="n1(3)">3</button>
        <button class="but" v-on:click="n1(4)">4</button>
        <button class="but" v-on:click="n1(5)">5</button>
        <button class="but" v-on:click="n1(6)">6</button>
        <button class="but" v-on:click="n1(7)">7</button>
        <button class="but" v-on:click="n1(8)">8</button>
        <button class="but" v-on:click="n1(9)">9</button>
        <button class="but" v-on:click="n1(0)">0</button>
        <button class="but" v-on:click="dot">.</button>
        <button class="but" v-on:click="back">BACK</button>
    </div>
    <div class="func">
        <button class="but" v-on:click="add">+</button>
        <button class="but" v-on:click="subtract">-</button>
        <button class="but" v-on:click="multiply">*</button>
        <button class="but" v-on:click="divide">/</button>
        <button class="but" v-on:click="power">^</button>
        <button class="but" v-on:click="modulus">%</button>
        <button class="but" v-on:click="log">log</button>
        <button class="but" v-on:click="min">min</button>
        <button class="but" v-on:click="max">max</button>
        <button class="but" v-on:click="root">Nth root</button>
        <button class="but" v-on:click="xor">XOR</button>
        <button class="but" v-on:click="xand">XAND</button>
    </div>
    <div class="res">
        <input   class="inp" id="in1" v-model="IN1" v-on:click="i1">
        <label class="la" >  Input 1</label>
        <input class="inp" id="in2" v-model="IN2" v-on:click="i2">
        <label class="la">  Input 2</label>
        <input  class="inp" id="ress" v-bind:value="RES">
        <label class="la"> Result</label>   
    </div>
    </div>

</template>

<script>
 

export default {
    data(){
        return{
        IN1:"",
        IN2:"",
        RES:"",
        a:0,
        b:0
        }
    },
    methods:{
        add:function(){
            if(this.IN1!=""&&this.IN2!="")
             this.RES= parseFloat(this.IN1)+parseFloat(this.IN2)
        },
        subtract:function(){
            if(this.IN1!=""&&this.IN2!="")
            this.RES= parseFloat(this.IN1)-parseFloat(this.IN2)
       },
       multiply:function(){
        if(this.IN1!=""&&this.IN2!="")
        this.RES= parseFloat(this.IN1)*parseFloat(this.IN2)
   },
   divide:function(){
    if(this.IN1!=""&&this.IN2!="")
    this.RES= parseFloat(this.IN1)/parseFloat(this.IN2)
},
power:function(){
    if(this.IN1!=""&&this.IN2!="")
    this.RES= Math.pow(parseFloat(this.IN1),parseFloat(this.IN2))
},
modulus:function(){
    if(this.IN1!=""&&this.IN2!="")
    this.RES= parseFloat(this.IN1)%parseFloat(this.IN2)
},
log:function(){
    if(this.IN1!=""&&this.IN2!="")
    this.RES= Math.log(parseFloat(this.IN1))/Math.log(parseFloat(this.IN2))
},
xand:function(){
    if(this.IN1!=""&&this.IN2!="")
    this.RES= parseFloat(this.IN1)&parseFloat(this.IN2)
},
min:function(){
    if(this.IN1!=""&&this.IN2!="")
    this.RES= Math.min(parseFloat(this.IN1),parseFloat(this.IN2))
},
max:function(){
    if(this.IN1!=""&&this.IN2!="")
    this.RES=Math.max(parseFloat(this.IN1),parseFloat(this.IN2))
},
root:function(){
    if(this.IN1!=""&&this.IN2!="")
    this.RES= Math.pow(parseFloat(this.IN1),1/parseFloat(this.IN2))
},
xor:function(){
     if(this.IN1!=""&&this.IN2!="")
    this.RES= parseFloat(this.IN1)^parseFloat(this.IN2)
},
back:function(){
    if(this.a==1)
    this.IN1=this.IN1.substring(0,this.IN1.length-1);
    if(this.b==1)
    this.IN2=this.IN2.substring(0,this.IN2.length-1);
   
},
i1:function(){
    this.a=1;
    this.b=0;
},
i2:function(){
    this.a=0;
    this.b=1;
},
n1:function(str){
    if(this.a==1)
    this.IN1=String(this.IN1)+str;
    if(this.b==1)
    this.IN2=String(this.IN2)+str;

},
dot:function(){
    if(this.a==1)
    this.IN1=String(this.IN1)+'.';
    if(this.b==1)
    this.IN2=String(this.IN2)+'.';

}
 
    }
  
}
</script>

<style>
 body{
    height: 100%;
    width: 100%;
    overflow: hidden;
     justify-content: center;
    background-image: radial-gradient(midnightblue, cyan);
     font-family: 'Architects Daughter', cursive;
}
.t{
    text-align: center;
    justify-content: center;
    width: 40vw;
    align-items: center;
    padding-top: 8px;
    color: white;
    font-size: xx-large;
    text-shadow: 
        0.1em 0 0 rgba(255,0,0),
        -0.1em -0.05em 0 rgba(0,255,0),
        0.05em 0.05em 0 rgba(0,0,255);
        animation: t 450ms infinite;

}
@keyframes t{
    0%{
        text-shadow: 
        0.1em 0 0 rgba(255,0,0),
        -0.1em -0.05em 0 rgba(0,255,0),
        0.05em 0.05em 0 rgba(0,0,255);

    }
    25%{
        text-shadow: 
        -0.1em 0.05em 0 rgba(255,0,0),
        -0.1em 0.05em 0 rgba(0,255,0),
        0.05em -0.05em 0 rgba(0,0,255);

    }
    50%{
        text-shadow: 
        0.1em -0.05em 0 rgba(255,0,0),
        0.1em -0.05em 0 rgba(0,255,0),
        -0.05em 0.05em 0 rgba(0,0,255);

    }
    75%{
        text-shadow: 
        -0.05em -0.05em 0 rgba(255,0,0),
        0.05em 0.05em 0 rgba(0,255,0),
        0.1em -0.05em 0 rgba(0,0,255);

    }
    100%{
        text-shadow: 
        -0.1em -0.05em 0 rgba(255,0,0),
        0.1em 0.05em 0 rgba(0,255,0),
        -0.05em -0.05em 0 rgba(0,0,255);

    }
}
.head{
    
    height: 4vh;
    width: 50vw;
    display: flex;
    align-items: center;
    padding-left: 170px;    
    padding-bottom: 9px;
    background-image:radial-gradient(darkblue,cyan);
    margin-left: 240px;
    border-radius: 20px;
     
}
.head:hover{
    transform: scale(1.01);
    box-shadow: 2px 2px 30px yellow;
    transition-duration: 0.65s;
}
.calc{
    height: 55%;
    width: 25%;
    background-image: radial-gradient(dodgerblue);
    margin-top: 50px;
    margin-left: 75px;
    border-radius: 12px;
   padding-left: 10px;
   padding-top: 10px;
   padding-bottom: 10px;
   padding-right: 5px;
   display: flexbox;   
   flex-wrap: wrap;
}
.calc:hover{
    box-shadow: 2px 2px 30px yellow;
    transition-duration: 0.65s;
    transform: scale(1.005);
}
.but{
    height: 10vh;
    width: 8vw;
    background-color: lightblue;
     display: flexbox;
     font-size: x-large;
     font-style: oblique;
     border-radius: 13px;
     flex-wrap: wrap;
     color: red;
     animation: glitch-skew 1s infinite linear alternate-reverse;
     position: relative;
}
.func{
    height: 55%;
    width: 25%;
    background-image: radial-gradient(dodgerblue);
    margin-top: 50px;
    margin-left: 80px;
    border-radius: 13px;
   padding-left: 10px;
   padding-top: 10px;
   padding-bottom: 10px;
   padding-right: 5px;
   display: flexbox;   
   flex-wrap: wrap;
   
}
.func:hover{
    box-shadow: 2px 2px 30px yellow;
    transition-duration: 0.65s;
    transform: scale(1.005);
}
.full{
    height: 58%;
    display: flex;
    animation: tr-bag 4s linear infinite;
}
.res{
    height: 55%;
    width: 25%;
    background-image: radial-gradient(dodgerblue);
    margin-top: 50px;
    margin-left: 50px;
    border-radius: 12px;
   padding-left: 10px;
   padding-top: 10px;
   padding-bottom: 10px;
   padding-right: 5px;
   display: flexbox;   
   flex-wrap: wrap;
}
.res:hover{
    box-shadow: 2px 2px 30px yellow;
    transition-duration: 0.65s;
    transform: scale(1.005);
}
.inp{
height: 30px;
width: 200px;
margin-right: 20px;
margin-top: 10px;
margin-bottom: 10px;
justify-content: center;
text-align: center;
font-size: larger;
margin-left: 10px;
border-radius: 10px;
background-color: lightblue;
color: crimson;

}
.la{
    font-size: xx-large;
    font-style: oblique;
    color: orangered;


}

  
</style>
