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

function ClassAnalytics() {
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
                        { label: "CLASS-Analytics" },
                      ]}
                    />
                    <MKBox
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                    >
                      <MKTypography variant="h3">CLASS Analytics</MKTypography>
                    </MKBox>
                    <MKTypography
                      variant="body1"
                      fontWeight="light"
                      color="text"
                      mt={10}
                    >
                      Enter Description Here
                    </MKTypography>
                    <MKTypography
                      variant="body1"
                      fontWeight="light"
                      color="text"
                      mt={10}
                    >
                      <a href="https://class-analytics.com/" target="_blank">
                        CLASS-Analytics Website
                      </a>
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

export default ClassAnalytics;
