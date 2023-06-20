import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 1,
    title: "Meetup 1",
    image: "https://picsum.photos/200/300",
    description: "Meetup 1 description",
    address: "123456",
  },
  {
    id: 2,
    title: "Meetup 2",
    image: "https://picsum.photos/200/300",
    description: "Meetup 2 description",
    address: "123456",
  },
  {
    id: 3,
    title: "Meetup 3",
    image: "https://picsum.photos/200/300",
    description: "Meetup 3 description",
    address: "123456",
  },
];

const Home = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default Home;
