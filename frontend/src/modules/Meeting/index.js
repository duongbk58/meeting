import React, { useState, useEffect } from "react";
import "./Stylemeeting.scss";
import { useParams } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import DrapAndDropImageContainer from "components/games/Dnd/DragAndDropImageContainer";
import MatchBackGroundContainer from "components/games/MatchBackGround/MatchBackGroundContainer";
import Quiz from "components/games/Quiz";
import BoardContainer from "modules/BoardContainer/BoardContainer";

export default function Meeting() {
  let data = {
    game_id: 477,
    icon_list: [
      {
        language: "vi",
        icons: [
          {
            icon_id: "C1.L94.P4.A2",
            path: "cQyRdcC2R5M52PTb8cclrOv5JljDH8xM.png",
            type_media: 1,
            props: [],
            tracing: [],
            comparision: [],
          },
          {
            icon_id: "C1.L94.P4.A2.Q",
            path: "",
            type_media: 1,
            props: [
              {
                key: "name_1",
                text: "2. Ti\u1ebfng n\u00e0o c\u00f3 v\u1ea7n anh? Ti\u1ebfng n\u00e0o c\u00f3 v\u1ea7n ach?",
                audio: [{ path: "", voice_id: 56, sync_data: "" }],
              },
            ],
          },
          {
            icon_id: "C1.L94.P4.A2.t1",
            path: "dExUv0qalh0Tt6NRw4zzpY3v8jC98D00.png",
            type_media: 1,
            props: [
              {
                key: "name_1",
                text: "anh",
                audio: [{ path: "", voice_id: 56, sync_data: "" }],
              },
            ],
          },
          {
            icon_id: "C1.L94.P4.A2.t2",
            path: "L559EwHJo4k7TFs9ORWsF1MU6VLcfjEy.png",
            type_media: 1,
            props: [
              {
                key: "name_1",
                text: "ach",
                audio: [{ path: "", voice_id: 56, sync_data: "" }],
              },
            ],
          },
          {
            icon_id: "C1.L94.P4.A2.1",
            path: "krmrD6c1szEvvLBfCX7jF8bl06uhQROQ.png",
            type_media: 1,
            props: [
              {
                key: "name_1",
                text: "vi\u00ean g\u1ea1ch",
                audio: [
                  {
                    path: "DHGhtn552PpMA1JKJ2X8cCnVba9Rl7XG.mp3",
                    voice_id: 56,
                    sync_data: "",
                  },
                ],
              },
            ],
          },
          {
            icon_id: "C1.L94.P4.A2.2",
            path: "dRkJyd8cLneiPZiYMplmqlVpZg2F39J2.png",
            type_media: 1,
            props: [
              {
                key: "name_1",
                text: "t\u00e1ch tr\u00e0",
                audio: [
                  {
                    path: "fHurSkLCUKxBVjPFZXjDY6k9DAUbkGi5.mp3",
                    voice_id: 56,
                    sync_data: "",
                  },
                ],
              },
            ],
          },
          {
            icon_id: "C1.L94.P4.A2.3",
            path: "v5fPo8ca5XqPJfK1OXMpYShEc4BrCUxL.png",
            type_media: 1,
            props: [
              {
                key: "name_1",
                text: "b\u00e1nh ch\u01b0ng",
                audio: [
                  {
                    path: "YWB6VLXKBDrYzQRJkrfHOVi0ovCU8zGf.mp3",
                    voice_id: 56,
                    sync_data: "",
                  },
                ],
              },
            ],
          },
          {
            icon_id: "C1.L94.P4.A2.4",
            path: "4cFNa0FdrrrEC80X0astjiCQ6R791DML.png",
            type_media: 1,
            props: [
              {
                key: "name_1",
                text: "b\u1ee9c tranh",
                audio: [
                  {
                    path: "x4AyvepvnWLQVVszpxVodcaV9DTk5pl5.mp3",
                    voice_id: 56,
                    sync_data: "",
                  },
                ],
              },
            ],
          },
          {
            icon_id: "C1.L94.P4.A2.5",
            path: "tHgddAfPNVogjbH4ve59rdtSummQOvyq.png",
            type_media: 1,
            props: [
              {
                key: "name_1",
                text: "kh\u00e1ch s\u1ea1n",
                audio: [
                  {
                    path: "egmyacZfCF9GCt5BxzYuNku0Sty0a83X.mp3",
                    voice_id: 56,
                    sync_data: "",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    game_config: {
      type_question: ["image"],
      type_answer: ["image", "audio"],
      back_ground: { icon_id: "C1.L94.P4.A2" },
      question_title: { icon_id: "C1.L94.P4.A2.Q" },
      question: [
        { icon_id: "C1.L94.P4.A2.t1" },
        { icon_id: "C1.L94.P4.A2.t2" },
      ],
      answer: {
        couple_of_icon: [
          {
            icon_id_question: "C1.L94.P4.A2.t1",
            icon_id_answer: "C1.L94.P4.A2.3",
          },
          {
            icon_id_question: "C1.L94.P4.A2.t1",
            icon_id_answer: "C1.L94.P4.A2.4",
          },
          {
            icon_id_question: "C1.L94.P4.A2.t2",
            icon_id_answer: "C1.L94.P4.A2.1",
          },
          {
            icon_id_question: "C1.L94.P4.A2.t2",
            icon_id_answer: "C1.L94.P4.A2.2",
          },
          {
            icon_id_question: "C1.L94.P4.A2.t2",
            icon_id_answer: "C1.L94.P4.A2.5",
          },
        ],
      },
      order_answer: [
        { icon_id: "C1.L94.P4.A2.1" },
        { icon_id: "C1.L94.P4.A2.2" },
        { icon_id: "C1.L94.P4.A2.3" },
        { icon_id: "C1.L94.P4.A2.4" },
        { icon_id: "C1.L94.P4.A2.5" },
      ],
      answer_number_in_a_row: "5",
    },
  };
  let data1 = {
    game_id: 463,
    background_list: {
      backgroundList: [
        {
          value: [
            {
              icon_id: "",
              touch: [
                {
                  name: "object-1",
                  touch_vector:
                    '[{"x":244.42,"y":55.49},{"x":423.42,"y":55.49},{"x":423.42,"y":188.49},{"x":244.42,"y":188.49},{"x":244.42,"y":55.49}]',
                },
                {
                  name: "object-2",
                  touch_vector:
                    '[{"x":701.09,"y":54},{"x":881.09,"y":54},{"x":881.09,"y":187.49},{"x":701.09,"y":187.49},{"x":701.09,"y":54}]',
                },
                {
                  name: "object-3",
                  touch_vector:
                    '[{"x":10.42,"y":293},{"x":152,"y":293},{"x":152,"y":515.49},{"x":10.42,"y":515.49},{"x":10.42,"y":293}]',
                },
                {
                  name: "object-4",
                  touch_vector:
                    '[{"x":169.08,"y":288},{"x":350.09,"y":288},{"x":350.09,"y":512.49},{"x":169.08,"y":512.49},{"x":169.08,"y":288}]',
                },
                {
                  name: "object-5",
                  touch_vector:
                    '[{"x":365.42,"y":286},{"x":522.42,"y":286},{"x":522.42,"y":512.49},{"x":365.42,"y":512.49},{"x":365.42,"y":286}]',
                },
                {
                  name: "object-6",
                  touch_vector:
                    '[{"x":547.53,"y":284},{"x":713.01,"y":284},{"x":713.01,"y":511.49},{"x":547.53,"y":511.49},{"x":547.53,"y":284}]',
                },
                {
                  name: "object-7",
                  touch_vector:
                    '[{"x":735.53,"y":280.49},{"x":877.01,"y":280.49},{"x":877.01,"y":511.49},{"x":735.53,"y":511.49},{"x":735.53,"y":280.49}]',
                },
                {
                  name: "object-8",
                  touch_vector:
                    '[{"x":884.01,"y":280},{"x":1090.54,"y":280},{"x":1090.54,"y":512.49},{"x":884.01,"y":512.49},{"x":884.01,"y":280}]',
                },
              ],
              id: 73913,
              path: "e0CninENDH2ojPaeN5SV6WN6p2G1cPv4.png",
              image_width: 1106,
              image_height: "550.00",
            },
          ],
        },
      ],
    },
    game_config: {
      back_ground: { icon_id: "C1.L30.P56.A2" },
      data: "2",
      answer: {
        couple_of_icon: [
          { icon_object_id: "3", icon_id_answer: "C1.L30.P56.A2.1" },
          { icon_object_id: "4", icon_id_answer: "C1.L30.P56.A2.2" },
          { icon_object_id: "5", icon_id_answer: "C1.L30.P56.A2.3" },
          { icon_object_id: "6", icon_id_answer: "C1.L30.P56.A2.4" },
          { icon_object_id: "7", icon_id_answer: "C1.L30.P56.A2.5" },
          { icon_object_id: "8", icon_id_answer: "C1.L30.P56.A2.6" },
        ],
      },
      answer_correct: "1_3,1_4,1_5,1_6,2_5,2_7,2_8",
      ignore_line: "1,2|3,4,5,6,7,8",
      position_line_start_top: "3,4,5,6,7,8",
      position_line_start_bottom: "1,2",
    },
    icon_list: [
      {
        language: "vi",
        icons: [
          {
            icon_id: "C1.L30.P56.A2",
            path: "tYycbbbI0nQXzfTJPTBPUWE2E0udoewu.png",
            type_media: 1,
            props: [],
            tracing: [],
            comparision: [],
          },
          {
            icon_id: "C1.L30.P56.A2.Q",
            path: "",
            type_media: 1,
            props: [
              {
                key: "name_1",
                text: "Ti\u1ebfng n\u00e0o c\u00f3 \u00e2m u? Ti\u1ebfng n\u00e0o c\u00f3 \u00e2m \u01b0?",
                audio: [{ path: "", voice_id: 56, sync_data: "" }],
              },
            ],
          },
          {
            icon_id: "C1.L30.P56.A2.t1",
            path: "VuIaWU6zlTxtTU8oQD9yk79gfFW2hJPB.png",
            type_media: 1,
            props: [
              {
                key: "name_1",
                text: "",
                audio: [{ path: "", voice_id: 56, sync_data: "" }],
              },
            ],
            height: 200,
            width: 200,
            tracing: '{"paths":[]}',
          },
          {
            icon_id: "C1.L30.P56.A2.t2",
            path: "HCLAuaQWRbljOvR94rM0aqs1tfrVPUHs.png",
            type_media: 1,
            props: [
              {
                key: "name_1",
                text: "",
                audio: [{ path: "", voice_id: 56, sync_data: "" }],
              },
            ],
            height: 200,
            width: 200,
            tracing: '{"paths":[]}',
          },
          {
            icon_id: "C1.L30.P56.A2.1",
            path: "GqRtxNyxmjNC4oRCtXhoOnnuX8ovs8Gf.png",
            type_media: 1,
            props: [
              {
                key: "name_1",
                text: "\u0111u \u0111\u1ee7",
                audio: [
                  {
                    path: "0eB4mMVhT5V5xtYvhXoDd7fb6uIZUmqq.mp3",
                    voice_id: 56,
                    sync_data: "",
                  },
                ],
              },
            ],
          },
          {
            icon_id: "C1.L30.P56.A2.2",
            path: "ttx3CRwk52XCKXvfUl2blGRq0rjB7y1J.png",
            type_media: 1,
            props: [
              {
                key: "name_1",
                text: "c\u00e1 thu",
                audio: [
                  {
                    path: "7w7uDB5PnlPvVRJXYOuikSvCsvefEv7v.mp3",
                    voice_id: 56,
                    sync_data: "",
                  },
                ],
              },
            ],
          },
          {
            icon_id: "C1.L30.P56.A2.3",
            path: "bLDXmilZB5v1ABMK99GAkEWkL3pGpLQG.png",
            type_media: 1,
            props: [
              {
                key: "name_1",
                text: "c\u1ee7 t\u1eeb",
                audio: [
                  {
                    path: "5JJAod1EO4bNRpGFK2xMVUhhrRunFa7e.mp3",
                    voice_id: 56,
                    sync_data: "",
                  },
                ],
              },
            ],
          },
          {
            icon_id: "C1.L30.P56.A2.4",
            path: "ohilhkVVdHP6mIyXvkGIqpZ9LvwkVzC6.png",
            type_media: 1,
            props: [
              {
                key: "name_1",
                text: "c\u00fa",
                audio: [
                  {
                    path: "CctdfMqh2J8qpU5czM5mPG2k61HNVuRm.mp3",
                    voice_id: 56,
                    sync_data: "",
                  },
                  {
                    path: "9d3IfgET8YJuxNdRh2Q1rMA1IEFFnjOx.mp3",
                    voice_id: 56,
                    sync_data: "",
                  },
                  {
                    path: "MVHItHhkZsveenSvTlBLi7lKdfFwgkC9.mp3",
                    voice_id: 56,
                    sync_data: "",
                  },
                ],
              },
            ],
          },
          {
            icon_id: "C1.L30.P56.A2.5",
            path: "uw7QrKcy949s9OhAr7HGEWAz8nchKSyc.png",
            type_media: 1,
            props: [
              {
                key: "name_1",
                text: "l\u00e1 th\u01b0",
                audio: [
                  {
                    path: "vvN7FPvbf9hco5YRT4CpgE8fed8Y5cPN.mp3",
                    voice_id: 56,
                    sync_data: "",
                  },
                ],
              },
            ],
          },
          {
            icon_id: "C1.L30.P56.A2.6",
            path: "UcOaa9Sj2M1FjQLqlh9vShI9CvlYivvz.png",
            type_media: 1,
            props: [
              {
                key: "name_1",
                text: "c\u1eed t\u1ea1",
                audio: [
                  {
                    path: "Z3RRVeFq1VeCQVrTawNCS5f09FWnEFdj.mp3",
                    voice_id: 56,
                    sync_data: "",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const [show, setShow] = useState(true);
  const [showBoard, setShowBoard] = useState(false);
  const url = useParams();

  useEffect(() => {
    console.log(url);
  }, [url]);
  return (
    <div className="student">
      <div className="logo"></div>

      <Header />

      <div className="student-share">
        <div className="containerr">
          <div className="row">
            {/* {show && <DrapAndDropImageContainer data={data} />} */}
            {/* {show && <MatchBackGroundContainer data={data1} dataDefault={data1}/>} */}
            <Quiz></Quiz>
              {showBoard && <BoardContainer />}
              {/* {show && <DrapAndDropImageContainer data={data} />} */}
              {show && (
                <MatchBackGroundContainer data={data1} dataDefault={data1} />
              )}
            </>
          </div>
        </div>
      </div>

      <Footer
        data={data}
        show={show}
        setShow={setShow}
        showBoard={showBoard}
        setShowBoard={setShowBoard}
      />
    </div>
  );
}
