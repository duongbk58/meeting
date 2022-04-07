import React from "react";
import a from "./styleMeeting.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tabStudent = [
  {
    image:
      "https://sohanews.sohacdn.com/2019/9/7/photo-1-15678164908831106383180.jpg",
    useName: "Nguyễn Văn Dương",
  },
  {
    image:
      "https://sohanews.sohacdn.com/2019/9/7/photo-1-15678164908831106383180.jpg",
    useName: "Nguyễn Mai Anh",
  },
  {
    image:
      "https://sohanews.sohacdn.com/2019/9/7/photo-1-15678164908831106383180.jpg",
    useName: "KT_Đỗ Hậu",
  },
  {
    image:
      "https://sohanews.sohacdn.com/2019/9/7/photo-1-15678164908831106383180.jpg",
    useName: "KT_Anh Đức",
  },
  {
    image:
      "https://sohanews.sohacdn.com/2019/9/7/photo-1-15678164908831106383180.jpg",
    useName: "KT_Hiếu",
  },
  {
    image:
      "https://sohanews.sohacdn.com/2019/9/7/photo-1-15678164908831106383180.jpg",
    useName: "Nguyễn Văn Dương",
  },
  {
    image:
      "https://sohanews.sohacdn.com/2019/9/7/photo-1-15678164908831106383180.jpg",
    useName: "Nguyễn Mai Anh",
  },
  {
    image:
      "https://sohanews.sohacdn.com/2019/9/7/photo-1-15678164908831106383180.jpg",
    useName: "KT_Đỗ Hậu",
  },
  {
    image:
      "https://sohanews.sohacdn.com/2019/9/7/photo-1-15678164908831106383180.jpg",
    useName: "KT_Anh Đức",
  },
  {
    image:
      "https://sohanews.sohacdn.com/2019/9/7/photo-1-15678164908831106383180.jpg",
    useName: "KT_Hiếu",
  },
  {
    image:
      "https://sohanews.sohacdn.com/2019/9/7/photo-1-15678164908831106383180.jpg",
    useName: "Nguyễn Văn Dương",
  },
  {
    image:
      "https://sohanews.sohacdn.com/2019/9/7/photo-1-15678164908831106383180.jpg",
    useName: "Nguyễn Mai Anh",
  },
  {
    image:
      "https://sohanews.sohacdn.com/2019/9/7/photo-1-15678164908831106383180.jpg",
    useName: "KT_Đỗ Hậu",
  },
  {
    image:
      "https://sohanews.sohacdn.com/2019/9/7/photo-1-15678164908831106383180.jpg",
    useName: "KT_Anh Đức",
  },
  {
    image:
      "https://sohanews.sohacdn.com/2019/9/7/photo-1-15678164908831106383180.jpg",
    useName: "KT_Hiếu",
  },
];
export default function Meetting() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="student">
      <div className="logo"></div>

      <div className="tab_student">
        <div className="container text-center">
          <Slider {...settings}>
            {tabStudent.map((index, number) => (
              <div className="tab_student-acc">
                <img
                  src="https://sohanews.sohacdn.com/2019/9/7/photo-1-15678164908831106383180.jpg"
                  alt="ảnh lỗi"
                ></img>
                <div className="icon">
                  <i class="fa fa-microphone-slash mr-2" aria-hidden="true"></i>
                  <span className="name">Họ tên: {index.useName}</span>
                </div>
                <div className="Crown">
                  <i class="fa fa-heart-o" aria-hidden="true"></i>
                </div>
                <div className="cup">
                  <i class="fa fa-trophy" aria-hidden="true"></i>
                  <span>x0</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="student-share">
        <div className="containerr">
          <div className="row">
            <div className="col-lg-12">
              <h1>Main video call</h1>
            </div>
            <i class="fa fa-address-book-o" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="student-footer">
        <div className="containerr">
          <div className="row">
            <div className="col-lg-3 col-3 wb">
              <i class="fa fa-leanpub" aria-hidden="true"></i>
              Dashboard
            </div>
            <div className="col-lg-3 col-3 chtt">
              <i class="fa fa-chain-broken" aria-hidden="true"></i> Interactive
              Questions
            </div>
            <div className="col-lg-3 col-3 video">
              <i class="fa fa-video-camera" aria-hidden="true"></i>Video
            </div>
            <div className="col-lg-3 col-3 exit">
              <i class="fa fa-sign-out" aria-hidden="true"></i>Exit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
