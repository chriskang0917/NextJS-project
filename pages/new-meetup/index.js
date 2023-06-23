import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetup) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(meetup),
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};
export default NewMeetupPage;
