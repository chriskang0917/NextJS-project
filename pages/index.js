import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

const HomePage = ({ meetups }) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse available meetups" />
      </Head>
      <MeetupList meetups={meetups} />
    </Fragment>
  );
};

export async function getStaticProps() {
  // Do any async fetching here

  // TODO: It could be refactored without redundant code
  const client = await MongoClient.connect(
    "mongodb+srv://chriskang0917:goCcWitlABR1h5Xu@nextjs.bh5lmvf.mongodb.net/meetup?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
      revalidate: 1,
    },
  };
}

export default HomePage;
