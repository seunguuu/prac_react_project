import { useEffect, useState } from "react";
import { getBoards } from "../../http/http";

// export default function Requirement({ token }) {
export default function Requirement() {
  let array = [1, 2, 3, 4, 5];

  // const [boards, setBoards] = useState();

  // useEffect(() => {
  //   // 게시글 불러오기
  //   const loadBoards = async () => {
  //     if (!token) {
  //       setBoards([]);
  //       return;
  //     }

  //     const json = await getBoards(token);

  //     console.log(json);
  //     setBoards(json.body);
  //   };
  //   loadBoards();
  // }, [token]);
  return (
    <>
      {/** 토큰이 있고, 게시글을 선택하지 않았을 때 */}
      <>
        {/* <div>총 {boards}개의 요구사항이 검색되었습니다.</div> */}
        <div>총 ?개의 요구사항이 검색되었습니다.</div>
        <table>
          <thead>
            <tr>
              <th>프로젝트</th>
              <th>제목</th>
              <th>일정상태</th>
              <th>진행상태</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {array.map((item) => (
              <tr>
                <td>프로젝트{item}</td>
                <td>제목{item}</td>
                <td>일정상태{item}</td>
                <td>진행상태{item}</td>
                <td>작성자{item}</td>
                <td>작성일{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>

      <button style={{ textAlign: "right" }}>버튼</button>
    </>
  );
}
