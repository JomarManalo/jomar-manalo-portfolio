<template>
  <ul>
    <li v-for="education in educationContent" :key="education.id">
      <div class="icon">
        <i class="fa fa-graduation-cap"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
        education.year
      }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ education.degree }}
        <span class="place open-sans-font">{{ education.institute }}</span>
      </h5>
      <p class="open-sans-font">{{ education.details }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      educationContent: [
        {
          id: 1,
          year: "2015 - 2019",
          degree: "Bachelor of Science in Information Technology",
          institute: "STI College San Fernando",
          details: `  2ndflr. Tita’s Bldg. Jose Abad Santos Avenue, Dolores City of San Fernando Pampanga, Philippines, 2000`,
        },
        // {
        //   id: 2,
        //   year: "2011 - 2015",
        //   degree: "Juniu",
        //   institute: " ",
        //   details: `San Carlos, San Luis, Pampanga, Philippines, 2014`,
        // },
        // {
        //   id: 3,
        //   year: "2009",
        //   degree: "Grade School ",
        //   institute: "Laug Elementary School",
        //   details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        // elit, sed do eiusmod tempor duntt`,
        // },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
