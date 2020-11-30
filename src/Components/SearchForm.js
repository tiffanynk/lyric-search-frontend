import React, { Component } from 'react';

class SearchForm extends Component {

    state = {
        results: [],
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getSongs(this.state.searchTerm)
    }

    render(){
        return(
            <form className='search-form' onSubmit={this.handleSubmit}>
                <label>Search</label>
                <input 
                    name='searchTerm' 
                    placeholder='Enter Artist Name / Song Title'
                    onChange={this.handleChange}
                    />
                <input type='submit'/>
            </form>
        )
    }
}

export default SearchForm;