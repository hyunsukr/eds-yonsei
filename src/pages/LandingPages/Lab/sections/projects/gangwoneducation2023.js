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
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

// Images
import yonseiEmblem from "assets/images/YonseiUniversityEmblem.png";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import Footer from "pages/LandingPages/Lab/sections/Footer";

// Routes
import routes from "routes";

import Card from "@mui/material/Card";

import Breadcrumbs from "examples/Breadcrumbs";

function GangwonStudent2023() {
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({
              functions: { linearGradient, rgba },
              palette: { gradients },
            }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.6),
                rgba(gradients.dark.state, 0.6)
              )}, url("https://i.pinimg.com/originals/36/4a/aa/364aaa82f65a7f7df03f0ff087356c79.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
              rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <MKBox component="section" py={{ xs: 6, sm: 12 }}>
            <Container>
              <Grid container item xs={12} justifyContent="center" mx="auto">
                <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
                  <MKAvatar
                    src={yonseiEmblem}
                    alt="Yonsei"
                    size="xxl"
                    shadow="xl"
                  />
                </MKBox>
                <Grid container justifyContent="center" py={6}>
                  <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
                    <Breadcrumbs
                      routes={[
                        { label: "Home", route: "/home" },
                        {
                          label: "Research & Projects",
                          route: "/pages/landing-pages/research",
                        },
                        { label: "강원 학생 학습진단 결과 분석" },
                      ]}
                    />
                    <MKBox
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                    >
                      <MKTypography variant="h3">
                        강원 학생 학습진단 결과 분석 및 학교 단위
                        학습지원대상학생 다중지원체제 구축 운영-방안 정책
                        연구용역
                      </MKTypography>
                    </MKBox>
                    <MKTypography variant="h4" mt={4}>
                      과제요약
                    </MKTypography>
                    <MKTypography
                      variant="body1"
                      fontWeight="light"
                      color="text"
                    >
                      강원 학생 학습진단 결과 분석 및 학교 단위 학습지원대상학생
                      다중지원체제 구축 운영-방안 정책 연구는
                      강원학생성장진단평가 결과 분석을 통해
                      지역별-학교급별-학년별 상황과 맥락에 부합하는 학교 단위
                      학습지원대상학생 다중지원체제 구축 운영 방안을 제시하는
                      것을 목표로 하였다. 이에 따라 문항반응이론,
                      다층구조방정식모형을 활용해 여러 배경 변인에 따른 강원
                      학생들의 학습진단 결과에 대한 다면적인 분석을 진행하고자
                      하였다. 또한 설문도구와 초점집단인터뷰, 전문가협의회를
                      활용하여 보다 깊은 수준의 제언을 도출하고자 하였다.
                    </MKTypography>
                    <MKTypography variant="h4" mt={4}>
                      과제 주관 기관
                    </MKTypography>
                    <MKTypography
                      variant="body1"
                      fontWeight="light"
                      color="text"
                    >
                      강원도교육청
                    </MKTypography>
                    <MKTypography variant="h4" mt={4}>
                      과제 기간
                    </MKTypography>
                    <MKTypography
                      variant="body1"
                      fontWeight="light"
                      color="text"
                    >
                      2023.07.12. ~ 2023.12.15.
                    </MKTypography>
                    <MKTypography variant="h4" mt={4}>
                      참여자
                    </MKTypography>
                    <MKTypography
                      variant="body1"
                      fontWeight="light"
                      color="text"
                    >
                      류지훈, 김성훈, 조영진, 사승연
                    </MKTypography>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </Card>
        {/* <Contact /> */}
        <Footer />
      </MKBox>
    </>
  );
}

export default GangwonStudent2023;
