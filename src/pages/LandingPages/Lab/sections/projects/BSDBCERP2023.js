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

function BSDBCERP2023() {
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
                        {
                          label:
                            "2022년 기초교양교육 강화사업 설계를 위한 기초연구",
                        },
                      ]}
                    />
                    <MKBox
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                    >
                      <MKTypography variant="h3">
                        2022년 기초교양교육 강화사업 설계를 위한 기초연구
                      </MKTypography>
                    </MKBox>
                    <MKTypography variant="h4" mt={4}>
                      과제명
                    </MKTypography>
                    <MKTypography
                      variant="body1"
                      fontWeight="light"
                      color="text"
                    >
                      기초교양교육 강화를 위한 고등교육 기회의 공정화: 4차 산업
                      인재 양성을 목적으로
                    </MKTypography>
                    <MKTypography variant="h4" mt={4}>
                      과제요약
                    </MKTypography>
                    <MKTypography
                      variant="body1"
                      fontWeight="light"
                      color="text"
                    >
                      고등교육에서 발생할 수 있는 기초학력에 대한 격차를
                      해소하고, 기초교양 교육기회의 공정화를 위한 역할과 방향성
                      제시
                    </MKTypography>
                    <MKTypography variant="h4" mt={4}>
                      주관기관
                    </MKTypography>
                    <MKTypography
                      variant="body1"
                      fontWeight="light"
                      color="text"
                    >
                      한국대학교육협의회
                    </MKTypography>
                    <MKTypography variant="h4" mt={4}>
                      과제기간
                    </MKTypography>
                    <MKTypography
                      variant="body1"
                      fontWeight="light"
                      color="text"
                    >
                      2021.10.11.-2021.12.30.
                    </MKTypography>
                    <MKTypography variant="h4" mt={4}>
                      과제번호
                    </MKTypography>
                    <MKTypography
                      variant="body1"
                      fontWeight="light"
                      color="text"
                    >
                      RM-2021-36-1014호
                    </MKTypography>
                    <MKTypography variant="h4" mt={4}>
                      참여자
                    </MKTypography>
                    <MKTypography
                      variant="body1"
                      fontWeight="light"
                      color="text"
                    >
                      류지훈, 권종겸, 김성은, 류현석, 박서희, 박희주, 사승연
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

export default BSDBCERP2023;
