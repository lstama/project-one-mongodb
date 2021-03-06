import React, { Component } from 'react';
import UtilService from './utils/util';
const Util = new UtilService();

class ShowSearchData extends Component {
    render() {
        if(this.props.data.length){
            return(
                this.props.data.map((item) => {
                return (
                    <tr key={item._id}>
                        <td>{item.fakultas.toUpperCase()}</td>
                        <td>{item.title}</td>
                        <td className="text-center">{Util.iconGenerate(item.file_name.split('.')[item.title.split('.').length])}</td>
                        <td className="text-center"><a href={item.url}><img src={"/assets/images/download.png"} style={{width:"20px", height:"20px"}} alt="download-button"/></a></td>
                    </tr>)
                })
            )
        }
        else{
            return (<tr><td colSpan="4" className="text-center">Not Found!</td></tr>)
        }
    }
}

export default ShowSearchData;