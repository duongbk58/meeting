import React from "react";
import styled from "./Ratings.module.scss";
import _ from "lodash";

export default function Ratings({listRank}) {
    
  let result = [];

  listRank.forEach(function (a) {
        if ( !this[a.name] && !this[a.shape] ) {
            this[a.name] = { name: a.name, isCorrect: 0 };
            result.push(this[a.name]);
        } 
        this[a.name].isCorrect += a.isCorrect;
    }, Object.create(null));
    result.sort((a, b) => (a.isCorrect < b.isCorrect) ? 1 : -1)

  return (
    <div className={`${styled.main} col-md-12`}>
      <ul>
        {
          result.map((index, number) => (
            <>
              <li className="d-flex" style={{justifyContent:"center", fontSize:"18px"}}> 
                <span>{number + 1}. {index.name}</span>
                <div className={styled.trophy}>
                  {number == 0 && (
                    <i class="fa fa-trophy" aria-hidden="true"></i>
                  )}
                </div>
              </li>
            </>
          ))
        }
        
      </ul>
    </div>
  );
}
