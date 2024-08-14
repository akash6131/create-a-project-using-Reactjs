import React from 'react';

function Content(){
    return(
        <div>
            <div>
         <table>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>College</th>
                <th>Dept</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Akash S M</td>
                <td>Hindusthan College of Engineering and Technology</td>
                <td>ECE</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Guhan S</td>
                <td>Hindusthan College of Engineering and Technology</td>
                <td>ECE</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Barath raj K</td>
                <td>Hindusthan College of Engineering and Technology</td>
                <td>ECE</td>
            </tr>
         </table>
        </div>
        <div id="user">
            <form>
        <div id="name">
          <label>User Name :</label>
          <input></input>
          </div>
          <div id="name">
          <label>Password :</label>
          <input></input>
        </div>
          <button>Submit</button>
        </form>
        </div>
        </div>

    )
}

export default Content;