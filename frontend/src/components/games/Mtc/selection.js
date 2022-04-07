export function onFormatListAnswer(data) {
  //   const listQuestion = data?.map((question) => {
  //     if (question?.data?.game_config?.data) {
  const dataAnswer = data?.game_config?.data[0]?.answers?.map((answer) => {
    let dataIcon = data?.icon_list[0]?.icons?.filter(
      (icon) => icon.icon_id == answer.answer_id
    );
    return { ...answer, icon: dataIcon };
  });
  return dataAnswer;
}

export function onFormatQuestion(data) {
  const dataQuestion = data?.icon_list[0]?.icons?.filter(
    (icon) => icon.icon_id == data?.game_config?.data[0]?.question
  );
  return { question: dataQuestion[0] };
}
//   });

//   return listQuestion;
// }
