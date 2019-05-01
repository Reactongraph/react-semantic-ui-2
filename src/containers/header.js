import React from 'react';
import '../App.css';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'

class HeaderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        // if (name === 'home') {
        // this.props.history.push(`/`)            
        // }
        // else this.props.history.push(`/${name}`)
    }

    render() {
        const { activeItem } = this.state
        return (
            <Menu>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='peoples'
                    active={activeItem === 'peoples'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='places'
                    active={activeItem === 'places'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}

export default withRouter(HeaderList)
