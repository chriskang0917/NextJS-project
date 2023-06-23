import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://chriskang0917:goCcWitlABR1h5Xu@nextjs.bh5lmvf.mongodb.net/meetup?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup created successfully!" });
  }
};

export default handler;
