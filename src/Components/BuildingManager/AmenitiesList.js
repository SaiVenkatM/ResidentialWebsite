import React, { Component } from 'react';

class AmenitiesList extends Component {

    render() {
        return (
            <>
                <div class="container">
                    <h2>Aminities List</h2>
                </div>
                <div class="div">
                    <button>Create &nbsp;<i class='fa fa-plus'></i></button>
                </div>
                <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Aminities Name</th>
                            <th>Manager Name</th>
                            <th>Email ID</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Pool1</td>
                            <td>John</td>
                            <td>john@gmail.com</td>
                            <td>+1(888)888-8888</td>
                            <td> &nbsp;<button><i class='fa fa-edit'></i></button>&nbsp;
                                <button><i class='fa fa-trash-o'></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>garden3</td>
                            <td>Jason</td>
                            <td>jason@gmail.com</td>
                            <td>+1(888)888-8888</td>
                            <td> &nbsp;<button><i class='fa fa-edit'></i></button>&nbsp;
                                <button><i class='fa fa-trash-o'></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>garden1</td>
                            <td>Jakson</td>
                            <td>jakson@gmail.com</td>
                            <td>+1(888)888-8888</td>
                            <td> &nbsp;<button><i class='fa fa-edit'></i></button>&nbsp;
                                <button><i class='fa fa-trash-o'></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>pool3</td>
                            <td>Jenny</td>
                            <td>jenny@gmail.com</td>
                            <td>+1(888)888-8888</td>
                            <td> &nbsp;<button><i class='fa fa-edit'></i></button>&nbsp;
                                <button><i class='fa fa-trash-o'></i></button>
                            </td>
                        </tr>
                    </table>
                </div>
            </>
        );
    }
}

export default AmenitiesList;