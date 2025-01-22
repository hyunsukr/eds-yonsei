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

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import yonseiEmblem from "assets/images/YonseiUniversityEmblem.png";


import classanalytics from "assets/images/class_init_logo_black.png"
function ResearchDevelop() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Research & Development
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={classanalytics}
              title="CLASS - Analytics"
              description="CLASS-Analytics is a Learning Analytics Managment System, where teachers and students can ..."
              action={{
                type: "internal",
                route: "/research/class-analytics",
                color: "info",
                label: "더 읽기",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={yonseiEmblem}
              title="AI-based AIG Algorithm"
              description="Coming soon..."
              action={{
                type: "internal",
                route: "/research/AIBasedAIG",
                color: "info",
                label: "더 읽기",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={yonseiEmblem}
              title="Assessments"
              description="There is currently a various collection of assessment research happening ..."
              action={{
                type: "internal",
                route: "/research/assessment",
                color: "info",
                label: "더 읽기",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ResearchDevelop;
