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

function ASAN2023() {
  return (
    <>
    <DefaultNavbar
      routes={routes}
      transparent
      light
    />
    <MKBox bgColor="white">
      <MKBox
        minHeight="25rem"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
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
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={yonseiEmblem} alt="Yonsei" size="xxl" shadow="xl" />
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
                        {
                          label:
                            "2023 아산 유스프러너 교육 효과성 분석 연구",
                        },
                      ]}
                    />
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">2023 아산 유스프러너 교육 효과성 분석 연구</MKTypography>
              </MKBox>
              <MKTypography variant="h4" mt={4}>과제명</MKTypography>
              <MKTypography variant="body1" fontWeight="light" color="text">
              2023 아산 유스프러너 교육 효과성 분석 연구는 2023년 1학기 아산유스프러너 기업가정신 함양 프로그램에
              참여하는 중·고등학생들의 기업가 정신 향상 정도를 파악하여 교육의 효과성을 검증하고 향후 프로그램 기획 및
              개선에 반영하고자 한다. 기업가정신을 항상하는 것이 생애주기에 일어나는 교육이어야 하기에 종단적인 교육
              프로그램으로 확대 운영하는 것을 목표로 하였다. 이에 따라 하위 커리큘럼인 ‘실리콘밸리 히어로’, ‘헬로, 스타트업
              월드’, ‘가치 쓰는 창업일기’ 프로그램의 효과성을 세부적으로 측정하여 전체 프로그램의 효과성과 더불어 세 개의
              세부 커리큘럼의 효과성을 측정 및 비교하고자 하였다.
              </MKTypography>
              <MKTypography variant="h4" mt={4}>과제 주관 기관</MKTypography>
              <MKTypography variant="body1" fontWeight="light" color="text">
                아산나눔재단
              </MKTypography>
              <MKTypography variant="h4" mt={4}>과제기간</MKTypography>
              <MKTypography variant="body1" fontWeight="light" color="text">
                2023.03.02. ~ 2023.10.31.
              </MKTypography>
              <MKTypography variant="h4" mt={4}>참여자</MKTypography>
              <MKTypography variant="body1" fontWeight="light" color="text">
                류지훈, 홍원표, 조영진, 사승연, 조은서, 박수훈
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

export default ASAN2023;
