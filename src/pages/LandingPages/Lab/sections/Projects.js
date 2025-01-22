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

function Projects() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            연구실 과제 / Projects
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={yonseiEmblem}
              title="강원 학생 학습진단 결과 분석"
              description="강원 학생 학습진단 결과 분석 및 학교 단위 학습지원대상학생 다중지원체제 구축 운영-방안 정책 연구용역 ..."
              action={{
                type: "internal",
                route: "/projects/2023gangwoneducation",
                color: "info",
                label: "더 읽기",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={yonseiEmblem}
              title="2023 아산 유스프러너 교육 효과성 분석 연구"
              description="2023 아산 유스프러너 교육 효과성 분석 연구는 2023년 1학기 아산유스프러너 기업가정신 함양 프로그램에
              참여하는 중·고등학생들의 기업가 정신 향상 ..."
              action={{
                type: "internal",
                route: "/projects/2023asan",
                color: "info",
                label: "더 읽기",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={yonseiEmblem}
              title="2022년 기초교양교육 강화사업 설계를 위한 기초연구"
              description="고등교육에서 발생할 수 있는 기초학력에 대한 격차를 해소하고, 기초교양 교육기회의 공정화를 위한 역할과 방향성 제시..."
              action={{
                type: "internal",
                route: "/projects/2022basiceducationreinforcement",
                color: "info",
                label: "더 읽기",
              }}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Flexible work hours"
              description="Rather than worrying about switching offices every couple years, you stay in the same place."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                label: "read more",
              }}
            />
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Projects;
