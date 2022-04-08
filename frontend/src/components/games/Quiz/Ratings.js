import React from "react";
import styled from "./Ratings.module.scss";

const ratingsMember = [
  { UserName: "Nguyễn Đăng Dương", Point: "10 điểm" },
  {
    UserName: "Nguyễn Mai Anh",
    Point: "9.75 điểm",
  },
  { UserName: "KT_Hậu", Point: "9.5 điểm" },
  { UserName: "KT_Hiếu", Point: "9.25 điểm" },
  { UserName: "KT_Đức", Point: "9 điểm" },
];
export default function Ratings() {
  return (
    <div className={`${styled.main} col-md-12`}>
      <ul>
        {ratingsMember.map((index, number) => (
          <>
            <li className="d-flex">
              <span className={styled.stt}>{number + 1}</span>
              {index.UserName}
              <div className={styled.trophy}>
                <i class="fa fa-trophy" aria-hidden="true"></i>
              </div>
            </li>
          </>
        ))}
      </ul>
      <h3 className="text-center">
        Top {ratingsMember.length} người chơi giỏi nhất
      </h3>
    </div>
  );
}
