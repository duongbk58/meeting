import { useEffect, useState } from "react";
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

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  useEffect(() => {}, []);

  return (
    <>
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
    </>
  );
};

export default Header;
