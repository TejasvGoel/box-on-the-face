import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLink from './Components/ImageLink/ImageLink';
import DisplayImage from './Components/DisplayImage/DisplayImage';
import SignIn from './Components/SignIn/SignIn';
import Rank from './Components/Rank/Rank';
import './App.css'
import Particles from 'react-particles-js';
import Register from './Components/Register/Register';
import Faces from './Components/Faces/Faces';
import {connect} from 'react-redux';
import {setInputField} from './actions';

const mapStateToProps = state =>{
    return{
        inputText:state.inputText
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onEnteringUrl: (event) => dispatch(setInputField(event.target.value))
    }
    

}


const particleOption = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 300
            }
        }

    }
}

const initialState = {
    input: '',
    imageUrl: '',
    boxes: [],
    route: 'signin',
    isSignedIn: false,
    user: {
        id: '',
        name: '',
        email: '',
        entery: 0,
        joined: ''
    }
}

class App extends Component {

    constructor() {
        super();
        this.state = initialState;
    }

  
    loadUser = (data) => {
        this.setState(
            {
                user: {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    entery: data.entery,
                    joined: data.joined

                }
            })
    }



    boxLoacation = (data) => {
        
      
       
        const image = document.getElementById("inputImage");
        const width = Number(image.width);
        const height = Number(image.height);
        return  data.outputs[0].data.regions.map(face => {
            const clarifaiFace = face.region_info.bounding_box;
            return {
              leftCol: clarifaiFace.left_col * width,
              topRow: clarifaiFace.top_row * height,
              rightCol: width - (clarifaiFace.right_col * width),
              bottomRow: height - (clarifaiFace.bottom_row * height)
            }
   
    

    });
}

   displayBox = (boxes) => {
        console.log( "boxes", boxes);
        this.setState({boxes: boxes});
        console.log("box", this.state.box)
    }
    


    onButtonSubmit = () => {
        this.setState({ imageUrl: this.props.inputText })
        fetch('http://localhost:3000/images', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input : this.props.inputText
               
            })
        }) 
            .then(response => response.json())
            .then(response => {
                if (response) {
                    fetch('http://localhost:3000/images', {
                        method: 'put',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: this.state.user.id
                        })
                    })
                        .then(response => response.json())
                        .then(count => {
                            this.setState(Object.assign(this.state.user, { entery: count }))
                        })
                        .catch(console.log);
                }
               
                console.log(response);
               this.displayBox( this.boxLoacation(response));
                   

            }).catch(err => console.log(err));

    }

    onRouteChange = (route) => {
        if (route === 'home') {
            this.setState({ isSignedIn: true })
        } else if (route === 'signout') {
            this.setState(initialState)
        }
        this.setState({ route: route })
    }

   

    render() {
        const { isSignedIn, route, imageUrl, boxes } = this.state;
        const { onEnteringUrl } = this.props;

        return (
            <div>
                <Particles className='particles'
                    params={particleOption}
                />
                <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />

                {route === 'home' ?
                    <div>
                        <Logo />
                        <Rank name={this.state.user.name} entery={this.state.user.entery} />
                        <ImageLink onInputChange={onEnteringUrl}
                            onButtonSubmit={this.onButtonSubmit}
                        />
                        <Faces boxes={boxes}/>
                        <DisplayImage imageUrl={imageUrl} boxes={boxes} />
                        
                            

                        
                    </div>
                    : (
                        this.state.route === 'register' ?
                            <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> :
                            <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />

                    )

                }
            </div>
        );
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(App);