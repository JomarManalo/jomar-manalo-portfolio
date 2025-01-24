<template>
  <ul class="about-list list-unstyled open-sans-font">
    <li v-for="personalInfo in personalInfoContent" :key="personalInfo.id">
      <span class="title">{{ personalInfo.meta }}: </span>
      <span
        class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
      >
        {{ personalInfo.metaInfo }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      personalInfoContent: [
        { id: 1, meta: "first name", metaInfo: "Jomar" },
        { id: 2, meta: "last name", metaInfo: "Manalo" },
        { id: 3, meta: "Age", metaInfo: "25 Years" },
        { id: 4, meta: "Nationality", metaInfo: "Filipino" },
        { id: 5, meta: "Freelance", metaInfo: "Available" },
        { id: 6, meta: "Address", metaInfo: "Pampanga, Philippines" },
        // { id: 7, meta: "phone", metaInfo: "+639266469246" },
        { id: 8, meta: "Email", metaInfo: "jomar.t.manalo@gmail.com" },
        { id: 9, meta: "Skype", metaInfo: " jomar.t.manalo@gmail.com" },
        { id: 10, meta: "langages", metaInfo: "English, Filipino" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
