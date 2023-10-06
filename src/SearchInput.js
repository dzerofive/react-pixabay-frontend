import React from 'react';
import './SearchInput.css';

class SearchInput extends React.Component {
        state = { entry: '' }

        onFormSubmit = (event) => {
                event.preventDefault();
                this.props.onSearchSubmit(this.state.entry);
        }


        render() {
                return(
                <div className='search-input'>
                        <form onSubmit={this.onFormSubmit}>
                                <center><input 
                                        placeholder="Search images..."
                                        onChange={(event)=>this.setState({entry: event.target.value})}
                                        value={this.state.entry}
                                /></center>
                        </form>
                </div>
                )
        }
}

export default SearchInput;
