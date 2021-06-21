import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeServices'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">                 
                            <label> Employee First Name: </label>
                            <div> <h5>{ this.state.employee.firstName }</h5></div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name: </label>
                            <div><h5>{ this.state.employee.lastName }</h5> </div>
                        </div>
                        <div className = "row">
                            <label> Email ID: </label>
                            <div> <h5>{ this.state.employee.emailId }</h5></div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
