import MeetupDetail from "@/components/meetups/MeetupDetail";

const DetailsPage = () => {
  return <MeetupDetail />;
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { meetupId: "1" } },
      { params: { meetupId: "2" } },
      { params: { meetupId: "3" } },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {},
    },
    revalidate: 60,
  };
}

export default DetailsPage;
