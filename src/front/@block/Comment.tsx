import React, { useState, useCallback } from "react";
import Axios from "axios";
import {
  Text,
  Stack,
  Heading,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const Comment = ({ schoolData }: any) => {
  const [commentList, setCommentList] = useState([
    <Text>학교 평가를 불러오고 있습니다..</Text>,
  ]);
  const loadComments = useCallback(() => {
    const load = async () => {
      const arr: Array<
        React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLSpanElement>,
          HTMLSpanElement
        >
      > = [];

      setCommentList([<Text>학교 평가를 불러오고 있습니다..</Text>]);
      Axios.get(`/school/comment?id=${schoolData.SD_SCHUL_CODE}`).then(
        ({ data }) => {
          if (!data.length) {
            setCommentList([
              <Text>
                {schoolData.SD_SCHUL_CODE
                  ? "아직 이 학교에 대해 평가가 작성되지 않았습니다."
                  : "DB에 존재하지 않는 학교입니다."}
              </Text>,
            ] as any);
            return;
          }

          for (let i in data) {
            if (data[i].status.deleted) continue;
            if (data[i].target !== schoolData.SD_SCHUL_CODE) continue;
            arr.push(<br />);
            arr.push(
              <Text id={`comment${data[i].id}`}>
                [{data[i].createdAt}] {data[i].writer}: {data[i].content}
              </Text>
            );
          }
          setCommentList(arr as any);
        },
        (e) => {
          console.error(e);
        }
      );
    };
    load();
  }, []);

  return (
    <Stack
      spacing="2"
      alignContent="center"
      id="commentBox"
      style={{
        display: schoolData.ATPT_OFCDC_SC_NM ? "block" : "none",
      }}
    >
      <Heading fontSize="3xl">학교 평가</Heading>
      {commentList}
      <Input id="writerNameInput" placeholder="작성자" />
      <Input id="writerPasswordInput" placeholder="비밀번호" />
      <Textarea id="commentInput" placeholder="내용" />
      <Button
        onClick={async () => {
          const writer = (
            document.getElementById("writerNameInput") as HTMLInputElement
          ).value;
          const password = (
            document.getElementById("writerPasswordInput") as HTMLInputElement
          ).value;
          const content = (
            document.getElementById("commentInput") as HTMLTextAreaElement
          ).value;
          if (!writer) return alert("작성자 닉네임을 입력해주세요.");
          if (!password)
            return alert("댓글 관리를 위한 비밀번호를 입력해주세요.");
          if (!content) return alert("내용을 입력해주세요.");
          await Axios.post("/school/comment", {
            writer: writer,
            target: schoolData.SD_SCHUL_CODE,
            content: content,
            password: password,
          });
          loadComments();
        }}
      >
        작성
      </Button>
    </Stack>
  );
};

export default Comment;
