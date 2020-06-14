import React,{useState} from 'react';
import {Collapse,Radio} from 'antd';
const {Panel} = Collapse;




function RadioBox(props) {

    const renderRadioBox=()=>(
        props.list && props.list.map((el)=>(
            <Radio key={el._id} value={`${el._id}`}>{el.name}</Radio>
        ))
    );

    const handleChange=(event)=>{
        setValue(event.target.value);
        props.handleFilters(event.target.value);
    }
    const [Value, setValue] = useState(0);
    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel header='price' key='1'>
                    <Radio.Group onChange={handleChange} value={Value}>
                {renderRadioBox()}
                    </Radio.Group>
                    </Panel>
            </Collapse>
            
        </div>
    )
}

export default RadioBox
