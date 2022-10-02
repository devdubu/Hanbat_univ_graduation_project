import React from 'react';


export default function ClassroomTask() {
    /*
        메인 수업 홈페이지에 학생들은
        수업 차수 vs 요약 정리 두가지로 보여줄 수 있지만 우선은 요약 정리로

        출석
            - 수업 차수를 바꾸는 기능
            - 대면, 비대면인지 알려주는 기능
            - 출석 여부에 대해서 알려주는 기능
            - 전자 출석으로 바로 넘어가는 기능
        시험
            - 몇번의 시험이 있는지 알려줌, 만약 시험 성적이 나왔다면, 2차 비밀번호를 설정하면 볼수 있다.
            - 시험의 이의 신청 버튼
            - 시험이 있을 시에는 장소와 시간 등을 표기해줌
        과제
            - 진행 예정, 진행중, 마감 등의 섹션을 나누고 그에 나의 제출 정보

     */

    return(
        <div>
            {/*
            **************************************************
            ********************* 과제 ************************
            **************************************************
            */}
            <div>
                <div>
                    <h1>과제</h1>
                </div>
                <div>
                    <div>
                        <div>
                            <h2>진행중</h2>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>진행 예정</h2>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>진행중</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}