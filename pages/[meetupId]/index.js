import MeetupDetail from "@/components/meetups/MeetupDetail";

const DetailsPage = () => {
  return <MeetupDetail />;
};

// export async function getStaticProps(context) {
//   const meetupId = context.params.meetupId;

//   return {
//     props: {
//       meetupData: {},
//     },
//     revalidate: 60,
//   };
// }

export default DetailsPage;
