<style scoped>
  p.experience-detail:before {
    content: "";
    height: 5px;
    width: 5px;
    background-color: white;
    position: absolute;
    border-radius: 100%;
    margin-top: 9px;
  }
</style>
<template>
  <ul>
    <li v-for="experience in experienceContent" :key="experience.id">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
        experience.year
      }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ experience.position }}
        <span class="place open-sans-font">{{ experience.compnayName }}</span>
      </h5>
      <p class="open-sans-font experience-detail" v-for="expDetail in experience.details">	&nbsp;&nbsp;&nbsp;{{ expDetail.detail }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      experienceContent: [
        {
          id: 1,
          year: "   February 2023 - Present",
          position: " Tier 2 Technical Support Engineer",
          compnayName: "Yotpo",
          details: [
            { detail: 'Act as a focal point for communication with R&D, product teams, and support teams.' },
            { detail: 'Handle Tier 2 and escalation cases from Tier 1 agents.' },
            { detail: 'Migrate high-touch customers to the Yotpo Subscription app, ensuring seamless transitions.' },
            { detail: 'Create and update knowledge base articles for Tier 1 agents and migration experts.' },
            { detail: 'Conduct training sessions for Tier 1 agents and new hires.' },
            { detail: 'Accompany new releases, ensuring support agents are familiar with them and have the tools to address related issues.' },
            { detail: 'Investigate and report bugs to R&D and product teams.' }
          ]
          // details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,`,
        },
        {
          id: 2,
          year: "October 2022 - February 2023",
          position: " Tier 1 Technical Support Engineer",
          compnayName: "Yotpo",
          // details: `Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,`,
          details: [
            {detail: 'Install the Yotpo application on customer websites by editing the template files.'},
            {detail: 'Report and file usability, functionality, and production bugs.'},
            {detail: 'Resolve customer discrepancies and issues via emails and live chat.'},
            {detail: 'Provide above-and-beyond service to Yotpo’s customers, assisting with all technical and product-related queries.'},
            {detail: 'Handle multiple support requests via the ticketing system and chat services.'},
            {detail: 'Document and share knowledge by creating internal articles as well as self-help guides for customers.'}
          ]
        },
        {
          id: 3,
          year: "November 2019 - October 2022",
          position: "Web Developer",
          compnayName: "Tigernethost, OPC",
          // details: `Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,`,
          details: [
            {detail: 'Maintain websites and applications, overseeing content updates, debugging, and implementing feature enhancements.'},
            {detail: 'Design and implement back-end logic, ensuring the smooth functioning of web systems.'},
            {detail: 'Develop and maintain front-end functionality, ensuring a seamless user experience.'},
            {detail: 'Actively participate in brainstorming sessions to generate innovative ideas for project development.'},
            {detail: 'Submit status reports to project managers, updating them on project progress.'},
            {detail: "Specifying system changes that meet a client's requirements"},
            {detail: "Provide basic server support and troubleshoot issues to maintain seamless web services."},
            {detail: "Manage basic domain and hosting responsibilities to maintain a stable online presence."},
          ]
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
