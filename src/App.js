import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component{
    state = { advice: '' };

    componentDidMount() {
       this.fetchAdvice();
    }
    //Method is a fn which belongs to class
    // fetchAdvice = () => {
    //     axios.get('https://api.adviceslip.com/advice')
    //     .then((response)=> {
    //         const { advice } = response.data.slip;
            
    //         this.setState({advice: advice});
    //     })
    //     .catch((error)=> {
    //         console.log(error);
    //     }); 
    // }
    

    fetchAdvice = () =>{
        const id = Math.floor(Math.random()*100)-1
        axios.get(`https://api.adviceslip.com/advice/${id}`)
        .then((response)=>{
            const data = JSON.parse(response.data+"}")
            const { advice } = data.slip;

            this.setState({advice: advice});
        })
        .catch((error)=> {
            console.log(error);
        });
    }

    render() {
        const { advice } = this.state;
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;