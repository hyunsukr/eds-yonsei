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

function Publications() {
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
                    <MKBox
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                    >
                      <MKTypography variant="h3">
                        EDS Yonsei Publications
                      </MKTypography>
                    </MKBox>
                    <MKTypography
                      variant="body1"
                      fontWeight="light"
                      color="text"
                      mt={10}
                    >
                      <ul>
                        <li>
                            박희주, 류지훈. (2023). GAMM과 PGM을 적용한 성장모형의 탐색. 교육평가연구, 36(2), 229-253.
                        </li>
                        <li>
                            조영진, 노혜림, 류지훈. (2023). 종단자료 분석을 위한 모형 기반 재귀적 분할 접근방식의 확장. 교육학연구, 61(1), 263-292.
                        </li>
                        <li>
                        Sa, S., Ryoo, H. S., & Ryoo, J. H. (2022). Application of AIG Implemented within CLASS
                            Software for Generating Cognitive Test Item Models. Educational Technology
                            International, 23 (2), 157-181.
                        </li>
                        <li>
                            박희주, 류지훈. (2022). 수학 학업성취도의 동질 성장모형과 변화 전환점 추적: 비선형 조각별 성장혼합모형의 적용. 교육학연구, 60(4), 90-121.
                        </li>
                        <li>
                            박희주, 류현석, 권종겸, 류지훈. (2022). 온라인 교육을 위한 LMS 패러다임의 전환. 미래교육학연구, 35(2), 49-72.
                        </li>
                        <li>
                            조영진, 노혜림, 류지훈. (2022). ECLS-K:2011 자료에서 SEMtree와 SEMforest의 적용. 교육평가연구, 35(2), 299-326.
                        </li>
                      </ul>
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

export default Publications;
