import React, { Component } from 'react'

import axios from "axios"

import classes from "./GetDataFromFlask.module.css"

import Loader from "../UI/Loader"


export default class GetDataFromFlask extends Component {


    constructor() {
        super()

        this.state = {
            data: [],
            loading: true 
        }

        this.inputValueName = React.createRef();
        this.inputValueDescription = React.createRef();
        this.inputValuePrice = React.createRef();
    }


    

    componentDidMount() {
        axios.get("http://localhost:5000/product")
        .then(res => {
            const product= res.data;
            this.setState({
                data: product
            })
        })


        this.setState({
            loading: false
        })
      }


    
    postNewDate = async () => {
        
        const name = this.inputValueName.current.value 
        const description = this.inputValueDescription.current.value 
        const price = this.inputValuePrice.current.value 
        await axios.post("http://localhost:5000/product", {
            name,
            description,
            price,
            qty: null
        })
        
        this.getDateFast()
    }


    getDateFast = async () => {
        axios.get("http://localhost:5000/product")
        .then(res => {
            const product= res.data;
            this.setState({
                data: product
            })
            console.log(  this.state )
        })
    }





    render() {

        const showData = this.state.data.map( (item, index ) => {
            return (
                <div className = { classes.receivedData } key = { item + index }>
                    <h1>{ item.name }</h1>
                    <p> { item.description } </p>
                    <p> { item.price } </p>
                </div>
                
            )
        })



        const fakeDate = this.state.data ? showData : <h1>No data</h1>


        const page = (
            <React.Fragment>
                <h1>Add new person</h1>

                    <div className = { classes.dataWrapper }>
                        {  fakeDate }
                    </div>
                    
    
                
                    <div className = { classes.inputs}>
                        <input placeholder = "name" ref = { this.inputValueName } />
                        <input placeholder = "description" ref = { this.inputValueDescription } />
                        <input placeholder = "price" ref = { this.inputValuePrice } />

                        <input type = "submit" onClick = { this.postNewDate } value = "Add" /> 
                        
                    </div> 
            </React.Fragment>
            
        )


        

        return (
            
            <div className  = { classes.GetDataFromFlask }>

                { this.state.loading ? <Loader />   :     page    }

            </div>  

               
        )
    }
}
