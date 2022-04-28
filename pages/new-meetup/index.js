import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewPage = () => {
  const onAddMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
};

export default NewPage;
