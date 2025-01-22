import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function AboutBlock() {
  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12} container flexDirection="column" alignItems="center" sx={{ textAlign: "center", mb: { xs: 2, lg: 0 } }}>
            <MKBadge variant="contained" color="info" badgeContent="About" container sx={{ mb: 2 }} />
            <MKTypography variant="h3" fontWeight="bold">
              교육테이터사이언스 (Educational Data Science)
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={12} container flexDirection="column" alignItems="flex-start">
            <Grid item xs={12} container spacing={2}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                //   icon="public"
                  title="연구실 비전"
                  description="21세기 인재양성을 위한 교육과 과학적 연구방법의 토대인 통계 및 컴퓨터사이언스를 통합하는
                융합학문인 교육데이터사이언스(EDS)를 연구하고 활용하여, 생성형 교육시스템(Generative Education System)의
                기반 확립"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                //   icon="public"
                  title="연구실 목표"
                  description="EDS는 교육학의 이론 및 실제, 통계학, 컴퓨터 사이언스의 연구방법론적 측면을 연구/개발하고, 이의
                적용 및 활용을 통해 학문과 산업에 기여함"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AboutBlock;
