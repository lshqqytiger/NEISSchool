import React, { useState, useCallback, useEffect } from "react";
import Axios from "axios";
import {
  Text,
  Stack,
  Heading,
  Input,
  Textarea,
  Button,
  Center,
} from "@chakra-ui/react";

const Comment = ({ schoolData }: any) => {
  const [commentList, setCommentList] = useState([
    <Text>학교 평가를 불러오고 있습니다..</Text>,
  ]);
  const [writerName, setWriterName] = useState("");
  const [writerPassword, setWriterPassword] = useState("");
  const [comment, setComment] = useState("");
  const fetchComments = useCallback(() => {
    const fetch = async () => {
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
            return setCommentList([
              <Text>
                {schoolData.SD_SCHUL_CODE
                  ? "아직 이 학교에 대해 평가가 작성되지 않았습니다."
                  : "DB에 존재하지 않는 학교입니다."}
              </Text>,
            ] as any);
          }

          for (let i in data) {
            if (data[i].status.deleted) continue;
            if (data[i].target !== schoolData.SD_SCHUL_CODE) continue;
            arr.push(
              <Text>
                [{new Date(data[i].createdAt).toLocaleString()}]{" "}
                {data[i].writer}: {data[i].content}
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
    fetch();
  }, [schoolData]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <Stack
      spacing="2"
      alignContent="center"
      id="commentBox"
      style={{
        display: schoolData.ATPT_OFCDC_SC_NM ? "block" : "none",
      }}
    >
      <Center>
        <Heading fontSize="3xl">평가</Heading>
      </Center>
      <Stack spacing="0.5">{commentList}</Stack>
      <Input
        placeholder="작성자"
        onChange={(e) => {
          setWriterName(e.target.value);
        }}
        value={writerName}
      />
      <Input
        placeholder="비밀번호"
        onChange={(e) => {
          setWriterPassword(e.target.value);
        }}
        value={writerPassword}
      />
      <Textarea
        placeholder="내용"
        onChange={(e) => {
          setComment(e.target.value);
        }}
        value={comment}
      />
      <Button
        onClick={async () => {
          if (!writerName) return alert("작성자 닉네임을 입력해주세요.");
          if (!writerPassword)
            return alert("댓글 관리를 위한 비밀번호를 입력해주세요.");
          if (!comment) return alert("내용을 입력해주세요.");
          await Axios.post("/school/comment", {
            writer: writerName,
            target: schoolData.SD_SCHUL_CODE,
            content: comment,
            password: writerPassword,
          });
          fetchComments();
        }}
      >
        작성
      </Button>
    </Stack>
  );
};

export default Comment;
