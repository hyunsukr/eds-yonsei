/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import jhr1 from "assets/images/jhr_1.jpeg";
import phj1 from "assets/images/phj_1.png";
import cyj1 from "assets/images/cyj_1.png";
import ssy1 from "assets/images/ssy_1.png";
import psh1 from "assets/images/psh_1.png";


function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={20}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The EDS Yonsei Research Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              연세대학교 교육데이터사이언스 연구실 구성
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={jhr1}
                name="류지훈"
                position={{ color: "info", label: "연세대학교 교육학과대학 교육학과 교수" }}
                description="참여과제: \n
                1. 강원 학생 학습진단 결과 분석 및 학교 단위 학습지원대상학생 다중지원체제 구축 운영-방안 정책 연구 \n
                2. 2023 아산 유스프러너 교육 효과성 분석 연구 \n
                3. 2022년 기초교양교육 강화사업 설계를 위한 기초연구 \n
                학력: PhD in Quantitative Methods in Education, University of Minnesota (2010)"
              />
            </MKBox>
          </Grid>
          <br></br>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={phj1}
                name="박희주"
                position={{ color: "info", label: "연세대학교 교육학과대학 교육학과 박사수료" }}
                description="참여과제: \n
                1. 2022년 기초교양교육 강화사업 설계를 위한 기초연구 \n
                학력: 연세대학교 교육대학원 교육행정 석사 (2021)"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={cyj1}
                name="조영진"
                position={{ color: "info", label: "연세대학교 교육학과대학 교육학과 박사과정" }}
                description="참여과제: \n
                1. 강원 학생 학습진단 결과 분석 및 학교 단위 학습지원대상학생 다중지원체제 구축 운영-방안 정책 연구 \n
                2. 2023 아산 유스프러너 교육 효과성 분석 연구 \n
                학력: 건국대학교 일반대학원 교육측정·통계 석사 (2021)"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={ssy1}
                name="사승연"
                position={{ color: "info", label: "연세대학교 교육학과대학 교육학과 석사수료" }}
                description="참여과제: \n
                1. 강원 학생 학습진단 결과 분석 및 학교 단위 학습지원대상학생 다중지원체제 구축 운영-방안 정책 연구 \n
                2. 2023 아산 유스프러너 교육 효과성 분석 연구 \n
                학력: 연세대학교 교육과학대학 교육학과 학사 (2022)"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={psh1}
                name="박수훈"
                position={{ color: "info", label: "연세대학교 교육과학대학 교육학과 석사과정" }}
                description="참여과제: \n
                1. 2023 아산 유스프러너 교육 효과성 분석 연구 \n
                학력: 공군사관학교 국제관계 전공 학사 (2013)"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
