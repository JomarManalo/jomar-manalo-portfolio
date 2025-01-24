<template>
  <div
    class="col-6 col-md-3 mb-3 mb-sm-5"
    :key="skills.id"
    v-for="skills in skillsContent"
  >
    <div :class="`c100 ${skills.skillClass}`">
      <span>{{ skills.skillPercent }}%</span>
      <div class="slice">
        <div class="bar"></div>
        <div class="fill"></div>
      </div>
    </div>
    <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
      {{ skills.skillName }}
    </h6>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillsContent: [
        { id: 1, skillClass: "p90", skillPercent: "90", skillName: "HTML" },
        {
          id: 2,
          skillClass: "p70",
          skillPercent: "70",
          skillName: "JAVASCRIPT",
        },
        { id: 3, skillClass: "p70", skillPercent: "70", skillName: "CSS" },
        { id: 4, skillClass: "p80", skillPercent: "80", skillName: "PHP" },
        {
          id: 5,
          skillClass: "p90",
          skillPercent: "90",
          skillName: "LARAVEL",
        },
        { id: 6, skillClass: "p70", skillPercent: "70", skillName: "VUE JS" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
