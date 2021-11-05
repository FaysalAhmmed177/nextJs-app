import React, { Fragment } from "react";
import { Head } from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetupPage = () => {
  const router = useRouter();

  const onAddMeetup = async (enteredMeetupData) => {
    console.log(enteredMeetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // .then((response) => response.json())
    // .then((data) => console.log(data));
    const data = await response.json();
    console.log("Data", data);

    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add a new Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing network opportunities"
        />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </Fragment>
  );
};

export default NewMeetupPage;
