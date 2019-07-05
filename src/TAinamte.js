import React from 'react';
import ReactDOM from 'react-dom';
import {Animator} from './tAnimateUtil';
import "./base.styl";

export class TAinamte extends React.Component{
    constructor(props){
        super(props);
        this.state={
            left: 0
        };
        this.anmimate = ()=>{};
    }

    componentDidMount(){
    this.anmimate = new Animator({
            targetVal:100,
            curVal:100,
            step:0.6,
            point:2,
            easeType:'Quad-easeInOut',
            update:(val)=>{
                console.log(val);
                this.move.style.left = val + "px";
            },
            complete:function(){
                console.log('complete...');
            }
        });
    }

    step=()=>{
        this.anmimate.step();
    }

    render(){
        const {left} = this.state;
        return (
            <div className="move-wrapper">
                <button onClick={this.step}>开始</button>
                <div className="move" ref={(el)=>{this.move = el}}></div>
            </div>
        );
    }
}