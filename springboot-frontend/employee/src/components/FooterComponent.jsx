import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-3"><span className="text-muted">Contact More:8240297569</span></div>
                            <div className="col-5"><span className="text-muted">All Rights Reserved 2020 @SwarnavProject</span></div>
                            <div className="col-4"><span className="text-muted">Email:swarnavmondal76@gmail.com</span></div>
                        </div>
                    </div>
                    
                </footer>
            </div>
        )
    }
}
export default FooterComponent
