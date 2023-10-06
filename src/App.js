import React from 'react';
import Axios from 'axios';

import SearchInput from './SearchInput';
import ImageList from './ImageList';

import './General.css';

// ----------------------------------------- //
const apiKey = 'YOUR API KEY HERE'; 
// ----------------------------------------- //

class App extends React.Component {

        state = { images: [] }

        onSearchSubmit = async (entry)=>{
                const response = await Axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${entry}&image_type=photo`);
                this.setState({images: response.data.hits});
        }

        render() {
                return(
                        <div>
                                <h1>Pixabay Search Frontend</h1>
                                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                                <div className="result-count">Found {this.state.images.length} images</div>
                                <ImageList images={this.state.images} /> 
                        </div>
                );
        }
};

export default App;
