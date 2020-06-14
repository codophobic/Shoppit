import React,{useState} from 'react';
import {Collapse,Checkbox} from 'antd';
const {Panel} =Collapse;




function CheckBox(props) {

    const [Checked, setChecked] = useState([]);




    const renderCheckboxlists=()=>props.list && props.list.map((el,index)=>(
        <React.Fragment key={index}>
            <Checkbox onChange={()=>handleToggle(el._id)}
                 type='checkbox'
                 checked={Checked.indexOf(el._id)===-1? false: true}/>
               <span>{el.name}</span>
        </React.Fragment>
    ));
    const handleToggle=(value)=>{
             const currentValue = Checked.indexOf(value);
             const newChecked= [...Checked];

             if(currentValue===-1)
             newChecked.push(value);
             else
             newChecked.splice(currentValue,1);

             setChecked(newChecked);

             props.handleFilters(newChecked);
    }
    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel header='Continents' key='1'>
                  {
                     renderCheckboxlists ()
                  }
                </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox;
