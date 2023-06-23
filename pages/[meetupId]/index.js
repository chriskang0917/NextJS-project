import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "@/components/meetups/MeetupDetail";
import { Fragment } from "react";
import Head from "next/head";

const DetailsPage = ({ meetupData }) => {
  return (
    <Fragment>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
      </Head>
      <MeetupDetail
        image={meetupData.image}
        address={meetupData.address}
        title={meetupData.title}
        description={meetupData.description}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://chriskang0917:goCcWitlABR1h5Xu@nextjs.bh5lmvf.mongodb.net/meetup?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  // TODO: It could be refactored without redundant code
  const client = await MongoClient.connect(
    "mongodb+srv://chriskang0917:goCcWitlABR1h5Xu@nextjs.bh5lmvf.mongodb.net/meetup?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const objectId = new ObjectId(meetupId);
  const meetupData = await meetupCollection.findOne({
    _id: objectId,
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: meetupData._id.toString(),
        title: meetupData.title,
        description: meetupData.description,
        image: meetupData.image,
        address: meetupData.address,
      },
    },
    revalidate: 60,
  };
}

export default DetailsPage;
