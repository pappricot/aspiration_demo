import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { GET_GIT_TOPICS } from "../graphql/Queries";

  function SearchResult({value, onChange}) {

    let searchTerm = value;
    const [newTopic, setTopic] = useState(searchTerm);
    let search;

    useEffect(() => {
      onChange(newTopic);
    }, 
      [value, onChange, newTopic]
    )

    if(searchTerm === newTopic){
      search = searchTerm; //only filter if stargazers are high
    }else{
      search = newTopic;
      searchTerm = newTopic;
    }
    
    const { loading, error, data } = useQuery(GET_GIT_TOPICS,
      {
        variables: { search}
      });
  
    if (loading){ 
      return (
        <div>
          <i className="fa fa-spinner fa-spin mr-4"/>
          <span>...Searching for {search}</span>
        </div>
      );
    }
    if (error) return `Error! ${error.message}`;

    return (
      <React.Fragment>
        {data && data.search.edges &&  data.search.edges.map((edge, index) => (
          <ul className="list-group"  key={index}>
            <li className="list-group-item">
              <div className="d-flex justify-content-between">
                <h5>{edge.node.resourcePath}</h5>
                <span className="badge bg-light text-dark">
                  <i className="fa fa-star mr-2" aria-hidden="true" />
                  {edge.node.stargazers.totalCount}
                </span>
              </div>
              <div>
                Related Topics:
                {
                  edge.node.repositoryTopics.nodes.map((node,j)=>(
                  <button 
                    key={j}
                    onClick={() => setTopic(node.topic.name)}
                    type="button" 
                    className="btn btn-outline-dark btn-sm mx-1 my-1"
                  >
                    {node.topic.name}  
                    <span className="badge bg-light text-dark">
                      <i className="fa fa-star m1-2" aria-hidden="true" />
                    {node.topic.stargazerCount}</span>
                  </button>
                   ))
                }
              </div>
            </li>
          </ul>
        ))}
      </React.Fragment>
    );
  }

export default SearchResult;