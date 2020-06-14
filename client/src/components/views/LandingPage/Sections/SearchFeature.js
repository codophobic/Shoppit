import React,{useState} from 'react'
import {Input} from 'antd';

const {Search} = Input
function SearchFeature(props) {

    const [SearchItem, setSearchItem] = useState("");
    const onChangeSearch=(event)=>{
        setSearchItem(event.target.value);
        props.refreshFunction(event.target.value);
    }
    return (
        <div>
            <Search
             value={SearchItem}
             onChange={onChangeSearch}
             placeholder='Seach by Typing..'/>
        </div>
    )
}

export default SearchFeature
