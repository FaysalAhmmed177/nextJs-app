import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const onAddMeetup = async (enteredMeetupData) => {
    console.log(enteredMeetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.json();
    console.log(data.message);
  };

  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
};

export default NewMeetupPage;
