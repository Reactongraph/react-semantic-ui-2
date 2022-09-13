import React,{useState} from 'react';
import '../App.css';
import { Menu } from 'semantic-ui-react';

const HeaderList=(props)=>{
        const [activeItem, setActiveItem]=useState(null)

    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
    }
        return (
            <Menu>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='peoples'
                    active={activeItem === 'peoples'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='places'
                    active={activeItem === 'places'}
                    onClick={handleItemClick}
                />
            </Menu>
        )
    }

export default HeaderList
