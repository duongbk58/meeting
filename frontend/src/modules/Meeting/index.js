import React, { useState } from "react";
import a from "./Stylemeeting.scss";

import Footer from "./Footer";
import Header from "./Header";
import DrapAndDropImageContainer from "components/games/Dnd/DragAndDropImageContainer";

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
  const [show, setShow] = useState(false);
  return (
    <div className="student">
      <div className="logo"></div>

      <Header />

      <div className="student-share">
        <div className="containerr">
          <div className="row">
            {show && <DrapAndDropImageContainer data={data} />}
          </div>
        </div>
      </div>

      <Footer data={data} show={show} setShow={setShow} />
    </div>
  );
}
