import React from 'react';
import axios from 'axios';

class Users extends React.Component {
    state = {
        users: [],
    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/players')
        .then(res => this.setState({users: res.data}))
    }
    render() {
        return (
            <div>
                <p>Users</p>
                {this.state.users.map(user => (
                    <div>
                        <h2>{user.name}</h2>
                        <h3>{user.country}</h3>
                    </div>
                ))}
                
            </div>
        )
    }
}
export default Users;