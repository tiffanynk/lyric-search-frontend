import React, { Component } from 'react';

class SearchForm extends Component {

    state = {
        results: []
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getSongs(event.target.value)
    }

    render(){
        return(
            <form className='search-form' onSubmit={this.handleSubmit}>
                <label>Search</label>
                <input 
                    name='search-term' 
                    placeholder='Enter Artist Name / Song Title'
                    // onChange={}
                    />
                <input type='submit'/>
            </form>
        )
    }
}

export default SearchForm;