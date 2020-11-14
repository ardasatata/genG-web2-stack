import React from 'react';
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";

// import axios library
import axios from 'axios';

// More on Axios :
// https://blog.logrocket.com/axios-or-fetch-api/

export const BoxLogo = ({color, size, containerStyle}) => {
    return (
        <div className={containerStyle}>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.27 6.96002L12 12.01L20.73 6.96002" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22.08V12" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}

export const LocationLogo = ({color, size, containerStyle}) => {
    return (
        <div className={containerStyle}>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

    )
}

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: null
        };
    }

    componentDidMount() {
        // setTimeout(this.loadDataWithAxios(),
        //     2000
        // )
        this.loadDataWithAxios()
    }

    loadData(){
        // Using fetch API
        fetch("https://api.github.com/users/ardasatata")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    loadDataWithAxios(){
        // Using Axios

        // get parameter value 'react-router'
        const username = this.props.match.params.username

        axios.get(`https://api.github.com/users/${username}`)
            .then(res => {
                console.log(res)
                const data = res.data;
                this.setState({
                    isLoaded: true,
                    data: data
                });
            }).catch(err => {
                this.setState({
                    isLoaded: true,
                    error : err
                });
        })
        // Post example ?
    }

    render() {
        const {error, isLoaded, data} = this.state;
        if (error) {
            return (
                <div className="flex flex-col h-full justify-center items-center">
                    <img className="h-64 mb-4" src={"https://media1.tenor.com/images/a828888852e708d9afaaad06c7f9513f/tenor.gif"}/>
                    <div className="text-3xl font-bold">Woops 404!</div>
                </div>
            )
        } else if (!isLoaded) {
            return (
                <div className="flex h-full justify-center items-center">
                    <img className="h-64" src={"https://media2.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif"}/>
                </div>
            )
        } else {
            return (
                <div class="flex h-full justify-center items-center bg-maxYellowRed font-sans" >
                    <div class="flex flex-col md:flex-row text-gray-800">
                        <div class="mb-4 md:mb-0 mr-0 md:mr-8 transform hover:-translate-y-1 hover:scale-105 transition duration-700 ease-in-out">
                            <img className="h-64 w-64 rounded-full object-cover mb-4" src={data.avatar_url}/>
                        </div>
                        <div>
                            <div className="mb-4 hover:text-lightSeaGreen transition duration-500 ease-in-out">
                                <div className="text-3xl font-bold">{data.name}</div>
                                <div className="text-base text-lightCoral">{data.login}</div>
                            </div>
                            <div className="w-64 mb-4 text-sm hover:text-lightSeaGreen transition duration-500 ease-in-out">
                                <p>
                                    {data.bio}
                                </p>
                            </div>
                            <div className="text-CGBlue">
                                { data.company !== null ?
                                    (
                                        <div className="flex flex-row mb-2">
                                            <BoxLogo color={'#227c9d'} size={24} containerStyle="mr-2"/>
                                            <div>
                                                {data.company}
                                            </div>
                                        </div>
                                    ) : null }

                                {data.location !== null ?
                                    (
                                        <div className="flex flex-row">
                                            <LocationLogo color={'#227c9d'} size={24} containerStyle="mr-2"/>
                                            <div>
                                                {data.location}
                                            </div>
                                        </div>
                                    ) : null}
                            </div>
                        </div>

                    </div>
                </div>
            );
        }
    }
}


export default Profile;
