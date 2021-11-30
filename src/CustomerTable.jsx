import TableHead from "./TableHead.jsx";
import React from 'react';

const CustomerTable = () => {
   
    return (
        <>
            <table className="table table-striped">
                <TableHead/>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>James</td>
                        <td>james@gmail.com</td>
                        <td id="Jamesdemo">30000</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Swati</td>
                        <td>swati@gmail.com</td>
                        <td id="Swatidemo">20000</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Kajal</td>
                        <td>kajal@gmail.com</td>
                        <td id="Kajaldemo">10000</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Rahul</td>
                        <td>rahul@gmail.com</td>
                        <td id="Rahuldemo">30000</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Anish</td>
                        <td>anish@gmail.com</td>
                        <td id="Anishdemo">15000</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Kavya</td>
                        <td>kavya@gmail.com</td>
                        <td id="Kavyademo">20000</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Henry</td>
                        <td>henry@gmail.com</td>
                        <td id="Henrydemo">22000</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Jeetu</td>
                        <td>jeetu@gmail.com</td>
                        <td id="Jeetudemo">50000</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>Ethan</td>
                        <td>ethan@gmail.com</td>
                        <td id="Ethandemo">12000</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>Lucas</td>
                        <td>lucas@gmail.com</td>
                        <td id="Lucasdemo">30000</td>
                        
                    </tr>
                    
                </tbody>
            </table>

        </>
    )
}

export default CustomerTable;
