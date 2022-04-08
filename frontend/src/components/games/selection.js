export function onFormatDataGameConfig(data) {
  console.log("dddd", data);
  const listQuestion = data?.map((question) => {
    if (question?.data?.game_config?.data) {
      const dataAnswer = question?.data?.game_config?.data[0]?.answers?.map(
        (answer) => {
          let dataIcon = question?.data?.icon_list[0]?.icons?.filter(
            (icon) => icon.icon_id == answer.answer_id
          );
          return { ...answer, icon: dataIcon };
        }
      );

      if (question?.data?.icon_list) {
        const dataQuestion = question?.data?.icon_list[0]?.icons?.filter(
          (icon) =>
            icon.icon_id == question?.data?.game_config?.data[0]?.question
        );
        return { ...question, answers: dataAnswer, question: dataQuestion[0] };
      }
    }
 
  });

  return listQuestion;
}


export const TypeGameMultipleChoice = {
  IMAGE: "image",
  AUDIO: "audio",
  TEXT: "text",
  VIDEO: "video",
  IMG_IMG: 1,
  IMG_TEXT_TEXT: 2,
  IMG_TEXT_IMAGE_TEXT: 3,
  TEXT_TEXT: 4,
  IMAGE_TEXT: 5,
};
