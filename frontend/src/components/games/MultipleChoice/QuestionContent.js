import _ from "lodash";
import { TypeGameMultipleChoice } from "components/games/selection";
import styles from "./DoingExercise.module.scss";

export default function QuestionContent({ data, onClickAudio }) {
  return (
    <>
      <div style={{ marginRight: 0 }} className="col mt-3">
        <div
          className={`d-flex justify-content-between align-items-center position-relative ${styles.questionWrapper}`}
        >
          {_.includes(
            data?.data?.game_config?.type_question,
            TypeGameMultipleChoice.AUDIO
          ) &&
            data.question.props[0]?.audio[0]?.path && (
              <div
                className="position-absolute cursor"
                style={{ top: 10, left: 25 }}
              >
                <icon
                  onClick={() =>
                    onClickAudio(
                      `${process.env.REACT_APP_MEDIA_URL_APP}${process.env.REACT_APP_FOLDER_UPLOAD_AUDIO}/${data.question.props[0]?.audio[0]?.path}`
                    )
                  }
                >
                  <i
                    className="fa fa-volume-up monkey-color-orange"
                    aria-hidden="true"
                  ></i>
                </icon>
              </div>
            )}
          <div className="text-center">
            {_.includes(
              data?.data?.game_config?.type_question,
              TypeGameMultipleChoice.TEXT
            ) &&
              data?.question?.props && (
                <p
                  className="text-left font-weight-bold"
                  style={{ fontSize: "26px" }}
                >
                  {data?.question?.props[0]?.text}
                </p>
              )}
          </div>
        </div>

        <div className={`d-flex justify-content-center ${styles.imgQuestion}`}>
          {_.includes(
            data?.data?.game_config?.type_question,
            TypeGameMultipleChoice.IMAGE
          ) &&
            data?.question?.path && (
              <img
                src={`${process.env.REACT_APP_MEDIA_URL_APP}${process.env.REACT_APP_FOLDER_UPLOAD_IMAGE}/${data?.question.path}`}
                height="300px"
                width="auto"
                className={styles.borderRad7}
                alt=""
              />
            )}
        </div>
      </div>
      <div style={{ margin: 0 }} className="row mt-2 ml-2">
        <div
          className={`d-flex justify-content-center ${styles.videoQuestion}`}
        >
          {_.includes(
            data?.data?.game_config?.type_question,
            TypeGameMultipleChoice.VIDEO
          ) &&
            data?.question?.path && (
              <video
                src={`${process.env.REACT_APP_MEDIA_URL_APP}${process.env.REACT_APP_FOLDER_UPLOAD_VIDEO}/${data?.question?.path}`}
                width="350px"
                controls
                className={styles.borderRad7}
              />
            )}
        </div>
      </div>
    </>
  );
}
