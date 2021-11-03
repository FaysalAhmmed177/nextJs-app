import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const onAddMeetup = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
};

export default NewMeetupPage;
