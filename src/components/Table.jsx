// Table.js
import React, { useState } from 'react';
import './table.css';
const Table = ({ data : info }) => {
    const [data, setData] = useState(info);

    const updatedData = (targetId,updatedTags,str1,str2 ) =>
     data.map(item => {
        if (item.id === targetId) {
          // Update the selected tags
          let arr  =[];
          if(item[str1]) {
          arr  = item[str1].split(', ');
          arr.push(updatedTags);
          }
          else{
            arr.push(updatedTags);
          }
          item[str1] = arr.join(", ");
      
          // Remove "Fashion" from select tags
          const selectTagsArray = item[str2].split(", ");
          const indexToRemove = selectTagsArray.indexOf(updatedTags);
          if (indexToRemove !== -1) {
            selectTagsArray.splice(indexToRemove, 1);
            item[str2] = selectTagsArray.join(", ");
          }
        }
        return item;
      });
      

    const handleSelectedTags = (id,value) =>{
        if(value!='')
        {
        setData(updatedData(id,value, "selected tags", "select tags" ))
        }
    }
    const handleDeleteTags = (id, value) => {
        console.log(id, value);
        setData(updatedData(id,value, "select tags", "selected tags" ))
    }
  return (
    <div className="table-container">
      <h2>Uploads</h2>
      <table>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Links</th>
            <th>Prefix</th>
            <th>Add Tags</th>
            <th>Selected Tags</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td><a href={item.links}>{item.links}</a></td>
              <td>{item.prefix}</td>
              <td>
                <select value={item['select tags']} className="select-tags" onChange={(e)=>handleSelectedTags(item.id, e.target.value)}>
                  <option value={''} selected>Select Tags</option>
                  {item['select tags'].split(', ').map((tag, index) => (
                    <option value={tag} key={index}>{tag}</option>
                  ))}
                </select>
              </td>
              <td>
                {item['selected tags'] &&
                  item['selected tags'].split(', ').map((tag, index) => (
                    <div key={index} className="tag">
                      {tag} <span onClick = {() => handleDeleteTags(item.id, tag)} className="delete-icon">X</span>
                    </div>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
